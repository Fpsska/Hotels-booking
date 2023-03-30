import React from 'react';

import Button from 'components/ui/Button/Button';

import './find-form.scss';

// /. imports

const FindForm: React.FC = () => {
    return (
        <form
            className="find-form"
            action="#"
        >
            <label className="find-form__label">
                <span>Локация</span>
                <input
                    className="find-form__input"
                    type="text"
                    placeholder="Москва"
                />
            </label>
            <label className="find-form__label">
                <span>Дата заселения</span>
                <input
                    className="find-form__input"
                    type="text"
                    placeholder="07.07.2020"
                />
            </label>
            <label className="find-form__label find-form__label_duration">
                <span>Количество дней</span>
                <input
                    className="find-form__input"
                    type="text"
                    placeholder="1"
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
