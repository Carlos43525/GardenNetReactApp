import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { AccountService } from '../Services/AccountService';
import { ResetPassword } from './ResetPassword';

function Account({ history, match }) {
    const { path } = match;

    useEffect(() => {
        // redirect to home if already logged in
        if (AccountService.userValue) {
            history.push('/');
        }
    }, []);

    return (
        <div className="container">
            <div className="row">
                <div className="col-sm-8 offset-sm-2 mt-5">
                    <div className="card m-3">
                        <Routes>
                            <Route path={`${path}/reset-password`} component={ResetPassword} />
                        </Routes>
                    </div>
                </div>
            </div>
        </div>
    );
}

export { Account };