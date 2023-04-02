import { createSlice, current, PayloadAction } from '@reduxjs/toolkit';

import { getCurrentDate } from 'utils/helpers/getCurrentDate';
import { getRandomNum } from 'utils/helpers/getRandomNum';

import { mockFavouriteHotelsData, mockHotelSliderImages } from 'context/db';

import { Ihotel, IhotelSliderImage } from 'types/generalTypes';

// /. imports

interface IhotelSlice {
    currentLocation: string;
    arrivalDate: string;
    daysCount: string;
    hotelsData: Ihotel[];
    favouriteHotelsData: Ihotel[];
    hotelSliderImages: IhotelSliderImage[];
    isHotelsDataLoading: boolean;
    hotelsDataFetchError: null | string;
}

// /. interfaces

const initialState: IhotelSlice = {
    currentLocation: 'Москва',
    arrivalDate: getCurrentDate(new Date()), // 2023-03-31
    daysCount: '1',
    hotelsData: [],
    favouriteHotelsData: mockFavouriteHotelsData,
    hotelSliderImages: mockHotelSliderImages,
    isHotelsDataLoading: true,
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
        switchHotelsDataLoading(state, action: PayloadAction<boolean>) {
            state.isHotelsDataLoading = action.payload;
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
                    date: '7 июля 2020',
                    duration: '1 день',
                    price: getRandomNum(100000),
                    isFavourite: false
                };
            });

            state.hotelsData = extendedHotelsData;
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
        sortFavouriteHotelsDataByASC(
            state,
            action: PayloadAction<{ operation: string }>
        ) {
            const { operation } = action.payload;
            // /. payload

            switch (operation) {
                // 1..10 (ascending/ASC order)
                case 'rating':
                    state.favouriteHotelsData = [
                        ...state.favouriteHotelsData
                    ].sort((a, b) => a._score - b._score);
                    break;
                case 'price':
                    state.favouriteHotelsData = [
                        ...state.favouriteHotelsData
                    ].sort((a, b) => a.price - b.price);
                    break;
                default:
                    return;
            }
        },
        sortFavouriteHotelsDataByDSC(
            state,
            action: PayloadAction<{ operation: string }>
        ) {
            const { operation } = action.payload;
            // /. payload

            switch (operation) {
                // 10..1 (descending/DSC order)
                case 'rating':
                    state.favouriteHotelsData = [
                        ...state.favouriteHotelsData
                    ].sort((a, b) => b._score - a._score);
                    break;
                case 'price':
                    state.favouriteHotelsData = [
                        ...state.favouriteHotelsData
                    ].sort((a, b) => b.price - a.price);
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
    switchHotelsDataLoading,
    setHotelsDataError,
    switchHotelFavouriteStatus,
    setFavouriteHotelsData,
    sortFavouriteHotelsDataByASC,
    sortFavouriteHotelsDataByDSC
} = hotelSlice.actions;

export default hotelSlice.reducer;
