import React from 'react';

import { useNavigate } from 'react-router-dom';

import { useAppDispatch } from 'app/hooks';

import { switchUserAuthStatus } from 'app/slices/authSlice';

import './header.scss';

// /. imports

const Header: React.FC = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    // /. hooks

    const onButtonLogOutClick = (): void => {
        dispatch(switchUserAuthStatus(false));
        navigate('/LIIS-Task');

        localStorage.setItem('isUserAuthStatus', JSON.stringify(false));
        localStorage.setItem(
            'userData',
            JSON.stringify({
                email: '',
                password: ''
            })
        );
    };

    // /. functions

    return (
        <header className="header">
            <h1 className="header__title">Simple Hotel Check</h1>
            <button
                className="header__button"
                type="button"
                aria-label="log out"
                onClick={onButtonLogOutClick}
            >
                <span>Выйти</span>
                <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M9 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H9"
                        stroke="#41522E"
                        strokeWidth="2.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M16 17L21 12L16 7"
                        stroke="#41522E"
                        strokeWidth="2.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M21 12H9"
                        stroke="#41522E"
                        strokeWidth="2.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            </button>
        </header>
    );
};

export default Header;
