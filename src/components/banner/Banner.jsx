import React, {useContext} from 'react';
import "./Banner.css";
import BannerImg from "../../images/banner.png";
import BannerSmall from "../../images/bannerSmall.png";
import Ring from "../../svg/RingSvg";
import Frame from "../../svg/BannerFrameSvg";
import { AppContext } from '../../context/Context';

const Banner = () => {
    const { setIsFormOpen } = useContext(AppContext);
    return (
        <section id='banner'>
            <h1>
                <span>РАССРОЧКА от застройщика<br /> до <span>40 месяцев <span className="stick" /> </span> 0% переплаты</span>
                {/* <span className='small'>30% первоначальный взнос</span> */}
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
                <button onClick={() => setIsFormOpen(true)}>оставить<br /> заявку</button>
            </div>
        </section>
    )
}

export default Banner;