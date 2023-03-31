import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IauthSlice {
    isUserAuthorized: boolean;
    email: string;
    password: string;
}

// /. interfaces

const storageAuthStatus = JSON.parse(
    localStorage.getItem('isUserAuthStatus') || 'false'
);
const storageUserData = JSON.parse(localStorage.getItem('userData') || '{}');

const initialState: IauthSlice = {
    isUserAuthorized: storageAuthStatus,
    email: storageUserData.email,
    password: storageUserData.password
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
