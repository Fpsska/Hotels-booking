import React from 'react';

import { Route, Routes } from 'react-router';

import AuthPage from 'pages/AuthPage/AuthPage';
import HotelsPage from 'pages/HotelsPage/HotelsPage';
import NoFoundPage from 'pages/NoFoundPage/NoFoundPage';

import Layout from '../Layout';

import 'assets/styles/_media.scss';
import 'assets/styles/style.scss';
import './App.css';

// /. imports

const App: React.FC = () => {
    return (
        <div className="App">
            <Routes>
                <Route
                    path="/"
                    element={<Layout />}
                >
                    <Route
                        index
                        element={<AuthPage />}
                    />
                    <Route
                        path="hotels"
                        element={<HotelsPage />}
                    />
                    <Route
                        path="*"
                        element={<NoFoundPage />}
                    />
                </Route>
            </Routes>
        </div>
    );
};

export default App;
