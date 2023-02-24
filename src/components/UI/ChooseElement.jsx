import React from 'react';
import MyModal from './MyModal';

const ChooseElement = ({setOpenElementBar, openElementBar, elements, setElements}) => {
    const itemTable = [
        {
            type: 'title',
            name: 'h1',
            value: 'Заголовок H1'
        }, {
            type: 'title',
            name: 'h2',
            value: 'Заголовок H2'
        }, {
            type: 'title',
            name: 'h3',
            value: 'Заголовок H3'
        }, {
            type: 'text',
            name: 'p',
            value: 'Абзац текста'
        }, {
            type: 'image'
        }
    ]

    const addItems = function (evt) {
        const currentItem = itemTable[evt.target.value]
        currentItem.id = new Date().getTime()
        setElements([...elements, currentItem])
    }
    
    return (
        <div>
            <MyModal setOpenElementBar={setOpenElementBar} openElementBar={openElementBar} style={{'zIndex': '10'}}/>
            <div className={`choose-elem ` + ((!openElementBar) ? `choose-elem--hide` : null)} style={{'zIndex': '100'}}>
                <button type="button" className="choose-elem__btn" value='0' onClick={(evt) => addItems(evt)}>Заголовок H1</button>
                <button type="button" className="choose-elem__btn" value='1' onClick={(evt) => addItems(evt)}>Заголовок H2</button>
                <button type="button" className="choose-elem__btn" value='2' onClick={(evt) => addItems(evt)}>Заголовок H3</button>
                <button type="button" className="choose-elem__btn" value='3' onClick={(evt) => addItems(evt)}>Абзац текста</button>
                <button type="button" className="choose-elem__btn" value='4' onClick={(evt) => addItems(evt)}>Изображение</button>
            </div> 
        </div>
        
        
    );
};

export default ChooseElement;