import React, { useState, useEffect } from 'react';

import { useAppDispatch } from 'app/hooks';

import {
    switchHotelFavouriteStatus,
    setFavouriteHotelsData
} from 'app/slices/hotelSlice';

import { declensionByQuantity } from 'utils/helpers/declensionByQuantity';

import hotelImg from 'assets/icons/house-icon.svg';

import StarRating from '../../ui/StarRating/StarRating';

// /. imports

interface propTypes {
    id: number;
    name: string;
    locationName: string;
    checkIn: string;
    duration: number;
    price: number;
    rating: number;
    isFavourite: boolean;
}

// /. interfaces

const HotelTemplate: React.FC<propTypes> = props => {
    const {
        id,
        name,
        locationName,
        checkIn,
        duration,
        price,
        rating,
        isFavourite
    } = props;

    const [daysTextValue, setDaysTextValue] = useState<string>('');

    const dispatch = useAppDispatch();

    // /. hooks

    const onFavouriteActionClick = (): void => {
        if (isFavourite) {
            dispatch(
                switchHotelFavouriteStatus({
                    payloadID: id,
                    status: false
                })
            );
            dispatch(
                setFavouriteHotelsData({ operation: 'remove', payloadID: id })
            );
        } else {
            dispatch(
                switchHotelFavouriteStatus({
                    payloadID: id,
                    status: true
                })
            );
            dispatch(
                setFavouriteHotelsData({ operation: 'add', payloadID: id })
            );
        }
    };

    // /. functions

    useEffect(() => {
        setDaysTextValue(
            declensionByQuantity(duration, ['день', 'дня', 'дней'])
        );
    }, [duration]);

    // /. effects

    return (
        <li className="hotels-list__template">
            <div className="hotels-list__image">
                <img
                    src={hotelImg}
                    alt="hotel image"
                />
            </div>

            <div className="hotels-list__info">
                <div className="hotels-list__header">
                    <div className="hotels-list__descr">
                        <h3 className="hotels-list__name">
                            {`${name}, ${locationName}`}
                        </h3>
                        <p className="hotels-list__date">
                            <span>{checkIn}</span> -{' '}
                            <span>{`${duration} ${daysTextValue}`}</span>
                        </p>
                    </div>
                    <button
                        className={`hotels-list__button-add ${
                            isFavourite ? 'active' : ''
                        }`}
                        aria-label={
                            isFavourite
                                ? 'remove from favourite'
                                : 'add to favourite'
                        }
                        onClick={onFavouriteActionClick}
                    >
                        <svg
                            width="23"
                            height="20"
                            viewBox="0 0 23 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M20.3807 2.59133C19.8676 2.08683 19.2583 1.68663 18.5878 1.41358C17.9172 1.14054 17.1985 1 16.4727 1C15.7468 1 15.0281 1.14054 14.3576 1.41358C13.687 1.68663 13.0778 2.08683 12.5646 2.59133L11.4997 3.63785L10.4348 2.59133C9.39834 1.57276 7.99258 1.00053 6.52679 1.00053C5.06099 1.00053 3.65523 1.57276 2.61876 2.59133C1.58229 3.6099 1 4.99139 1 6.43187C1 7.87235 1.58229 9.25383 2.61876 10.2724L3.68367 11.3189L11.4997 19L19.3158 11.3189L20.3807 10.2724C20.8941 9.76814 21.3013 9.16942 21.5791 8.51045C21.857 7.85148 22 7.14517 22 6.43187C22 5.71857 21.857 5.01225 21.5791 4.35328C21.3013 3.69431 20.8941 3.09559 20.3807 2.59133Z"
                                fill=""
                                stroke=""
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </button>
                </div>

                <div className="hotels-list__bottom">
                    <StarRating rating={rating} />
                    <div className="hotels-list__price">
                        <span className="hotels-list__price-title">Price:</span>
                        <span className="hotels-list__price-amount">
                            {price} ₽
                        </span>
                    </div>
                </div>
            </div>
        </li>
    );
};

export default HotelTemplate;
