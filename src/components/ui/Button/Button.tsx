import React from 'react';

import './button.scss';

// /. imports

const Button: React.FC<{ text: string }> = ({ text }) => {
    return (
        <button
            className="button"
            type="submit"
        >
            {text}
        </button>
    );
};

export default Button;
