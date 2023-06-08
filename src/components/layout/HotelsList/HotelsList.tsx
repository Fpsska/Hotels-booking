import React from 'react';

import HotelTemplate from 'components/layout/HotelsList/HotelTemplate';

import { Ihotel } from 'types/generalTypes';

import './hotels-list.scss';

// /. imports

interface propTypes {
    data: Ihotel[];
    additionalClass?: string;
}

// /. interfaces

const HotelsList: React.FC<propTypes> = ({ data, additionalClass }) => {
    return (
        <ul className={`hotels-list ${additionalClass ? additionalClass : ''}`}>
            {data?.map((hotel: Ihotel) => {
                return (
                    <HotelTemplate
                        key={hotel.hotelId}
                        id={hotel.hotelId}
                        name={hotel.hotelName}
                        locationName={hotel.location.name}
                        rating={hotel.stars}
                        price={hotel.priceAvg}
                        {...hotel}
                    />
                );
            })}
        </ul>
    );
};

export default HotelsList;
