import React from 'react';

import './button.scss';

// /. imports

interface propTypes {
    text: string;
    additionalClass?: string;
    isDisabled?: boolean;
}

// /. interfaces

const Button: React.FC<propTypes> = ({ text, additionalClass, isDisabled }) => {
    return (
        <button
            className={`button ${additionalClass ? additionalClass : ''}`}
            type="submit"
            disabled={isDisabled}
        >
            {text}
        </button>
    );
};

export default Button;
