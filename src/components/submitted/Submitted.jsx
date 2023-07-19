import React, {useContext} from 'react';
import Logo from "../../svg/HeaderLogoSvg";
import "./Submitted.css";
import { AppContext } from '../../context/Context';

const Submitted = () => {
    const {setIsSubmitted} = useContext(AppContext);
    return (
        <section id='sub'>
            <div className="inner">
                <Logo className="logo" />
                <h1>Спасибо!</h1>
                <h2>Заявка отправлена</h2>
                <p>Спасибо за проявленный интерес. Наши менеджеры свяжутся с Вами в ближайшее время.</p>
                <button onClick={() => setIsSubmitted(false)}>На главную</button>
            </div>
        </section>
    )
}

export default Submitted