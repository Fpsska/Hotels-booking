import React, { useState } from 'react';

import { useAppDispatch } from 'app/hooks';

import { sortFavouriteHotelsData } from 'app/slices/hotelSlice';

import { mockButtonsData, IsortBtn } from 'context/db';

import './sort-controls.scss';

// /. imports

interface propTypes {
    additionalClass?: string;
    isDisabled: boolean;
}

// /. interfaces

const SortControls: React.FC<propTypes> = ({ additionalClass, isDisabled }) => {
    const [buttonsData, setButtonsData] = useState<IsortBtn[]>(mockButtonsData);

    const dispatch = useAppDispatch();

    // /. hooks

    const onSortButtonClick = (role: string): void => {
        const newBtnData = buttonsData.map((btn: IsortBtn) => {
            if (role === btn.role) {
                return {
                    ...btn,
                    isActive: true
                };
            } else {
                return {
                    ...btn,
                    isActive: false
                };
            }
        });
        setButtonsData(newBtnData);

        dispatch(sortFavouriteHotelsData({ operation: role }));
    };

    // /. functions

    return (
        <div
            className={`sort-controls ${
                additionalClass ? additionalClass : ''
            }`}
        >
            {buttonsData.map((button: any) => {
                return (
                    <button
                        key={button.id}
                        className={`sort-controls__button ${
                            button.isActive ? 'active' : ''
                        }`}
                        aria-label={button.label}
                        disabled={isDisabled}
                        onClick={() =>
                            !isDisabled && onSortButtonClick(button.role)
                        }
                    >
                        <span className="sort-controls__text">
                            {button.text}
                        </span>
                        <span>
                            <svg
                                width="9"
                                height="6"
                                viewBox="0 0 9 6"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M8.5 4.24264L7.43934 5.3033L4.25736 2.12132L1.07538 5.3033L0.0147181 4.24264L4.25736 0L8.5 4.24264Z"
                                    fill=""
                                />
                            </svg>
                            <svg
                                width="9"
                                height="6"
                                viewBox="0 0 9 6"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M8.5 4.24264L7.43934 5.3033L4.25736 2.12132L1.07538 5.3033L0.0147181 4.24264L4.25736 0L8.5 4.24264Z"
                                    fill=""
                                />
                            </svg>
                        </span>
                    </button>
                );
            })}
        </div>
    );
};

export default SortControls;
