import Form from "../form/Form";
import React from 'react';
import "./BottomForm.css";
import FormImg from "../../images/form.png";

const BottomForm = () => {
    return (
        <section id='bform'>
            <div className="inner">
                <div className="container">
                    <div className="left">
                        <h2>Оставьте заявку</h2>
                        <p>Наши специалисты подберут для Вас лучшие условия</p>
                        <Form formId={" bottom-form"}/>
                    </div>
                    <img src={FormImg} alt="" className="img" />
                </div>
            </div>
        </section>
    )
}

export default BottomForm;