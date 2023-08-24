import React, { useContext, useState, useEffect } from 'react';
import Form from '../form/Form';
import "./ModalForm.css";
import { AppContext } from '../../context/Context';
import { AnimatePresence, motion } from 'framer-motion';
import ModalImg from "../../images/modalForm.png";
import CloseSvg from "../../svg/CloseSvg";

const ModalForm = () => {
    const { isFormOpen, setIsFormOpen } = useContext(AppContext);
    const [condition, setCondition] = useState(false);
    useEffect(() => {
        // Simulate a delay of 2 seconds before setting the condition to true
        const timeout = setTimeout(() => {
            if (isFormOpen === false) {
                setCondition(false);
            }
        }, 500);
        if (isFormOpen) {
            setCondition(true);
        }
        return () => clearTimeout(timeout); // Clean up the timeout on component unmount
    }, [isFormOpen]);
    if (condition)
        return (
            <div id='modal-form'>
                {
                    isFormOpen && <CloseSvg className="close" onClick={() => setIsFormOpen(false)} />
                }
                <AnimatePresence>
                    {
                        isFormOpen &&
                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ ease: "easeOut", duration: 0.5 }}
                            className="overlay" onClick={() => setIsFormOpen(false)}>
                            <div
                                className='form-con'
                                onClick={(e) => e.stopPropagation()}
                            >
                                <img src={ModalImg} alt="" />
                                <Form  formId={"pop-up"}/>
                            </div>
                        </motion.div>
                    }
                </AnimatePresence>
            </div>
        )
}

export default ModalForm