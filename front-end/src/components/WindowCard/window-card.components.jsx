import React from 'react';
import './window-card.styles.scss';

const WindowCard = ({ children }) => {
    return (
        <div className='window-card-area'>
            <div className="window-card">
                { children }
            </div>
        </div>
    );
}

export default WindowCard;
