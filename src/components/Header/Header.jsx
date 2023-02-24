import React, { useContext, useEffect, useState } from 'react';
import ComponentList from '../ComponentList';
import { AuthContext } from '../Context/Context';
import AddButton from '../UI/AddButton';
import ChooseElement from '../UI/ChooseElement';

const Header = () => {
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
        <header className={"header " + ((elements.length) ? '' : 'header--empty')}>
            <p className="placeholder">Header</p>
            <AddButton setOpenElementBar={setOpenElementBar} openElementBar={openElementBar}/>
            <ChooseElement setOpenElementBar={setOpenElementBar} openElementBar={openElementBar} elements={elements} setElements={setElements} />
            <ComponentList nameWrapper={'header'} elements={elements} setElements={setElements}/>
        </header>
    );
};

export default Header;