import React from 'react';

import AuthForm from 'components/layout/AuthForm/AuthForm';

import './auth-page.scss';

// /. imports

const AuthPage: React.FC = () => {
    return (
        <div className="auth-page">
            <AuthForm />
        </div>
    );
};

export default AuthPage;
