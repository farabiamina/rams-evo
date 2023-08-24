import React, { useRef } from 'react';
import "./Evolution.css";
import GogolSvg from "../../svg/GogolSvg";
import Gogol2Svg from "../../svg/Gogol2Svg";
import AuesovSvg from "../../svg/AuesovSvg";
import EvoImg from "../../images/evo1.png";
import Evo2Img from "../../images/evo2.png";
import { motion } from "framer-motion";
import Circle from './Circle';

const Evolution = () => {
  const targetRef = useRef();
  return (
    <section id="about" ref={targetRef}>
      <div className="inner">
        <div className="left">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ ease: "easeOut", duration: 2 }}
          >Эволюция центрального района</motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ ease: "easeOut", duration: 2 }}
          >Ваш новый дом расположится в центре Алматы на пересечении улиц Ауэзова и Гоголя. Недалеко от Парка 28 панфиловцев и ГАТОБ. Это динамичный центральный район богатый школами, детскими садами, бизнес-центрами, супермаркетами и кафе. В шаговой доступности парк Ганди и река Есентай. Рядом БЦ Bereket и ТЦ City Center.</motion.p>
        </div>
        <div className='right'>
          <div className="picture">
            <div className="gogol-par">
              <GogolSvg className="gogol" />
            </div>
            <div className="gogol2-par">
              <Gogol2Svg className="gogol" />
            </div>
            <div className="aues-par">
              <AuesovSvg className="auesov" />
            </div>
            <Circle letter="A" />
            <Circle letter="B1" />
            <Circle letter="B2" />
            <Circle letter="C1" />
            <Circle letter="C2" />
            <Circle letter="C3" />
            <Circle letter="D" />
            <Circle letter="E1" />
            <Circle letter="E2" />
            <Circle letter="E3" />
            <Circle letter="F1" />
            <Circle letter="F2" />
            <Circle letter="F3" />
            <Circle letter="G" />
            <Circle letter="H1" />
            <Circle letter="H2" />
            <Circle letter="I1" />
            <Circle letter="I2" />
            <Circle letter="J1" />
            <Circle letter="J2" />
            <Circle letter="K1" />
            <Circle letter="K2" />
            <Circle letter="K3" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Evolution