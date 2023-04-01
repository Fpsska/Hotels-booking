import React from 'react';

import { Outlet } from 'react-router';

// /. imports

const Layout: React.FC = () => {
    return (
        <div className="page">
            <header className="header"></header>
            <main className="main">
                <Outlet />
            </main>
            <footer className="footer"></footer>
        </div>
    );
};

export default Layout;
