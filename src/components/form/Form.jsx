import React, { useState, useContext } from 'react';
import InputMask from 'react-input-mask';
import { AppContext } from '../../context/Context';

const Form = ({ formId }) => {
    const { isSubmitted, setIsSubmitted, setIsFormOpen } = useContext(AppContext);
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');

    const [nameErr, setNameErr] = useState(false);
    const [phoneErr, setPhoneErr] = useState(false);

    const urlParams = new URLSearchParams(window.location.search);
    const utmSource = urlParams.get('utm_source');
    const utmMedium = urlParams.get('utm_medium');
    const utmCampaign = urlParams.get('utm_campaign');
    const utmContent = urlParams.get('utm_content');
    const utmTerm = urlParams.get('utm_term');
    const utmPlatform = urlParams.get('utm_platform');

    const handleSubmit = (e) => {
        e.preventDefault();
        var formData = new FormData();

        if (name === "") {
            setNameErr(true);
            return;
        }

        if (phone.trim().length !== "+6 (674) 636 46 34".length) {
            setPhoneErr(true);
            return;
        }

        formData.append("name", name);
        formData.append("phone", phone);
        formData.append("form_id", formId);
        formData.append("utm_source", utmSource);
        formData.append("utm_medium", utmMedium);
        formData.append("utm_campaign", utmCampaign);
        formData.append("utm_content", utmContent);
        formData.append("utm_term", utmTerm);
        formData.append("utm_platform", utmPlatform);
        formData.append("fullurl", window.location.href);

        fetch('send.php', {
            method: 'POST',
            body: formData,
        })
            .then(() => {
                setIsSubmitted(true);
                setIsFormOpen(false);
                setName("");
                setPhone("");
            })
            .catch((error) => {
                setName("");
                setPhone("");
                console.error(error);
            });
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className='text'>
                <input
                    type="text"
                    name="name"
                    placeholder='Имя'
                    value={name}
                    onChange={(e) => { setName(e.target.value); setNameErr(false) }}
                />
                <div className={nameErr ? "error active" : "error"}>
                    Обязательное поле
                </div>
            </div>
            <div className='text'>
                <InputMask mask="+7 (799) 999-99-99" maskChar=" "
                    type="text" id='phone'
                    placeholder='Телефон'
                    value={phone}
                    onChange={(e) => { setPhone(e.target.value); setPhoneErr(false) }}
                />
                <div className={phoneErr ? "error active" : "error"}>
                    Неверный номер телефона
                </div>
            </div>
            <button type="submit">Отправить</button>
            <p>Нажимая кнопку Вы подтверждаете свое согласие с нашей политикой конфиденциальности.</p>
        </form>
    )
}

export default Form;