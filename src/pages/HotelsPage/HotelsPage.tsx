import React, { useEffect } from 'react';

import { Navigate } from 'react-router';

import { useAppSelector, useAppDispatch } from 'app/hooks';

import {
    triggerHotelsDataFetch,
    setHotelsDataError
} from 'app/slices/hotelSlice';

import { fetchHotelsData } from 'app/api/fetchHotelsData';

import Navigation from 'components/layout/Navigation/Navigation';
import MainSection from 'components/layout/MainSection/MainSection';
import FindForm from 'components/layout/FindForm/FindForm';
import FavouriteSection from 'components/layout/FavouriteSection/FavouriteSection';

import { Iargs } from 'app/sagas/requestSaga';

import './hotels-page.scss';

// /. imports

const HotelsPage: React.FC = () => {
    const { isUserAuthorized } = useAppSelector(state => state.authSlice);
    const { currentLocation } = useAppSelector(state => state.hotelSlice);

    const dispatch = useAppDispatch();

    // /. hooks

    useEffect(() => {
        // logic of handling fetchHotelsData Promise
        const args: Iargs = {
            location: currentLocation,
            lang: 'ru',
            limit: 10
        };

        fetchHotelsData(args)
            .then(() => console.log('start fetching'))
            .then(() => dispatch(triggerHotelsDataFetch()))
            .catch(({ message }) => {
                console.error('Error of fetchHotelsData promise:', message);
                dispatch(setHotelsDataError(message));
            });
    }, [currentLocation]);

    // /. effects

    return isUserAuthorized ? (
        <div className="hotel-page">
            <Navigation />
            <div className="container">
                <section className="hotel-page__content">
                    <MainSection />

                    <div className="hotel-page__filter">
                        <FindForm />
                    </div>

                    <FavouriteSection />
                </section>
            </div>
        </div>
    ) : (
        <Navigate
            to="/LIIS-Task"
            replace={true}
        />
    );
};

export default HotelsPage;
