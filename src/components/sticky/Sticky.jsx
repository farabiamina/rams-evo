import React from 'react';
import "./Sticky.css";
import St1Img from "../../images/st1.jpg";
import St2Img from "../../images/st2.jpg";
import St3Img from "../../images/st3.jpg";
import { Controller, Scene } from 'react-scrollmagic';


const Sticky = () => {
    return (
        <section id='sticky'>
            <div className="inner">
                <div className="con">
                    {/* <Controller>
                        <Scene duration={800} triggerHook="onEnter">
                            {(progress) => {
                                const y = progress * 200; // Invert the progress value

                                return (
                                    <div
                                        style={{
                                            transform: `translateY(${y}px)`,
                                        }}
                                        className="card">
                                        <img src={St1Img} alt="" />
                                        <div className="text">
                                            <h2>Внешняя красота</h2>
                                            <p>Фасад RAMS EVO вдохновлен геометрической эстетикой современного города. Текстурный, но утонченный внешний образ жилого комплекса будет собран из объемных фиброцементных и клинкерных панелей в красных и бежевых тонах. А экстерьерное освещение подчеркнет динамичность дизайна. Жилой комплекс RAMS EVO станет эволюционным преображением всего района!</p>
                                        </div>
                                    </div>
                                );
                            }}
                        </Scene>
                        <Scene duration={800} triggerHook="onEnter">
                            {(progress) => {
                                const y = progress * 200; // Invert the progress value

                                return (
                                    <div style={{
                                        transform: `translateY(${y}px)`,
                                    }} className="card">
                                        <img src={St2Img} alt="" />
                                    </div>
                                );
                            }}
                        </Scene>
                    </Controller> */}
                    <div className="card">
                        <img src={St1Img} alt="" />
                        <div className="text">
                            <h2>Внешняя красота</h2>
                            <p>Фасад RAMS EVO вдохновлен геометрической эстетикой современного города. Текстурный, но утонченный внешний образ жилого комплекса будет собран из объемных фиброцементных и клинкерных панелей в красных и бежевых тонах. А экстерьерное освещение подчеркнет динамичность дизайна. Жилой комплекс RAMS EVO станет эволюционным преображением всего района!</p>
                        </div>
                    </div>
                    <div className="card">
                        <img src={St2Img} alt="" />
                    </div>
                    <div className="card">
                        <img src={St3Img} alt="" />
                        <div className="text">
                            <h2>Светлый простор</h2>
                            <p>Чувствуйте себя свободно в новой квартире с потолками 3 метра. Высокие потолки увеличивают объем воздуха в помещении, за счет чего летом в вашей квартире будет сохраняться прохлада.
                                <br /><br />
                                Трехметровые потолки откроют вам новые возможности для организации пространства и оформления интерьера. Плюс ко всему высокие потолки благотворно влияют на эмоциональный фон, ведь они создают в доме ощущение легкости и простора.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Sticky