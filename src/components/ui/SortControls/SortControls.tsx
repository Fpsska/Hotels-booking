import React from 'react';

import './sort-controls.scss';

// /. imports

interface propTypes {
    additionalClass?: string;
    isDisabled: boolean;
}

// /. interfaces

const SortControls: React.FC<propTypes> = ({ additionalClass, isDisabled }) => {
    return (
        <div
            className={`sort-controls ${
                additionalClass ? additionalClass : ''
            }`}
        >
            <button
                className="sort-controls__button active"
                aria-label="sort by rating"
                disabled={isDisabled}
            >
                <span className="sort-controls__text">Рейтинг</span>
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
            <button
                className="sort-controls__button"
                aria-label="sort by price"
                disabled={isDisabled}
            >
                <span className="sort-controls__text">Цена</span>
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
        </div>
    );
};

export default SortControls;
