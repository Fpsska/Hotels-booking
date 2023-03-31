import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { getCurrentDate } from 'utils/helpers/getCurrentDate';

// /. imports

interface IhotelSlice {
    currentLocation: string;
    arrivalDate: string;
    daysCount: string;
}

// /. interfaces

const initialState: IhotelSlice = {
    currentLocation: 'Москва',
    arrivalDate: getCurrentDate('numeric'),
    daysCount: '1'
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
        }
    }
});

export const { setCurrentLocation, setArrivalDate, setDaysCount } =
    hotelSlice.actions;

export default hotelSlice.reducer;
