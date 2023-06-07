import React, { useState, useEffect } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';

import { useAppSelector } from 'app/hooks';

import { getCurrentDate } from 'utils/helpers/getCurrentDate';
import { declensionByQuantity } from 'utils/helpers/declensionByQuantity';
import { getCorrectLocationName } from 'utils/helpers/getCorrectLocationName';

import HotelTemplate from 'components/ui/HotelTemplate/HotelTemplate';

import { Ihotel, IhotelSliderImage } from 'types/generalTypes';

// /. imports

const MainSection: React.FC = () => {
    const {
        hotelsData,
        favouriteHotelsData,
        hotelsDataFetchError,
        currentLocation,
        arrivalDate,
        isHotelsDataLoading,
        hotelSliderImages
    } = useAppSelector(state => state.hotelSlice);

    const [hotelsTextValue, setHotelsTextValue] = useState<string>('');

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

    // /. hooks

    useEffect(() => {
        setHotelsTextValue(
            declensionByQuantity(favouriteHotelsData.length, [
                'отель',
                'отеля',
                'отелей'
            ])
        );
    }, [favouriteHotelsData]);

    // /. effects

    return (
        <div className="hotel-page__main">
            <div className="hotel-page__main-header">
                <ul className="hotel-page__breadcrumb-nav breadcrumb-nav">
                    <li className="breadcrumb-nav__element">Отели</li>
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
                    <li
                        className="breadcrumb-nav__element"
                        title={getCorrectLocationName(currentLocation)}
                    >
                        {getCorrectLocationName(currentLocation)}
                    </li>
                </ul>
                <span className="hotel-page__main-date">
                    {getCurrentDate(arrivalDate, 'combined')}
                </span>
            </div>

            <div className="hotel-page__main-slider">
                <Swiper breakpoints={breakpoints}>
                    {hotelSliderImages.map((image: IhotelSliderImage) => {
                        return (
                            <SwiperSlide key={image.id}>
                                <img
                                    src={require(`assets/images/${image.imageUrl}`)}
                                    alt="hotel image"
                                />
                            </SwiperSlide>
                        );
                    })}
                </Swiper>
            </div>

            <p className="hotel-page__main-info">
                Добавлено в Избранное: <span>{favouriteHotelsData.length}</span>{' '}
                {hotelsTextValue}
            </p>

            <>
                {hotelsDataFetchError ? (
                    <h3 className="data-message">
                        Something went wrong: {hotelsDataFetchError}
                    </h3>
                ) : isHotelsDataLoading ? (
                    <h3 className="data-message">Loading data...</h3>
                ) : hotelsData.length === 0 ? (
                    <h3 className="data-message">No matches...</h3>
                ) : (
                    <div className="hotel-page__main-list">
                        <ul className="hotels-list hotels-list_main">
                            {hotelsData?.map((hotel: Ihotel) => {
                                return (
                                    <HotelTemplate
                                        key={hotel.hotelId}
                                        id={hotel.hotelId}
                                        name={hotel.hotelName}
                                        locationName={hotel.location.name}
                                        price={hotel.priceAvg}
                                        rating={hotel.stars}
                                        {...hotel}
                                    />
                                );
                            })}
                        </ul>
                    </div>
                )}
            </>
        </div>
    );
};

export default MainSection;
