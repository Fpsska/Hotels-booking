import { createSlice, current, PayloadAction } from '@reduxjs/toolkit';

import { getCurrentDate } from 'utils/helpers/getCurrentDate';

// /. imports

interface IhotelSlice {
    currentLocation: string;
    arrivalDate: string;
    daysCount: string;
    hotelsData: any[];
    favouriteHotelsData: any[];
    hotelsDataFetchError: null | string;
}

// /. interfaces

const initialState: IhotelSlice = {
    currentLocation: 'Москва',
    arrivalDate: getCurrentDate(new Date()), // 2023-03-31
    daysCount: '1',
    hotelsData: [],
    favouriteHotelsData: [],
    hotelsDataFetchError: null
};

// /. state

const hotelSlice = createSlice({
    name: 'hotelSlice',
    initialState,
    reducers: {
        setCurrentLocation(state, action: PayloadAction<string>) {
            state.currentLocation = action.payload;
        },
        setArrivalDate(state, action: PayloadAction<string>) {
            state.arrivalDate = action.payload;
        },
        setDaysCount(state, action: PayloadAction<string>) {
            state.daysCount = action.payload;
        },
        triggerHotelsDataFetch() {
            return;
        },
        setHotelsData(state, action: PayloadAction<any>) {
            const { hotelsData } = action.payload;
            // /. payload

            const extendedHotelsData = hotelsData.map((hotel: any) => {
                return {
                    ...hotel,
                    isFavourite: false
                };
            });

            state.hotelsData = extendedHotelsData;
            console.log(state.hotelsData);
        },
        switchHotelFavouriteStatus(
            state,
            action: PayloadAction<{ payloadID: number; status: boolean }>
        ) {
            const { payloadID, status } = action.payload;
            // /. payload

            const targetHotel = state.hotelsData.find(
                item => item.id === payloadID
            );

            if (targetHotel) {
                targetHotel.isFavourite = status;
            }
        },
        setFavouriteHotelsData(state) {
            state.favouriteHotelsData = state.hotelsData.filter(
                hotel => hotel.isFavourite
            );
        },
        setHotelsDataError(state, action: PayloadAction<null | string>) {
            state.hotelsDataFetchError = action.payload;
        }
    }
});

export const {
    setCurrentLocation,
    setArrivalDate,
    setDaysCount,
    triggerHotelsDataFetch,
    setHotelsData,
    setHotelsDataError,
    switchHotelFavouriteStatus,
    setFavouriteHotelsData
} = hotelSlice.actions;

export default hotelSlice.reducer;
