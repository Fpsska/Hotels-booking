import { call, put, takeEvery, select } from 'redux-saga/effects';

import { fetchHotelsData } from '../api/fetchHotelsData';
import { triggerHotelsDataFetch, setHotelsData } from '../slices/hotelSlice';

// /. imports

export interface Iargs {
    location: string;
    lang: string;
    checkIn: string;
    duration: number;
    limit: number;
}

// /. interfaces

function* fetchRequestsWorker(): any {
    // business logic
    const { currentLocation, arrivalDate, daysCount } = yield select(
        state => state.hotelSlice
    );

    const args: Iargs = yield {
        location: currentLocation,
        lang: 'ru',
        checkIn: arrivalDate,
        duration: daysCount,
        limit: 10
    };

    const requestsData = yield call(fetchHotelsData, { ...args });
    yield put(setHotelsData({ hotelsData: requestsData }));
}

export function* fetchRequestsWatcher(): any {
    // watching for AC of slice
    yield takeEvery(triggerHotelsDataFetch.type, fetchRequestsWorker);
}
