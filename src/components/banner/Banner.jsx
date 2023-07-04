import React from 'react';
import "./Banner.css";
import BannerImg from "../../images/banner.png";
import BannerSmall from "../../images/bannerSmall.png";
import Ring from "../../svg/RingSvg";
import Frame from "../../svg/BannerFrameSvg";

const Banner = () => {
    return (
        <section id='banner'>
            <h1>
                <span>РАССРОЧКА до <span>40 месяцев</span></span><br />
                <span>только на старте продаж</span>
            </h1>
            <div className="image-wrapper">
                <img src={BannerImg}
                className='main'
                    alt="Banner image" />
                <img src={BannerSmall}
                    alt="Banner image"
                    className='small' />
                <Ring className="ring" />
                <Frame className="frame" />
                <button>оставить<br /> заявку</button>
            </div>
        </section>
    )
}

export default Banner;