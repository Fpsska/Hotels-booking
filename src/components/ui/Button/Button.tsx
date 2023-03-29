import React from 'react';

import './button.scss';

// /. imports

interface propTypes {
    text: string;
    additionalClass?: string;
}

// /. interfaces

const Button: React.FC<propTypes> = ({ text, additionalClass }) => {
    return (
        <button
            className={`button ${additionalClass ? additionalClass : ''}`}
            type="submit"
        >
            {text}
        </button>
    );
};

export default Button;
