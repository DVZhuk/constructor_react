import React from 'react';
import Content from './Content/Content';
import Footer from './Footer/Footer';
import Header from './Header/Header';

const Layout = ({layoutSelect}) => {
    return (
        <div className={'layout ' + layoutSelect}>
            <Header />
            <Content contentNum={'content-1'}/>
            <Content contentNum={'content-2'}/>
            <Content contentNum={'content-3'}/>
            <Footer />
        </div>
    );
};

export default Layout;