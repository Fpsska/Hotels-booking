import React, { useState } from 'react';

import { useAppSelector, useAppDispatch } from 'app/hooks';

import {
    setCurrentLocation,
    setArrivalDate,
    setDaysCount
} from 'app/slices/hotelSlice';

import { useInput } from 'utils/hooks/useInput';

import Button from 'components/ui/Button/Button';

import './find-form.scss';

// /. imports

const FindForm: React.FC = () => {
    const { currentLocation, arrivalDate, daysCount } = useAppSelector(
        state => state.hotelSlice
    );

    const dispatch = useAppDispatch();

    const locationInput = useInput('', {});
    const dateInput = useInput(arrivalDate, {});
    const daysInput = useInput('', {});

    // /. hooks

    const onFindFormSubmit = (e: React.SyntheticEvent): void => {
        e.preventDefault();
        //
        dispatch(setCurrentLocation(locationInput.value || currentLocation));
        dispatch(setArrivalDate(dateInput.value || arrivalDate));
        dispatch(setDaysCount(daysInput.value || daysCount));
    };

    // /. functions

    return (
        <form
            className="find-form"
            action="#"
            onSubmit={e => onFindFormSubmit(e)}
        >
            <label className="find-form__label">
                <span>Локация</span>
                <input
                    className="find-form__input"
                    type="text"
                    placeholder={currentLocation}
                    value={locationInput.value}
                    onChange={e => locationInput.onInputChange(e, 'location')}
                />
            </label>
            <label className="find-form__label">
                <span>Дата заселения</span>
                <input
                    className="find-form__input"
                    type="date"
                    value={dateInput.value}
                    onChange={e => dateInput.onInputChange(e, 'date')}
                />
            </label>
            <label className="find-form__label find-form__label_duration">
                <span>Количество дней</span>
                <input
                    className="find-form__input"
                    type="text"
                    placeholder={daysCount}
                    value={daysInput.value}
                    onChange={e => daysInput.onInputChange(e, 'days')}
                />
            </label>
            <Button
                text="Найти"
                additionalClass="button_find"
            />
        </form>
    );
};

export default FindForm;
