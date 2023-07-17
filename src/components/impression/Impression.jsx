import React from 'react';
import ImpImg from "../../images/imp.jpg";
import "./Impression.css";
import Imp1Svg from "../../svg/Imp1Svg";
import Imp2Svg from "../../svg/Imp2Svg";
import Imp3Svg from "../../svg/Imp3Svg";
import { motion } from 'framer-motion';


const Impression = () => {
    return (
        <section id='imp'>
            <div className="inner">
                <div className="left">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ ease: "easeOut", duration: 2 }}
                    >Первое впечатление</motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ ease: "easeOut", duration: 2 }}
                    >Войдя в здание, вы окажетесь в стильном дизайнерском холле, где все соответствует высокому вкусу. На свой этаж вы подниметесь на скоростном и бесшумном лифте, в котором будет установлена современная система пожарной безопасности и камера видеонаблюдения. В каждом блоке RAMS EVO будет установлено по 2 лифта – пассажирский и грузовой. Приятное первое впечатление о вашем новом доме будет сформировано еще до того, как вы окажетесь в квартире!</motion.p>
                    <div className="cards">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ ease: "easeOut", duration: 2, delay: 0.2 }}
                            className="card">
                            <Imp1Svg className="icon" />
                            <p>Потолки 3 метра</p>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ ease: "easeOut", duration: 2, delay: 0.4 }}
                            className="card">
                            <Imp2Svg className="icon icon2" />
                            <p>Витражные окна</p>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ ease: "easeOut", duration: 2, delay: 0.6 }}
                            className="card">
                            <Imp3Svg className="icon" />
                            <p>Дизайнерские холлы</p>
                        </motion.div>
                    </div>
                </div>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ ease: "easeOut", duration: 2 }}
                    className="right">
                    <img src={ImpImg} alt="" />
                </motion.div>
            </div>
        </section>
    )
}

export default Impression