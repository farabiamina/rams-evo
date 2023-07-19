import React, {useState, useContext, useEffect} from 'react';
import "./Header.css";
import Logo from "../../svg/HeaderLogoSvg";
import { AppContext } from '../../context/Context';

const Header = () => {
  const { isDropDownOpen, setIsDropDownOpen } = useContext(AppContext);
  const handleClick = () => {
    setIsDropDownOpen(prev => !prev);
  };
  useEffect(() => {
    const smoothScroll = (event) => {
        event.preventDefault();
        const targetId = event.target.getAttribute('href').slice(1);
        const targetElement = document.getElementById(targetId);

        const headerHeight = 0;

        // Calculate the adjusted scroll position
        const scrollPosition = targetElement.getBoundingClientRect().top + window.scrollY - headerHeight;

        window.scrollTo({
            top: scrollPosition,
            behavior: 'smooth',
        });
    };

    const anchorLinks = document.getElementsByClassName('link');
    Array.from(anchorLinks).forEach((link) => {
        link.addEventListener('click', smoothScroll);
    });

    return () => {
        Array.from(anchorLinks).forEach((link) => {
            link.removeEventListener('click', smoothScroll);
        });
    };
}, []);
  return (
    <header id='header'>
      <div className="inner">
        <div className="logo-con">
          <Logo className="logo" />
        </div>
        <nav>
          <a className='link' href="#evo">О проекте</a>
          <a className='link' href="#field">Преимущества</a>
          <a className='link' href="#location">Расположение</a>
          {/* <a className='link' href="#">Чистовая отделка</a> */}
          <a className='link' href="#all">All-in-One</a>
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