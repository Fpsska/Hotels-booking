import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IauthSlice {
    isUserAuthorized: boolean;
}

// /. interfaces

const initialState: IauthSlice = {
    isUserAuthorized: false
};

// /. state

const authSlice = createSlice({
    name: 'authSlice',
    initialState,
    reducers: {
        switchUserAuthStatus(state, action: PayloadAction<boolean>) {
            state.isUserAuthorized = action.payload;
        }
    }
});

export const { switchUserAuthStatus } = authSlice.actions;

export default authSlice.reducer;
