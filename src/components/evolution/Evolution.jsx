import React, { useRef } from 'react';
import "./Evolution.css";
import GogolSvg from "../../svg/GogolSvg";
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
            {/* <Parallax className='gogol-par' translateX={[0, -400]} translateY={[0, -334]}
            >
              <GogolSvg className="gogol" />
            </Parallax>
            <Parallax className='aues-par' translateX={[0, -470]} translateY={[0, 224]}>
              <AuesovSvg className="auesov" />
            </Parallax> */}
            <motion.div className="gogol-par"
              initial={{ y: 75, x: 90 }}
              whileInView={{ y: 0, x: 0 }}
              // viewport={{ once: true }}
              transition={{ ease: "easeOut", duration: 2, exit: { duration: 0 } }}
            >
              <GogolSvg className="gogol" />
            </motion.div>
            <motion.div
              className="aues-par"
              initial={{ y: -80, x: 200 }}
              whileInView={{ y: 0, x: 0 }}
              exit={{ transition: { duration: 0 } }}
              // viewport={{ once: true }}
              transition={{ ease: "easeOut", duration: 2, exit: { duration: 0 } }}
            >
              <AuesovSvg className="auesov" />
            </motion.div>
            {/* <Controller>
              <Scene duration={1000} triggerHook="onEnter">
                {(progress) => {
                  const x = progress * -400; // Calculate the x-axis translation based on progress
                  const y = progress * 270;

                  return (
                    <div className='aues-par' translateX={[0, -280]} translateY={[-20, 130]}>
                      <AuesovSvg
                        style={{
                          transform: `translate(${x}%, ${y}%)`,
                        }}
                        className="auesov" />
                    </div>
                  );
                }}
              </Scene>
            </Controller> */}
            <img src={EvoImg} alt="" className='evo-img' />

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
          <div className="bottom">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ ease: "easeOut", duration: 2 }}
            >Отсюда удобно добираться в любой район города. Вы будете успевать на все запланированные встречи, ведь овладеть искусством тайм-менеджмента значительно проще, когда вы живете в центре города.</motion.p>
            <img src={Evo2Img} alt="" className='circle-img' />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Evolution