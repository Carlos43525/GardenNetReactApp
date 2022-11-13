import { FetchWrapper } from '../Helpers/FetchWrapper';
import { History } from '../Helpers/History';
import { BehaviorSubject } from 'rxjs';

//const apiUrl = process.env.REACT_API_URL; 
const apiUrl = "https://garden-net-web-api.azurewebsites.net"
const userSubject = new BehaviorSubject(null);
const baseUrl = `${apiUrl}/accounts`;

export const AccountService = {
    login,
    logout,
    refreshToken,
    register,
    verifyEmail,
    forgotPassword,
    validateResetToken,
    resetPassword,
    getAll,
    getById,
    create,
    update,
    delete: _delete,
    user: userSubject.asObservable(),
    get userValue () { return userSubject.value }
};

function login(email, password) {
    return FetchWrapper.post(`${baseUrl}/authenticate`, { email, password })
    .then(user => {
        // publish user to subscribers and start timer to refresh token
        userSubject.next(user);
        startRefreshTokenTimer();
        return user;
    });
}

function logout() {
    // revoke token, stop refresh timer, publish null to user subscribers and redirect to login page
    FetchWrapper.post(`${baseUrl}/revoke-token`, {});
    stopRefreshTokenTimer();
    userSubject.next(null);
    History.push('/account/login');
}

function refreshToken() {
    return FetchWrapper.post(`${baseUrl}/refresh-token`, {})
        .then(user => {
            // publish user to subscribers and start timer to refresh token
            userSubject.next(user);
            startRefreshTokenTimer();
            return user;
        });
}

function register(params) {
    return FetchWrapper.post(`${baseUrl}/register`, params);
}

function verifyEmail(token) {
    return FetchWrapper.post(`${baseUrl}/verify-email`, { token });
}

function forgotPassword(email) {
    return FetchWrapper.post(`${baseUrl}/forgot-password`, { email });
}

function validateResetToken(token) {
    return FetchWrapper.post(`${baseUrl}/validate-reset-token`, { token });
}

function resetPassword({ token, password, confirmPassword }) {
    return FetchWrapper.post(`${baseUrl}/reset-password`, { token, password, confirmPassword });
}

function getAll() {
    return FetchWrapper.get(baseUrl);
}

function getById(id) {
    return FetchWrapper.get(`${baseUrl}/${id}`);
}

function create(params) {
    return FetchWrapper.post(baseUrl, params);
}

function update(id, params) {
    return FetchWrapper.put(`${baseUrl}/${id}`, params)
        .then(user => {
            // update stored user if the logged in user updated their own record
            if (user.id === userSubject.value.id) {
                // publish updated user to subscribers
                user = { ...userSubject.value, ...user };
                userSubject.next(user);
            }
            return user;
        });
}

// prefixed with underscore because 'delete' is a reserved word in javascript
function _delete(id) {
    return FetchWrapper.delete(`${baseUrl}/${id}`)
        .then(x => {
            // auto logout if the logged in user deleted their own record
            if (id === userSubject.value.id) {
                logout();
            }
            return x;
        });
}

let refreshTokenTimeout;

function startRefreshTokenTimer() {
    // parse json object from base64 encoded jwt token
    const jwtToken = JSON.parse(atob(userSubject.value.jwtToken.split('.')[1]));

    // set a timeout to refresh the token a minute before it expires
    const expires = new Date(jwtToken.exp * 1000);
    const timeout = expires.getTime() - Date.now() - (60 * 1000);
    refreshTokenTimeout = setTimeout(refreshToken, timeout);
}

function stopRefreshTokenTimer() {
    clearTimeout(refreshTokenTimeout);
}