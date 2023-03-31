import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';

import createSagaMiddleware from '@redux-saga/core';

import authSlice from './slices/authSlice';
import hotelSlice from './slices/hotelSlice';

import { rootWatcher } from './sagas/rootSaga';

// /. imports

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: { authSlice, hotelSlice },
  middleware: [sagaMiddleware]
});

sagaMiddleware.run(rootWatcher);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
