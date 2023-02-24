import React from 'react';

const MyLabel = ({children, gridType, className}) => {
    const gridName = {
        'grid-landing': 'Лендинг',
        'grid-blog': 'Блог',
        'grid-shop': 'Магазин'
    }
    return (
        <label htmlFor={gridType} className={className}>
            <span className="grid-select__text">{gridName[gridType]}</span>
            {children}
        </label>
    );
};

export default MyLabel;