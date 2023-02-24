import React, { useContext, useEffect, useState } from 'react';
import ComponentList from '../ComponentList';
import { AuthContext } from '../Context/Context';
import AddButton from '../UI/AddButton';
import ChooseElement from '../UI/ChooseElement';

const Content = ({contentNum}) => {
    const [openElementBar, setOpenElementBar] = useState(false)
    const [elements, setElements] = useState([])
    const {resetLayout, setResetLayout} = useContext(AuthContext)
    useEffect(() => {
        if (resetLayout) {
            setElements([])
            setResetLayout(false)
        }
    }, [resetLayout, setResetLayout])

    return (
        <div className={`content ${contentNum} ` + ((elements.length) ? '' : 'content--empty')}>
            <p className="placeholder">Content</p>
            <AddButton setOpenElementBar={setOpenElementBar} openElementBar={openElementBar}/>
            <ChooseElement setOpenElementBar={setOpenElementBar} openElementBar={openElementBar} elements={elements} setElements={setElements} />
            <ComponentList nameWrapper={'content'} elements={elements} setElements={setElements}/>
        </div>
    );
};

export default Content;