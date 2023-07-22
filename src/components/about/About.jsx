import React, { useEffect, useRef, useState } from 'react';
import "./About.css";
import { motion } from "framer-motion";
import AboutImg from "../../images/about.jpg";
import Car1Img from "../../images/car1.jpg";
import Car2Img from "../../images/car2.jpg";
import Car3Img from "../../images/car3.jpg";
import Car4Img from "../../images/car4.jpg";
import Car5Img from "../../images/car5.jpg";
import St1Img from "../../images/st1.jpg";
import St2Img from "../../images/st2.jpg";
import EVOsvg from "../../svg/EVOsvg";
// import Card1Svg from "../../svg/Card1Svg";
// import Card2Svg from "../../svg/Card2Svg";
// import Card3Svg from "../../svg/Card3Svg";
// import Card4Svg from "../../svg/Card4Svg";
// import Card5Svg from "../../svg/Card5Svg";
// import Card6Svg from "../../svg/Card6Svg";
// import Card7Svg from "../../svg/Card7Svg";
// import Card8Svg from "../../svg/Card8Svg";
import { Carousel } from 'antd';
import ArrowSvg from "../../svg/ArrowSvg";
import Icon1Img from "../../images/icon1.png";
import Icon2Img from "../../images/icon2.png";
import Icon3Img from "../../images/icon3.png";
import Icon4Img from "../../images/icon4.png";
import Icon5Img from "../../images/icon5.png";
import Icon6Img from "../../images/icon6.png";
import Icon7Img from "../../images/icon7.png";


const About = () => {
    const containerRef = useRef(null);
    const carouselRef = useRef(null);
    const [currentSlide, setCurrentSlide] = useState(0);
    const handleSlideChange = (slideIndex) => {
        setCurrentSlide(slideIndex);
    };

    const handlePrev = () => {
        carouselRef.current.prev();
    };

    const handleNext = () => {
        carouselRef.current.next();
    };
    const carouselItems = [
        {
            image: AboutImg,
            key: 1
        },
        {
            image: Car1Img,
            key: 2
        },
        {
            image: Car2Img,
            key: 3
        },
        {
            image: Car3Img,
            key: 4
        },
        {
            image: Car4Img,
            key: 5
        },
        {
            image: Car5Img,
            key: 6
        },
        {
            image: St1Img,
            key: 7
        },
        {
            image: St2Img,
            key: 8
        },
    ];
    return (
        <section id='evo' ref={containerRef}>
            <EVOsvg className="evo" />
            <div className="inner">
                <div className="text">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ ease: "easeOut", duration: 2, delay: 0.2 }}
                    >
                        Архитектурная эволюция<br /> Алмалинского района
                    </motion.h2>
                    <div className="p-con">
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ ease: "easeOut", duration: 2, delay: 0.4 }}
                        >
                            RAMS EVO – это архитектурная эволюция Алмалинского района. Жилой комплекс бизнес-класса станет отражением активного и здорового образа жизни современного успешного человека. Это умное пространство для процветающей жизни, где продуман каждый квадратный метр.
                        </motion.p>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ ease: "easeOut", duration: 2, delay: 0.6 }}
                        >
                            В строительстве проекта будет реализован подход EVO Concept, который предложит жителям пошаговое благоустройство всего жилого пространства: начиная от всего квартала, переходя ко двору, дому и квартире. Этот комплексный подход позволяет создать сбалансированную среду для личностного роста и гармоничного развития жителей.
                        </motion.p>
                    </div>
                </div>
                <div className="picture">
                    <motion.div
                        className='carousel-container'
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ ease: "easeOut", duration: 2, delay: 0.4 }}
                    >
                        <div className="carousel-info">
                            <div className='number'>
                                <span className='current'>{(currentSlide + 1).toLocaleString('en-US', {
                                    minimumIntegerDigits: 2,
                                    useGrouping: false,
                                })}</span> <span className='sup'>/ {carouselItems.length}</span>
                            </div>
                            <div className="controls">
                                <button onClick={handlePrev} disabled={currentSlide === 0}><ArrowSvg className="arrow" /></button>
                                <button onClick={handleNext} disabled={currentSlide === carouselItems.length}><ArrowSvg className="arrow rotate" /></button>
                            </div>
                        </div>
                        <Carousel
                        dots={false}
                        ref={carouselRef}
                            className="carousel"
                            autoplay
                            afterChange={handleSlideChange}
                        >
                            {carouselItems.map(item => (
                                <div className="car-item" key={item.key}>
                                    <img src={item.image} alt={`Image ${item.key}`} />
                                </div>
                            ))}
                        </Carousel>
                    </motion.div>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ ease: "easeOut", duration: 2, delay: 0.2 }}
                    >
                        В RAMS EVO будет собрана эволюционная экосистема из мест для работы, шоппинга, спорта, игр, творчества и семейного отдыха. В шаге от вашего дома будет сформировано насыщенное окружение, которое будет способствовать благополучию вашей семьи.
                    </motion.p>
                </div>
                <div className="cards">
                    <div className="card">
                        <div className="card-inner">
                            <div className="svg">
                                {/* <Card1Svg className="card-svg" /> */}
                                <img src={Icon1Img} alt="" />
                            </div>
                            <p>Велопаркинг и места для хранения детских колясок</p>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-inner">
                            <div className="svg">
                                {/* <Card2Svg className="card-svg" /> */}
                                <img src={Icon2Img} alt="" />
                            </div>
                            <p>Безопасный двор без машин</p>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-inner">
                            <div className="svg">
                                {/* <Card3Svg className="card-svg" /> */}
                                <img src={Icon3Img} alt="" />
                            </div>
                            <p>Школа во дворе</p>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-inner">
                            <div className="svg">
                                {/* <Card4Svg className="card-svg" /> */}
                                <img src={Icon4Img} alt="" />
                            </div>
                            <p>Public Center с доступом Wi-Fi</p>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-inner">
                            <div className="svg">
                                {/* <Card5Svg className="card-svg" /> */}
                                <img src={Icon5Img} alt="" />
                            </div>
                            <p>Безопасность 24/7</p>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-inner">
                            <div className="svg">
                                {/* <Card6Svg className="card-svg" /> */}
                                <img src={Icon6Img} alt="" />
                            </div>
                            <p>Смарт-паркинг: въезд по номерам и зарядки для электрокаров</p>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-inner">
                            <div className="svg">
                                {/* <Card7Svg className="card-svg" /> */}
                                <img src={Icon7Img} alt="" />
                            </div>
                            <p>EVO-парк с беговыми дорожками</p>
                        </div>
                    </div>
                    {/* <div className="card">
                        <div className="card-inner">
                            <div className="svg">
                                <Card8Svg className="card-svg" />
                            </div>
                            <p>Чистовая отделка нового формата</p>
                        </div>
                    </div> */}
                </div>
            </div>
        </section >
    )
}

export default About;