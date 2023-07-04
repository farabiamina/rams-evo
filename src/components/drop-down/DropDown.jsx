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
                <a href="#">О проекте</a>
                <a href="#">Преимущества</a>
                <a href="#">Расположение</a>
                <a href="#">Чистовая отделка</a>
                <a href="#">All-in-One</a>
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