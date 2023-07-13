import React, { useEffect, useContext } from 'react';
import "./ModalHeader.css";
import Logo from "../../svg/HeaderLogoDarkSvg";
import { AppContext } from '../../context/Context';

const Modalheader = () => {
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

    useEffect(() => {
        const handleScroll = () => {
            const scrollThreshold = 100; // Adjust this value as needed
            const scrollY = window.scrollY;
            const header = document.getElementById("header-modal");

            if (scrollY > scrollThreshold) {
                header.classList.add("show"); // Apply a CSS class to show the header
            } else {
                header.classList.remove("show"); // Remove the CSS class to hide the header
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
        <header id='header-modal'>
            <div className="inner">
                <div className="left">
                    <Logo className="logo" />
                    <nav>
                        <a href="#">О проекте</a>
                        <a href="#">Преимущества</a>
                        <a href="#">Расположение</a>
                        <a href="#">Чистовая отделка</a>
                        <a href="#">All-in-One</a>
                    </nav>
                </div>
                <div className="right">
                    <a className="phone">
                        +7 707 212 44 44
                    </a>
                    <button>
                        Оставить заявку
                    </button>
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

export default Modalheader;