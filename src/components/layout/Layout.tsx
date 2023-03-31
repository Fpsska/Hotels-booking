import React from 'react';

import { Outlet } from 'react-router';

import { useAppSelector } from 'app/hooks';

import Header from './Header/Header';

// /. imports

const Layout: React.FC = () => {
    const { isUserAuthorized } = useAppSelector(state => state.authSlice);

    // /. hooks

    return (
        <div className="page">
            <>{isUserAuthorized && <Header />}</>
            <main className="main">
                <Outlet />
            </main>
            <footer className="footer"></footer>
        </div>
    );
};

export default Layout;
