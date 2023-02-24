import React, { useContext, useEffect, useState } from 'react';
import ComponentList from '../ComponentList';
import { AuthContext } from '../Context/Context';
import AddButton from '../UI/AddButton';
import ChooseElement from '../UI/ChooseElement';

const Footer = () => {
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
        <footer className={"footer " + ((elements.length) ? '' : 'footer--empty')}>
            <p className="placeholder">Footer</p>
            <AddButton setOpenElementBar={setOpenElementBar} openElementBar={openElementBar}/>
            <ChooseElement setOpenElementBar={setOpenElementBar} openElementBar={openElementBar} elements={elements} setElements={setElements} />
            <ComponentList nameWrapper={'footer'} elements={elements} setElements={setElements}/>
        </footer>
    );
};

export default Footer;