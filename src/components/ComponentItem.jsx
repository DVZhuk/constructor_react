import React, { useEffect, useRef, useState } from "react";
import ImageElement from "./UI/ImageElement";

const ComponentItem = ({ elem, setElements, index, elements, nameWrapper}) => {
  const [placeholder] = useState(elem.value);
  const [uploading, setUploading] = useState('')

  const uploadPopup = useRef(null)

  const handleContent = function (evt) {
    setElements([...elements],(elements[index].value = evt.target.textContent))
  };

  const handleDeleteItem = function () {
    const currentElements = [...elements]
    currentElements.splice(index, 1)
    setElements(currentElements)
  }
  
  const closeDialogOnOutsideClick = function (evt) {
    if (uploadPopup.current === null) {
      window.removeEventListener('click', closeDialogOnOutsideClick)
      return
    } 
    if (elem.type === 'image') {
      console.log(true)
      const dialogElement = uploadPopup.current
      const isClickOnDialog = evt.target === dialogElement;
      const isClickOnDialogChildrenNodes = dialogElement.contains(evt.target)

      const isClickOutsideOfDialog = !(
        isClickOnDialog || isClickOnDialogChildrenNodes
      )

      if (isClickOutsideOfDialog) {
        setUploading('')
      }
    } else {
      window.removeEventListener('click', closeDialogOnOutsideClick)
    }
  }

  useEffect(() => {
    if (nameWrapper !== 'content') {
      window.addEventListener('click', closeDialogOnOutsideClick)
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  
  
  return (
    <div className={"element " + elem.type + uploading} tabIndex="0" ref={uploadPopup}>
      <button
        type="button"
        className="delete-btn"
        onClick={() => handleDeleteItem()}
      >
        <span className="visually-hidden">Удалить элемент</span>
      </button>
      {elem.type === "image" ? (
        <ImageElement uploading={uploading} setUploading={setUploading} />
      ) : (
        <elem.name
          contentEditable={true}
          suppressContentEditableWarning={true}
          onBlur={(evt) => handleContent(evt)}
          data-placeholder={placeholder}
        >
          {elem.value}
        </elem.name>
      )}
    </div>
  );
};

export default ComponentItem;
