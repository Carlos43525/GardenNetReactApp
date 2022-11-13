import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import { AccountService } from 'Auth/Services/AccountService';

const PrivateRoute = ({ component: Component, roles, ...rest }) => {
    return (
        <Route {...rest} render={props => {
            const user = AccountService.userValue;
            if (!user) {
                // not logged in so redirect to login page with the return url
                return <Navigate to={{ pathname: '/account/login', state: { from: props.location } }} />
            }

            // check if route is restricted by role
            if (roles && roles.indexOf(user.role) === -1) {
                // role not authorized so redirect to home page
                return <Navigate to={{ pathname: '/' }} />
            }

            // authorized so return component
            return <Component {...props} />
        }} />
        )
}

export default PrivateRoute