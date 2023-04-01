import React, { useEffect } from 'react';

import { useAppSelector, useAppDispatch } from 'app/hooks';

import { setFavouriteHotelsData } from 'app/slices/hotelSlice';

import SortControls from 'components/ui/SortControls/SortControls';
import HotelTemplate from 'components/ui/HotelTemplate/HotelTemplate';

import { Ihotel } from 'context/db';

// /. imports

const FavouriteSection: React.FC = () => {
    const { hotelsData, favouriteHotelsData } = useAppSelector(
        state => state.hotelSlice
    );

    const dispatch = useAppDispatch();

    // /. hooks

    // useEffect(() => {
    //     // update favouriteHotelsData[]
    //     dispatch(setFavouriteHotelsData());
    // }, [hotelsData]);

    // /. effects

    return (
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
                isDisabled={favouriteHotelsData.length <= 1}
            />
            <>
                {favouriteHotelsData.length === 0 ? (
                    <h3 className="data-message">Favourite data is empty</h3>
                ) : (
                    <ul className="hotels-list hotels-list_favourite">
                        {favouriteHotelsData?.map((hotel: Ihotel) => {
                            return (
                                <HotelTemplate
                                    key={hotel.id}
                                    name={hotel.fullName}
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
    );
};

export default FavouriteSection;
