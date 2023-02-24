import React from 'react';

const MyModal = ({openElementBar, setOpenElementBar, style}) => {
    const rootClasses = ['choose-elem-wrapper'];
    if (openElementBar) {
        rootClasses.push('choose-elem-wrapper--active');
    };

    return (
        <div className={rootClasses.join(' ')} onClick={() => setOpenElementBar(false)} style={style}>
        </div>
    );
};

export default MyModal;