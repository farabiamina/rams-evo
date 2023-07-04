import React, { useEffect, useRef, useState } from 'react';
import "./About.css";
import { motion } from "framer-motion";
import AboutImg from "../../images/about.jpg";
import EVOsvg from "../../svg/EVOsvg";
import Card1Svg from "../../svg/Card1Svg";
import { Carousel } from 'antd';
import ArrowSvg from "../../svg/ArrowSvg";

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
            image: AboutImg,
            key: 2
        },
        {
            image: AboutImg,
            key: 3
        },
        {
            image: AboutImg,
            key: 4
        },
        {
            image: AboutImg,
            key: 5
        }
    ];
    return (
        <section id='about' ref={containerRef}>
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
                                <Card1Svg className="card-svg" />
                            </div>
                            <p>Велопаркинг и места для хранения детских колясок</p>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-inner">
                            <div className="svg">
                                <Card1Svg className="card-svg" />
                            </div>
                            <p>Велопаркинг и места для хранения детских колясок</p>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-inner">
                            <div className="svg">
                                <Card1Svg className="card-svg" />
                            </div>
                            <p>Велопаркинг и места для хранения детских колясок</p>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-inner">
                            <div className="svg">
                                <Card1Svg className="card-svg" />
                            </div>
                            <p>Велопаркинг и места для хранения детских колясок</p>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-inner">
                            <div className="svg">
                                <Card1Svg className="card-svg" />
                            </div>
                            <p>Велопаркинг и места для хранения детских колясок</p>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-inner">
                            <div className="svg">
                                <Card1Svg className="card-svg" />
                            </div>
                            <p>Велопаркинг и места для хранения детских колясок</p>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-inner">
                            <div className="svg">
                                <Card1Svg className="card-svg" />
                            </div>
                            <p>Велопаркинг и места для хранения детских колясок</p>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-inner">
                            <div className="svg">
                                <Card1Svg className="card-svg" />
                            </div>
                            <p>Велопаркинг и места для хранения детских колясок</p>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    )
}

export default About;