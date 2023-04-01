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
        setHotelsDataError(state, action: PayloadAction<null | string>) {
            state.hotelsDataFetchError = action.payload;
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
                ({ id }) => id === payloadID
            );

            if (targetHotel) {
                targetHotel.isFavourite = status;
            }
        },
        setFavouriteHotelsData(
            state,
            action: PayloadAction<{ operation: string; payloadID: number }>
        ) {
            const { operation, payloadID } = action.payload;
            // /. payload

            switch (operation) {
                case 'add': {
                    const targetHotel = state.hotelsData.find(
                        ({ id }) => id === payloadID
                    );
                    if (targetHotel) {
                        state.favouriteHotelsData.push(targetHotel);
                    }
                    break;
                }
                case 'remove': {
                    const targetHotelIDX = state.favouriteHotelsData.findIndex(
                        ({ id }) => id === payloadID
                    );
                    state.favouriteHotelsData.splice(targetHotelIDX, 1);
                    break;
                }
                default:
                    return;
            }
        },
        sortFavouriteHotelsData(
            state,
            action: PayloadAction<{ operation: string }>
        ) {
            const { operation } = action.payload;
            // /. payload

            switch (operation) {
                // 1..10
                case 'rating':
                    state.favouriteHotelsData = [
                        ...state.favouriteHotelsData
                    ].sort((a, b) => a._score - b._score);
                    break;
                case 'price':
                    state.favouriteHotelsData = [
                        ...state.favouriteHotelsData
                    ].sort((a, b) => a.locationId - b.locationId);
                    break;
                default:
                    return;
            }
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
    setFavouriteHotelsData,
    sortFavouriteHotelsData
} = hotelSlice.actions;

export default hotelSlice.reducer;
