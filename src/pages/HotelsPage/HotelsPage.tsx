import React from 'react';

import { mockHotelsListData } from 'context/db';

import HotelTemplate from 'components/ui/HotelTemplate/HotelTemplate';

import './hotels-page.scss';

// /. imports

const HotelsPage: React.FC = () => {
    return (
        <div className="hotel-page">
            <div className="hotel-page__header">
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
                <div className="hotel-page__content">
                    <div className="hotel-page__main">
                        <div className="hotel-page__main-header">
                            <ul className="hotel-page__breadcrumb-nav breadcrumb-nav">
                                <li className="breadcrumb-nav__element">
                                    Отели
                                </li>
                                <li className="breadcrumb-nav__element breadcrumb-nav__element_separator">
                                    <svg
                                        width="11"
                                        height="20"
                                        viewBox="0 0 11 20"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M1 1.33334L9.66667 10L1 18.6667"
                                            stroke="#A7A7A7"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                </li>
                                <li className="breadcrumb-nav__element">
                                    Москва
                                </li>
                            </ul>
                            <span className="hotel-page__date">
                                07 июля 2020
                            </span>
                        </div>

                        <div className="hotel-page__slider">slider</div>

                        <p className="hotel-page__info">
                            Добавлено в Избранное: <span>3</span> отеля
                        </p>

                        <ul className="hotels-list">
                            {mockHotelsListData.map(hotel => {
                                return (
                                    <HotelTemplate
                                        key={hotel.id}
                                        {...hotel}
                                    />
                                );
                            })}
                        </ul>
                    </div>
                    <div className="hotel-page__filter"></div>
                    <div className="hotel-page__favourite"></div>
                </div>
            </div>
        </div>
    );
};

export default HotelsPage;
