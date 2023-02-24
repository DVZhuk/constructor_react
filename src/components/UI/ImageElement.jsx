import React, { useState } from 'react';
import AddImgButton from './AddImgButton';
import ImgUpload from './ImgUpload';

const ImageElement = ({uploading, setUploading}) => {
    const [linkValue, setLinkValue] = useState('')
    const [linkLoad, setLinkLoad] = useState(null)

    return (
        <>
            <AddImgButton uploading={uploading} setUploading={setUploading}/>
            <ImgUpload setLinkValue={setLinkValue} linkValue={linkValue} setLinkLoad={setLinkLoad} setUploading={setUploading} />
            {(linkLoad) && <img src={linkLoad} alt="Изображение" />}
        </>
    );
};

export default ImageElement;