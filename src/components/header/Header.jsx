import React, { useContext } from 'react';
import "./Header.css";
import Logo from "../../svg/HeaderLogoSvg";
import { AppContext } from '../../context/Context';
import Navigation from '../navigation/Navigation';

const Header = () => {
  const { isDropDownOpen, setIsDropDownOpen } = useContext(AppContext);
  const handleClick = () => {
    setIsDropDownOpen(prev => !prev);
  };

  return (
    <header id='header'>
      <div className="inner">
        <div className="logo-con">
          <Logo className="logo" />
        </div>
        <Navigation />
        <div className='right'>
          <div className="label">
            <span>Уже в продаже</span>
          </div>
          <div className={`burger-menu ${isDropDownOpen ? 'active' : ''}`} onClick={handleClick}>
            <span className='stick'></span>
            <span className='stick'></span>
            <span className='stick'></span>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header