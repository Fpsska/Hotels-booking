import React from 'react';

import AuthForm from 'components/ui/AuthForm/AuthForm';

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
