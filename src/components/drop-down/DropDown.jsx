import React, { useContext, useEffect } from 'react';
import "./DropDown.css";
import Header from '../header/Header';
import { AppContext } from '../../context/Context';
import { AnimatePresence, motion } from 'framer-motion';
import Navigation from '../navigation/Navigation';

const DropDown = () => {
    const { isDropDownOpen } = useContext(AppContext);
    // useEffect(() => {
    //     const smoothScroll = (event) => {
    //         event.preventDefault();
    //         const targetId = event.target.getAttribute('href').slice(1);
    //         const targetElement = document.getElementById(targetId);

    //         const headerHeight = 0;

    //         // Calculate the adjusted scroll position
    //         const scrollPosition = targetElement.getBoundingClientRect().top + window.scrollY - headerHeight;

    //         window.scrollTo({
    //             top: scrollPosition,
    //             behavior: 'smooth',
    //         });
    //     };

    //     const anchorLinks = document.getElementsByClassName('link');
    //     Array.from(anchorLinks).forEach((link) => {
    //         link.addEventListener('click', smoothScroll);
    //     });

    //     return () => {
    //         Array.from(anchorLinks).forEach((link) => {
    //             link.removeEventListener('click', smoothScroll);
    //         });
    //     };
    // }, []);
    return (
        <div id="drop-down">
            <Header />
            {/*  */}
            <Navigation className={`drop-nav ${isDropDownOpen ? 'active' : ''}`}/>
            <AnimatePresence>
                {
                    isDropDownOpen &&
                    <motion.div
                        className="overlay"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    ></motion.div>
                }
            </AnimatePresence>
        </div>
    )
}

export default DropDown