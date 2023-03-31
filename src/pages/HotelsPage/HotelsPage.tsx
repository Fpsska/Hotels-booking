import React, { useState, useEffect } from 'react';

import { Navigate } from 'react-router';

import { Swiper, SwiperSlide } from 'swiper/react';

import { useAppSelector, useAppDispatch } from 'app/hooks';

import {
    triggerHotelsDataFetch,
    setHotelsDataError,
    setFavouriteHotelsData
} from 'app/slices/hotelSlice';

import { fetchHotelsData } from 'app/api/fetchHotelsData';

import { getCurrentDate } from 'utils/helpers/getCurrentDate';

import HotelTemplate from 'components/ui/HotelTemplate/HotelTemplate';
import FindForm from 'components/layout/FindForm/FindForm';
import SortControls from 'components/ui/SortControls/SortControls';
import Header from 'components/layout/Header/Header';

import slider_1 from '../../assets/images/slider-image_1.jpg';
import slider_2 from '../../assets/images/slider-image_2.jpg';
import slider_3 from '../../assets/images/slider-image_3.jpg';
import slider_4 from '../../assets/images/slider-image_4.jpg';

import './hotels-page.scss';

// /. imports

const HotelsPage: React.FC = () => {
    const { isUserAuthorized } = useAppSelector(state => state.authSlice);
    const {
        hotelsData,
        favouriteHotelsData,
        hotelsDataFetchError,
        currentLocation,
        arrivalDate
    } = useAppSelector(state => state.hotelSlice);

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

    // /. hooks

    useEffect(() => {
        // logic of handling fetchHotelsData Promise
        const args: any = {
            location: currentLocation,
            lang: 'ru',
            limit: 2
        };

        fetchHotelsData(args)
            .then(() => console.log('start fetching'))
            .then(() => dispatch(triggerHotelsDataFetch()))
            .catch(({ message }) => {
                console.error('Error of fetchHotelsData promise:', message);
                dispatch(setHotelsDataError(message));
            });
    }, [currentLocation]);

    useEffect(() => {
        // update favouriteHotelsData[]
        dispatch(setFavouriteHotelsData());
    }, [hotelsData]);

    // /. effects

    return isUserAuthorized ? (
        <div className="hotel-page">
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
                                    {currentLocation}
                                </li>
                            </ul>
                            <span className="hotel-page__date">
                                {getCurrentDate(arrivalDate, 'combined')}
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
                            Добавлено в Избранное:{' '}
                            <span>{favouriteHotelsData.length}</span> отеля
                        </p>

                        <>
                            {hotelsDataFetchError ? (
                                <h3 className="data-message">
                                    Something went wrong: {hotelsDataFetchError}
                                </h3>
                            ) : hotelsData.length <= 0 ? (
                                <h3 className="data-message">
                                    Loading data...
                                </h3>
                            ) : (
                                <ul className="hotels-list hotels-list_main">
                                    {hotelsData?.map((hotel: any) => {
                                        return (
                                            <HotelTemplate
                                                key={hotel.id}
                                                name={hotel.fullName}
                                                date="7 июля 2020"
                                                duration="1 день"
                                                price={hotel._score}
                                                rating={hotel._score}
                                                {...hotel}
                                            />
                                        );
                                    })}
                                </ul>
                            )}
                        </>
                    </div>
                    <div className="hotel-page__filter">
                        <FindForm />
                    </div>
                    <div className="hotel-page__favourite">
                        <h2 className="hotel-page__title hotel-page__title_favourite">
                            Избранное
                        </h2>

                        <SortControls
                            additionalClass={
                                favouriteHotelsData.length > 0
                                    ? 'hotel-page__sort-controls'
                                    : ''
                            }
                        />

                        <>
                            {favouriteHotelsData.length <= 0 ? (
                                <h3 className="data-message">
                                    Favourite data is empty
                                </h3>
                            ) : (
                                <ul className="hotels-list hotels-list_favourite">
                                    {favouriteHotelsData?.map(hotel => {
                                        return (
                                            <HotelTemplate
                                                key={hotel.id}
                                                name={hotel.fullName}
                                                date="7 июля 2020"
                                                duration="1 день"
                                                price={hotel._score}
                                                rating={hotel._score}
                                                {...hotel}
                                                additionalClass="hotels-list__template_favourite"
                                            />
                                        );
                                    })}
                                </ul>
                            )}
                        </>
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
