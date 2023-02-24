import React from 'react';

const AddImgButton = ({uploading, setUploading}) => {
    const handleOpenUploading = function () {
        if (uploading) {
            setUploading('')
        } else {
            setUploading(' element--uploading')
        }
    }

    return (
        <button type="button" className="add-img-btn" onClick={() => handleOpenUploading()}>
            <svg width="32" height="32" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M6 2V8H0V12H6V18H10V12H16V8H10V2H6ZM12 14V20H6V40C6 42.2 7.8 44 10 44H42C44.2 44 46 42.2 46 40V16C46 13.8 44.2 12 42 12H35.66L32 8H18V14H12ZM26 38C31.52 38 36 33.52 36 28C36 22.48 31.52 18 26 18C20.48 18 16 22.48 16 28C16 33.52 20.48 38 26 38ZM26 34C22.68 34 20 31.32 20 28C20 24.68 22.68 22 26 22C29.32 22 32 24.68 32 28C32 31.32 29.32 34 26 34Z"></path>
            </svg>
        </button>
    );
};

export default AddImgButton;