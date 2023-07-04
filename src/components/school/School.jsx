import "./School.css";
import SchoolImg from "../../images/school.jpg";
import React from 'react';
import { motion } from "framer-motion";

const School = () => {
    return (
        <section id="school">
            <img src={SchoolImg} alt="" />
            <div className="text">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ ease: "easeOut", duration: 2 }}
                >
                    Школа во дворе
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ ease: "easeOut", duration: 2 }}
                >
                    Ваш ребенок не будет опаздывать к первому уроку, ведь школа расположится в нескольких метрах от дома. А путь до школы будет проходить через безопасный двор без машин. Пусть знания станут ближе!
                </motion.p>
            </div>
        </section>
    )
}

export default School