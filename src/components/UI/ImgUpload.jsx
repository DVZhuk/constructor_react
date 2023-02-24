import React from 'react';

const ImgUpload = ({setLinkValue, linkValue, setLinkLoad, setUploading}) => {
    const handleLoadImage = function (evt) {
        evt.preventDefault()
        setLinkLoad(linkValue)
        setUploading(' element--uploaded')
    }

    

    return (
        <div className="img-upload">
            <p>Загрузите изображение</p>
            <input className="img-upload__url" type="url" placeholder="Вставьте ссылку на изображение" onChange={(evt) => setLinkValue(evt.target.value)}/>
            <label className="img-upload__label">Загрузить
                <input className="visually-hidden" type="file" accept="image/png, image/jpeg" onClick={(evt) => handleLoadImage(evt)} />
            </label>
        </div>
    );
};

export default ImgUpload;