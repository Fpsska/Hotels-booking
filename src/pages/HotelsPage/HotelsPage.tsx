import React from 'react';

import './hotels-page.scss';

// /. imports

const HotelsPage: React.FC = () => {
    return (
        <div className="hotel-page">
            <div className="hotel-page__bar">
                <span className="hotel-page__title">Simple Hotel Check</span>
                <button
                    className="hotel-page__button"
                    type="button"
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
            </div>
            <div className="container">
                <div className="hotel-page__content"></div>
            </div>
        </div>
    );
};

export default HotelsPage;
