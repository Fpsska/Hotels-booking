import React, { useState } from 'react';

import { useNavigate } from 'react-router-dom';
import { Navigate } from 'react-router';

import { Swiper, SwiperSlide } from 'swiper/react';

import { useAppSelector, useAppDispatch } from 'app/hooks';

import { switchUserAuthStatus } from 'app/slices/authSlice';

import { mockHotelsListData, mockFavouriteHotelsListData } from 'context/db';

import HotelTemplate from 'components/ui/HotelTemplate/HotelTemplate';
import FindForm from 'components/layout/FindForm/FindForm';
import SortControls from 'components/ui/SortControls/SortControls';

import slider_1 from '../../assets/images/slider-image_1.jpg';
import slider_2 from '../../assets/images/slider-image_2.jpg';
import slider_3 from '../../assets/images/slider-image_3.jpg';
import slider_4 from '../../assets/images/slider-image_4.jpg';

import './hotels-page.scss';

// /. imports

const HotelsPage: React.FC = () => {
    const { isUserAuthorized } = useAppSelector(state => state.authSlice);

    const [breakpoints] = useState<{
        [key: number]: { [key: string]: string | number };
    }>({
        320: {
            slidesPerView: 1,
            spaceBetween: 15
        },
        360: {
            slidesPerView: 1.5,
            spaceBetween: 15
        },
        600: {
            slidesPerView: 2.2,
            spaceBetween: 15
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 15
        },
        1024: {
            slidesPerView: 3.5,
            spaceBetween: 15
        },
        1440: {
            slidesPerView: 3.5,
            spaceBetween: 15
        }
    });

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

    return isUserAuthorized ? (
        <div className="hotel-page">
            <div className="hotel-page__header">
                <h1 className="hotel-page__title">Simple Hotel Check</h1>
                <button
                    className="hotel-page__button"
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

                        <div className="hotel-page__slider">
                            <Swiper breakpoints={breakpoints}>
                                <SwiperSlide>
                                    <img
                                        src={slider_1}
                                        alt="hotel image"
                                    />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img
                                        src={slider_2}
                                        alt="hotel image"
                                    />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img
                                        src={slider_3}
                                        alt="hotel image"
                                    />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img
                                        src={slider_4}
                                        alt="hotel image"
                                    />
                                </SwiperSlide>
                            </Swiper>
                        </div>

                        <p className="hotel-page__info">
                            Добавлено в Избранное: <span>3</span> отеля
                        </p>

                        <ul className="hotels-list hotels-list_main">
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
                    <div className="hotel-page__filter">
                        <FindForm />
                    </div>
                    <div className="hotel-page__favourite">
                        <h2 className="hotel-page__title hotel-page__title_favourite">
                            Избранное
                        </h2>

                        <SortControls additionalClass="hotel-page__sort-controls" />

                        <ul className="hotels-list hotels-list_favourite">
                            {mockFavouriteHotelsListData.map(hotel => {
                                return (
                                    <HotelTemplate
                                        key={hotel.id}
                                        {...hotel}
                                        additionalClass="hotels-list__template_favourite"
                                    />
                                );
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    ) : (
        <Navigate
            to="/LIIS-Task"
            replace={true}
        />
    );
};

export default HotelsPage;
