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
                            <a target='_blank' href="https://www.instagram.com/rams_qazaqstan"><InstagramSvg /></a>
                            <a target='_blank' href="https://youtube.com/@ramsqazaqstan"><YouTubeSvg /></a>
                            <a target='_blank' href="https://www.facebook.com/ramspromokaz?mibextid=LQQJ4d"><FacebookSvg /></a>
                        </div>
                    </div>
                    <div className="right">
                        <div className="top">
                            <div className="addresses">
                                <div className="block">
                                    <div className="adress">
                                        <a target='_blank' href="https://go.2gis.com/3g2bpa">г. Алматы, <br />
                                            пр. Суюнбая 15б</a>
                                    </div>
                                    <div className="time">
                                        Пн-Пт 10:00-20:00 <br />
                                        Сб-Вс 10:00-19:00
                                    </div>
                                </div>
                                <div className="block">
                                    <div className="adress">
                                        <a target='_blank' href="https://go.2gis.com/ako301">г. Алматы, <br />
                                            ул. Тимирязева, 37</a>
                                    </div>
                                    <div className="time">
                                        Пн-Пт 10:00-20:00 <br />
                                        Сб-Вс 10:00-19:00
                                    </div>
                                </div>
                                <div className="block">
                                    <div className="adress">
                                        <a target='_blank' href="https://go.2gis.com/w0d86">г. Алматы, <br />
                                            уд. Айманова, 120</a>
                                    </div>
                                    <div className="time">
                                        Пн-Пт 10:00-20:00 <br />
                                        Сб-Вс 10:00-19:00
                                    </div>
                                </div>
                                <div className="block">
                                    <div className="adress">
                                        <a target='_blank' href="https://go.2gis.com/ajpzb">г. Алматы, <br />
                                            ул. Жандосова, 94а</a>
                                    </div>
                                    <div className="time">
                                        Пн-Пт 10:00-20:00 <br />
                                        Сб-Вс 10:00-19:00
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