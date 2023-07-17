import React, { useContext } from 'react';
import Form from '../form/Form';
import "./ModalForm.css";
import { AppContext } from '../../context/Context';
import { AnimatePresence, motion } from 'framer-motion';
import ModalImg from "../../images/modalForm.png";

const ModalForm = () => {
    const { isFormOpen, setIsFormOpen } = useContext(AppContext);
    if (isFormOpen) return (
        <div id='modal-form'>
            <AnimatePresence>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="overlay" onClick={() => setIsFormOpen(false)}>
                    <div
                        className={`form-con ${isFormOpen ? 'active' : ''}`}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <img src={ModalImg} alt="" />
                        <Form />
                    </div>
                </motion.div>
            </AnimatePresence>
        </div>
    )
}

export default ModalForm