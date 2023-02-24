import React from 'react';

const AddButton = ({setOpenElementBar, openElementBar}) => {
    const handleBarOpening = function (evt) {
        evt.stopPropagation()
        setOpenElementBar(!openElementBar)
    }

    return (
        <button type="button" className="add-btn" onClick={(evt) => handleBarOpening(evt)}>
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
              <path fillRule="evenodd" clipRule="evenodd" d="M0 20C0 8.96 8.96 0 20 0C31.04 0 40 8.96 40 20C40 31.04 31.04 40 20 40C8.96 40 0 31.04 0 20ZM22 22H30V18H22V9.99999H18V18H10V22H18V30H22V22Z" fill="#80CCF0"/>
            </svg>
        </button>
    );
};

export default AddButton;