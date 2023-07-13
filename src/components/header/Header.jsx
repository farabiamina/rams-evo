import React, {useState, useContext} from 'react';
import "./Header.css";
import Logo from "../../svg/HeaderLogoSvg";
import { AppContext } from '../../context/Context';

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
        <nav>
          <a href="#">О проекте</a>
          <a href="#">Преимущества</a>
          <a href="#">Расположение</a>
          <a href="#">Чистовая отделка</a>
          <a href="#">All-in-One</a>
        </nav>
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