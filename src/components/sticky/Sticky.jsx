import React from 'react';
import "./Sticky.css";
import St1Img from "../../images/st1.jpg";
import St2Img from "../../images/st2.jpg";
import St3Img from "../../images/st3.jpg";
import Stm1Img from "../../images/stm1.jpg";
import Stm2Img from "../../images/stm2.jpg";
import Stm3Img from "../../images/stm3.jpg";
import { Controller, Scene } from 'react-scrollmagic';
import { motion } from "framer-motion";


const Sticky = () => {
    return (
        <section id='sticky'>
            <div className="inner">
                <div className="con deck">
                            <div className="card">
                                <img src={St1Img} alt="" />
                                <div className="text">
                                    <h2>Внешняя красота</h2>
                                    <p>Фасад RAMS EVO вдохновлен геометрической эстетикой современного города. Текстурный, но утонченный внешний образ жилого комплекса будет собран из объемных фиброцементных и клинкерных панелей в красных и бежевых тонах. А экстерьерное освещение подчеркнет динамичность дизайна. Жилой комплекс RAMS EVO станет эволюционным преображением всего района!</p>
                                </div>
                            </div>
                    <Controller>
                        <Scene duration={300} triggerHook={0.3} classToggle="active">
                            <div className='card card2'>
                                <img src={St2Img} alt="" />
                            </div>
                        </Scene>
                    </Controller>
                    <Controller>
                        <Scene duration={300} triggerHook={0.3} classToggle="active">
                            <div className='card card3'>
                                <img src={St3Img} alt="" />
                                <div className="text">
                                    <h2>Светлый простор</h2>
                                    <p>Чувствуйте себя свободно в новой квартире с потолками 3 метра. Высокие потолки увеличивают объем воздуха в помещении, за счет чего летом в вашей квартире будет сохраняться прохлада.
                                        <br /><br />
                                        Трехметровые потолки откроют вам новые возможности для организации пространства и оформления интерьера. Плюс ко всему высокие потолки благотворно влияют на эмоциональный фон, ведь они создают в доме ощущение легкости и простора.</p>
                                </div>
                            </div>
                        </Scene>
                    </Controller>
                </div>
                <div className="con mob">
                    <div className="card">
                        <img src={Stm1Img} alt="" />
                        <div className="text">
                            <motion.h2
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ ease: "easeOut", duration: 2 }}
                            >Внешняя красота</motion.h2>
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ ease: "easeOut", duration: 2 }}
                            >Фасад RAMS EVO вдохновлен геометрической эстетикой современного города. Текстурный, но утонченный внешний образ жилого комплекса будет собран из объемных фиброцементных и клинкерных панелей в красных и бежевых тонах. А экстерьерное освещение подчеркнет динамичность дизайна. Жилой комплекс RAMS EVO станет эволюционным преображением всего района!</motion.p>
                        </div>
                    </div>
                    <div className='card'>
                        <img src={Stm3Img} alt="" />
                        <div className="text">
                            <motion.h2
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ ease: "easeOut", duration: 2 }}
                            >Светлый простор</motion.h2>
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ ease: "easeOut", duration: 2 }}
                            >Чувствуйте себя свободно в новой квартире с потолками 3 метра. Высокие потолки увеличивают объем воздуха в помещении, за счет чего летом в вашей квартире будет сохраняться прохлада.
                                <br /><br />
                                Трехметровые потолки откроют вам новые возможности для организации пространства и оформления интерьера. Плюс ко всему высокие потолки благотворно влияют на эмоциональный фон, ведь они создают в доме ощущение легкости и простора.</motion.p>
                        </div>
                    </div>
                    <div className='card'>
                        <img src={Stm2Img} alt="" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Sticky;