import React from 'react';

import { useAppSelector } from 'app/hooks';

import SortControls from 'components/ui/SortControls/SortControls';
import HotelTemplate from 'components/ui/HotelTemplate/HotelTemplate';

import { Ihotel } from 'types/generalTypes';

import './favourite-section.scss';

// /. imports

const FavouriteSection: React.FC<{ additionalClass?: string }> = ({
    additionalClass
}) => {
    const { favouriteHotelsData } = useAppSelector(state => state.hotelSlice);

    // /. hooks

    return (
        <div
            className={`favourite-section ${
                additionalClass ? additionalClass : ''
            }`}
        >
            <h2 className="favourite-section__title">Избранное</h2>

            <SortControls
                additionalClass={
                    favouriteHotelsData.length > 0
                        ? 'favourite-section__sort-controls'
                        : ''
                }
                isDisabled={favouriteHotelsData.length <= 1}
            />
            <>
                {favouriteHotelsData.length === 0 ? (
                    <h3 className="data-message">Favourite data is empty</h3>
                ) : (
                    <div className="favourite-section__preview">
                        <ul className="favourite-section__list hotels-list">
                            {favouriteHotelsData?.map((hotel: Ihotel) => {
                                return (
                                    <HotelTemplate
                                        key={hotel.hotelId}
                                        id={hotel.hotelId}
                                        name={hotel.hotelName}
                                        locationName={hotel.location.name}
                                        rating={hotel.stars}
                                        price={hotel.priceAvg}
                                        {...hotel}
                                        additionalClass="hotels-list__template_favourite"
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

export default FavouriteSection;
