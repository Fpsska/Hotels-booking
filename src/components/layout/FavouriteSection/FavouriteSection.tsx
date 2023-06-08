import React from 'react';

import { useAppSelector } from 'app/hooks';

import SortControls from 'components/ui/SortControls/SortControls';

import HotelsList from '../HotelsList/HotelsList';

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
                        <HotelsList
                            data={favouriteHotelsData}
                            additionalClass="favourite-section__list"
                        />
                    </div>
                )}
            </>
        </div>
    );
};

export default FavouriteSection;
