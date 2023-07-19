import React from 'react';
import "./Footer.css";
import Logo from "../../svg/HeaderLogoSvg";
import { InstagramSvg, YouTubeSvg, FacebookSvg } from '../../svg/FooterIconsSvg';

const Footer = () => {
    return (
        <footer>
            <div className="inner">
                <div className="container">
                    <div className="left">
                        <Logo className="logo" />
                        <div className="icons">
                            <InstagramSvg />
                            <YouTubeSvg />
                            <FacebookSvg />
                        </div>
                    </div>
                    <div className="right">
                        <div className="top">
                            <div className="addresses">
                                <div className="block">
                                    <div className="adress">
                                        г. Алматы, <br />
                                        пр. Суюнбая 15б
                                    </div>
                                    <div className="time">
                                        Пн-Пт 10:00-20:00 <br />
                                        Пн-Пт 10:00-20:00
                                    </div>
                                </div>
                                <div className="block">
                                    <div className="adress">
                                        г. Алматы, <br />
                                        ул. Темирязева, 37
                                    </div>
                                    <div className="time">
                                        Пн-Пт 10:00-20:00 <br />
                                        Пн-Пт 10:00-20:00
                                    </div>
                                </div>
                                <div className="block">
                                    <div className="adress">
                                        г. Алматы, <br />
                                        уд. Айманова, 120
                                    </div>
                                    <div className="time">
                                        Пн-Пт 10:00-20:00 <br />
                                        Пн-Пт 10:00-20:00
                                    </div>
                                </div>
                                <div className="block">
                                    <div className="adress">
                                        г. Алматы, <br />
                                        ул. Жандосова, 94а
                                    </div>
                                    <div className="time">
                                        Пн-Пт 10:00-20:00 <br />
                                        Пн-Пт 10:00-20:00
                                    </div>
                                </div>
                            </div>
                            <a href="tel: +77072124444" className="phone">+7 707 212 44 44</a>
                        </div>
                        <div className="bottom">
                            <p>Архитектура проекта, изображения благоустройства, фасадов, интерьера, применяемых материалов, их нумерация, инфраструктура комплекса являются условными и могут быть изменены в ходе проектирования, строительства и эксплуатации в рамках положительного заключения государственной экспертизы. Настоящая реклама, в соответствии со ст. 395 ГК РК не является публичной офертой.</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer