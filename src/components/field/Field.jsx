import React from 'react';
import "./Field.css";
import F1Img from "../../images/field1.jpg";
import F2Img from "../../images/field2.jpg";
import { motion } from 'framer-motion';

const Field = () => {
    return (
        <section id="field">
            <div className="inner">
                <div className="left">
                    <motion.img
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ ease: "easeOut", duration: 2 }}
                        src={F1Img} alt="" />
                    <motion.img src={F2Img} alt=""
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ ease: "easeOut", duration: 2, delay: 0.2 }}
                    />
                </div>
                <div className="right">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ ease: "easeOut", duration: 2 }}
                    >
                        Двор без машин
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ ease: "easeOut", duration: 2 }}
                    >
                        Жилой комплекс RAMS EVO – это архитектурная эволюция Алмалинского района. В строительстве проекта будет реализован подход EVO Concept с пошаговым благоустройством всего жилого пространства: начиная от квартала, переходя ко двору, дому и квартире. Проект создаст условия для вашего личностного роста и гармоничного развития.
                        <br />
                        <br />
                        RAMS EVO задаст новые стандарты качества жизни. Здесь будет собрана экосистема из мест для работы, спорта, игр, творчества и семейного отдыха. В шаге от дома будет сформирована насыщенная среда для вашего досуга.
                    </motion.p>
                </div>
            </div>

        </section>
    )
}

export default Field