import React, { useContext } from 'react';
import "./DropDown.css";
import Header from '../header/Header';
import { AppContext } from '../../context/Context';
import { AnimatePresence, motion } from 'framer-motion';

const DropDown = () => {
    const { isDropDownOpen } = useContext(AppContext);
    return (
        <div id="drop-down" >
            <Header />
            <nav className={`drop-nav ${isDropDownOpen ? 'active' : ''}`}>
                <a href="#evo">О проекте</a>
                <a className='link' href="#field">Преимущества</a>
                <a className='link' href="#location">Расположение</a>
                {/* <a className='link' href="#">Чистовая отделка</a> */}
                <a className='link' href="#all">All-in-One</a>
            </nav>
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