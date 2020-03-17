import React from 'react';
import { Redirect } from 'react-router-dom';

const LoginPage = ({ isLoggedIn, onLogin }) => {

    if (isLoggedIn) {
        return <Redirect to="/" />
    };

    return (
        <div className="container-fluid">
            <div className="jumbotron text-center">
                <p>Login to see secret page!</p>
                <button
                    className="btn btn-primary"
                    onClick={onLogin} >
                    Login
            </button>
            </div>
        </div>
    );
};

export default LoginPage;