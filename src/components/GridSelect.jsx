import React, { useContext } from 'react';
import { AuthContext } from './Context/Context';
import MyLabel from './Label/MyLabel';
import BlogPicture from './SVGGrid/BlogPicture';
import LandingPicture from './SVGGrid/LandingPicture';
import ShopPicture from './SVGGrid/ShopPicture';

const GridSelect = ({setLayoutSelect}) => {
    const {setResetLayout} = useContext(AuthContext)
    const handleChange = function (evt) {
        setLayoutSelect(evt.target.value)
        setResetLayout(true)
    }

    return (
        <form className='grid-select'>
        <h2 className="grid-select__header">Выберите сетку сайта</h2>
        <input 
          className="grid-select__radio visually-hidden" 
          type="radio" 
          name="grid" 
          id="grid-landing"
          defaultChecked
          value='layout--landing'
          onChange={handleChange}
        />
        <MyLabel gridType="grid-landing" className="grid-select__btn">
          <LandingPicture />
        </MyLabel>
        <input 
          className="grid-select__radio visually-hidden"
          type="radio" 
          name="grid" 
          id="grid-blog" 
          value='layout--blog'
          onChange={handleChange}
        />
        <MyLabel gridType="grid-blog" className="grid-select__btn">
          <BlogPicture />
        </MyLabel>
        <input 
          className="grid-select__radio visually-hidden" 
          type="radio" 
          name="grid" 
          id="grid-shop" 
          value='layout--shop'
          onChange={handleChange}
        />
        <MyLabel gridType="grid-shop" className="grid-select__btn">
          <ShopPicture />
        </MyLabel>
      </form>
    );
};

export default GridSelect;