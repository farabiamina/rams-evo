import React from 'react';
import ImpImg from "../../images/imp.jpg";
import "./Impression.css";
import Imp1Svg from "../../svg/Imp1Svg";
import Imp2Svg from "../../svg/Imp2Svg";
import Imp3Svg from "../../svg/Imp3Svg";


const Impression = () => {
    return (
        <section id='imp'>
            <div className="inner">
                <div className="left">
                    <h2>Первое впечатление</h2>
                    <p>Войдя в здание, вы окажетесь в стильном дизайнерском холле, где все соответствует высокому вкусу. На свой этаж вы подниметесь на скоростном и бесшумном лифте, в котором будет установлена современная система пожарной безопасности и камера видеонаблюдения. В каждом блоке RAMS EVO будет установлено по 2 лифта – пассажирский и грузовой. Приятное первое впечатление о вашем новом доме будет сформировано еще до того, как вы окажетесь в квартире!</p>
                    <div className="cards">
                        <div className="card">
                            <Imp1Svg className="icon"/>
                            <p>Потолки 3 метра</p>
                        </div>
                        <div className="card">
                            <Imp2Svg className="icon icon2"/>
                            <p>Витражные окна</p>
                        </div>
                        <div className="card">
                            <Imp3Svg className="icon"/>
                            <p>Дизайнерские холлы</p>
                        </div>
                    </div>
                </div>
                <div className="right">
                    <img src={ImpImg} alt="" />
                </div>
            </div>
        </section>
    )
}

export default Impression