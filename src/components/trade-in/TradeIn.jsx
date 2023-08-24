import React from 'react';
import "./TradeIn.css";
import Img from "../../images/trade1.png";
import TradeSvg from "../../svg/TradeSvg";
import { motion } from "framer-motion";

const TradeIn = () => {
    return (
        <section id="trade-in">
            {/* <TradeSvg className="trade-svg" /> */}
            <img src={Img} alt="" className="trade-svg" />
            <div className="inner">
                <div className="top">
                    <div className="text">
                        <div>
                            <motion.h2
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ ease: "easeOut", duration: 2 }}
                            >Обменяй вторичку на новую квартиру</motion.h2>
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ ease: "easeOut", duration: 2, delay: 0.2 }}
                            >Вы давно осознали, что пора расстаться с грузом прошлого и впустить в свою жизнь новую энергию? С программой Trade-In от Rams Evo вы сможете улучшить условия и качество жизни. Меняйте старую квартиру на новую на привлекательных условиях и наслаждайтесь комфортом и уютом!</motion.p>
                        </div>
                        <div className='con'>
                            <motion.h3
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ ease: "easeOut", duration: 2 }}
                            >
                                Вы можете участвовать в программе Trade In, если:
                            </motion.h3>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ ease: "easeOut", duration: 2, delay: 0.2 }}
                            >
                                <svg viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clip-path="url(#clip0_760_1478)">
                                        <path d="M29.9214 19.3119L21.6381 11.0665L17.3314 16.1077L29.7463 28.5225C29.9137 28.1734 30.0004 27.791 30 27.4038V19.3805C29.9724 19.3592 29.9462 19.3363 29.9214 19.3119ZM29.7752 1.54154L22.7656 9.74672L30 16.9481V2.59617C30.0002 2.23272 29.9236 1.87333 29.7752 1.54154ZM27.4038 1.3852e-06H19.3462L10.444 9.22014L16.1039 14.8801L28.5759 0.280783C28.2129 0.095934 27.8112 -0.000286686 27.4038 1.3852e-06ZM0.253712 1.47756C0.086304 1.82668 -0.000407674 2.20899 1.44097e-06 2.59617V27.4039C1.44097e-06 28.8354 1.16461 30 2.59617 30H27.4039C27.7911 30.0004 28.1734 29.9137 28.5225 29.7463L0.253712 1.47756ZM2.59617 1.3852e-06C2.20899 -0.000399716 1.82668 0.0863115 1.47756 0.253712L9.2199 7.99606L16.9403 1.3852e-06H2.59617Z" fill="#9ABA4D" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_760_1478">
                                            <rect width="30" height="30" rx="5" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>
                                <p>Ваша квартира находится в квадрате Гагарина - 8 марта, Ташкентская - Аль-Фараби</p>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ ease: "easeOut", duration: 2, delay: 0.4 }}
                            >
                                <svg viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M12.5 27.1874V19.6874C12.5 19.6043 12.5331 19.5249 12.5912 19.4662C12.6501 19.4078 12.7296 19.3751 12.8125 19.3749H17.1875C17.2706 19.3749 17.35 19.4081 17.4087 19.4662C17.467 19.5251 17.4998 19.6046 17.5 19.6874V27.1874C17.5 27.6018 17.6646 27.9993 17.9576 28.2923C18.2506 28.5853 18.6481 28.7499 19.0625 28.7499H23.4375C23.8519 28.7499 24.2493 28.5853 24.5423 28.2923C24.8353 27.9993 25 27.6018 25 27.1874V15.9374C25 15.8543 25.0331 15.7749 25.0912 15.7162C25.1501 15.6578 25.2296 15.6251 25.3125 15.6249H27.0575C27.7643 15.6249 28.4031 15.1712 28.6481 14.4737C28.7647 14.1429 28.7815 13.7851 28.6967 13.4448C28.6118 13.1045 28.4289 12.7966 28.1706 12.5593L16.1131 1.68119C15.8093 1.4026 15.4121 1.24805 15 1.24805C14.5878 1.24805 14.1906 1.4026 13.8868 1.68119L1.82933 12.5593C1.57106 12.7966 1.38813 13.1045 1.30325 13.4448C1.21837 13.7851 1.23526 14.1429 1.35183 14.4737C1.59683 15.1712 2.23558 15.6249 2.94246 15.6249H4.68746C4.77058 15.6249 4.84996 15.6581 4.90871 15.7162C4.96705 15.7751 4.99983 15.8546 4.99996 15.9374V27.1874C4.99996 27.6018 5.16458 27.9993 5.4576 28.2923C5.75063 28.5853 6.14806 28.7499 6.56246 28.7499H10.9375C11.3519 28.7499 11.7493 28.5853 12.0423 28.2923C12.3353 27.9993 12.5 27.6018 12.5 27.1874Z" fill="#9ABA4D" />
                                </svg>
                                <p>Дом, в котором находится ваша квартира, построен не ранее 1990 г.</p>
                            </motion.div>
                        </div>
                    </div>
                    <div className="img"></div>
                    {/* <img src={Img} alt="" /> */}
                </div>
                <motion.h3
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ ease: "easeOut", duration: 2, delay: 0.4 }}
                >Trade-in просто</motion.h3>
                <div className="bottom">
                    <motion.div className="card"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ ease: "easeOut", duration: 2 }}
                    >
                        <h3>01</h3>
                        <p>Вы обращаетесь в нашу компанию с целью обменять свою старую квартиру на новую квартиру в Rams Evo по программе Trade In</p>
                    </motion.div>
                    <motion.div className="card"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ ease: "easeOut", duration: 2, delay: 0.2 }}>
                        <h3>02</h3>
                        <p>Мы оцениваем вашу квартиру</p>
                    </motion.div>
                    <motion.div className="card"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ ease: "easeOut", duration: 2, delay: 0.4 }}
                    >
                        <h3>03</h3>
                        <p>Оформляем покупку с задатком на новую квартиру в ЖК RAMS EVO</p>
                    </motion.div>
                    <motion.div className="card"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ ease: "easeOut", duration: 2, delay: 0.6 }}
                    >
                        <h3>04</h3>
                        <p>Полностью выкупаем вашу старую квартиру</p>
                    </motion.div>
                </div>
            </div>
        </section >
    )
}

export default TradeIn;