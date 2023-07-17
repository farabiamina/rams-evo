import React from 'react';
import "./P404.css";
import Logo from "../../svg/HeaderLogoSvg";

const P404 = () => {
  return (
    <section id='p404'>
        <div className="inner">
            <Logo className="logo"/>
            <h1>404</h1>
            <p>Страница, которую вы искали, не существует.</p>
            <button onClick={() => { window.location.href = '/'}}>На главную</button>
        </div>
    </section>
  )
}

export default P404