import React from 'react';
import './custom-button.styles.scss';

const CustomButton = ({ children, onClick, ...otherProps }) => {
    return (
        <div>
            <button onClick={onClick}>{children}</button>
        </div>
    );
}

export default CustomButton;
