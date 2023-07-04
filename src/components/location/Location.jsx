import React from 'react';
import "./Location.css";
import LocationSvg from "../../svg/LocationSvg";
import CompasSvg from "../../svg/CompasSvg";
import ScrollVelocity from '../animation/ScrollVelocity';
import Evo1Img from "../../images/evo2.png";
import S1Img from "../../images/s1.png";
import S2Img from "../../images/s2.png";
import S3Img from "../../images/s3.png";
import S4Img from "../../images/s4.png";
import S5Img from "../../images/s5.png";
import S6Img from "../../images/s6.png";
import { motion } from 'framer-motion';
import Ticker from 'framer-motion-ticker';

const Location = () => {
    const pills = [
        {
            time: 12,
            text: ["на машине до парка", "28 панфиловцев"],
            img: Evo1Img,
        },
        {
            time: 10,
            text: ["до", "цирка"],
            img: S1Img,
        },
        {
            time: 11,
            text: ["до", "КИМЭП"],
            img: S2Img,
        },
        {
            time: 9,
            text: ["до", "ЦУМ-а"],
            img: S3Img,
        },
        {
            time: 12,
            text: ["до Центрального", "стадиона"],
            img: S4Img,
        },
        {
            time: 12,
            text: ["пешком до парка", "имени М.К. Ганди"],
            img: S5Img,
        },
        {
            time: 12,
            text: ["до", "КБТУ"],
            img: S6Img,
        },
    ]

    const lastPill = pills[pills.length - 1];
    const pills2 = [lastPill, ...pills.slice(0, -1)];
    return (
        <section id="location">
            <div className="inner">
                <div className="left">
                    <CompasSvg className="compas" />
                    <div>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ ease: "easeOut", duration: 2 }}
                        >Расположение</motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ ease: "easeOut", duration: 2, delay: 0.2 }}
                        >Отсюда удобно добираться в любой район города. Вы будете успевать на все запланированные встречи, ведь овладеть искусством тайм-менеджмента значительно проще, когда вы живете в центре города.</motion.p>
                        <button>Построить маршрут</button>
                    </div>
                </div>
                <div className="right">
                    <LocationSvg className="svg"/>
                    <button>Построить маршрут</button>
                </div>
            </div>
            {/* <Ticker duration={50} className="ticker">
                {
                    pills.map(pill =>
                        <div className="pill-item">
                            <div className="pill">
                                <span className='time'>{pill.time} min</span>
                                <span>{pill.text[0]} <br /> {pill.text[1]}</span>
                            </div>
                            <img src={pill.img} alt="" />
                        </div>
                    )
                }
            </Ticker> */}
            {/* <Ticker direction={-1} duration={55} className="ticker">
                {pills2.map((pill, index) => (
                    <div key={index} className="pill-item" >
                        <div className="pill">
                            <span className='time'>{pill.time} min</span>
                            <span>{pill.text[0]} <br /> {pill.text[1]}</span>
                        </div>
                        <img src={pill.img} alt="" />
                    </div>
                ))}
            </Ticker> */}
            
        </section>
    )
}

export default Location