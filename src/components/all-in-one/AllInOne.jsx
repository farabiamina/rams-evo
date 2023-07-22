import React, { useState, useEffect } from 'react';
import "./AllInOne.css";
import AllSvg from "../../svg/AllInOneSvg";
import All1Img from "../../images/all1.jpg";
import All2Img from "../../images/all2.jpg";
import All3Img from "../../images/all3.jpg";
import All4Img from "../../images/all4.jpg";
import AllBImg from "../../images/allB.png";
import { motion } from "framer-motion";
import { useSwipeable } from "react-swipeable";
import ArrowSvg from "../../svg/ArrowSvg";

const AllInOne = () => {
    const [position, setPosition] = useState(0);
    const list = [
        {
            img: All1Img,
            title: "Kids Room",
            i: 0,
        },
        {
            img: All2Img,
            title: "Fitness Room",
            i: 1,
        },
        {
            img: All3Img,
            title: "Cinema / PS Room",
            i: 2,
        },
        {
            img: All4Img,
            title: "Coworking Room",
            i: 3,
        },
    ];
    const handlers = useSwipeable({
        onSwipedLeft: () => {
            handleSwipe("Right");
        },
        onSwipedRight: () => {
            handleSwipe("Left");
        },
        preventDefaultTouchmoveEvent: true, // Prevents default scrolling behavior on touch devices
        trackMouse: true, // Enables swiping with the mouse cursor on desktop devices
    });
    const handleSwipe = (dir) => {
        if (dir === "Right") {
            if (position < list.length - 1) {
                setPosition(position + 1);
            }
            else {
                setPosition(0)
            }
        }
        if (dir === "Left") {
            if (position > 0) {
                setPosition(position - 1);
            }
        }
    };
    const transition = {
        duration: 0.5,
        type: "tween",
        ease: "easeInOut",
    };
    const [currentSlide, setCurrentSlide] = useState(0);
    const handleSlideChange = (slideIndex) => {
        setCurrentSlide(slideIndex);
    };
    return (
        <section id='all-in-one'>
            <div className="inner">
                <AllSvg className="svg" />
                <div {...handlers} className="carousel">
                    <div className="row">
                        {
                            list.map((el) => {
                                // console.log(index, position);
                                return (
                                    <motion.div key={el.i} className="container"
                                        initial={{ opacity: el.i <= position ? 1 : 0.2, x: `${(el.i - position) * 105 + 40}%` }}
                                        animate={{ opacity: el.i <= position ? 1 : 0.2, x: `${(el.i - position) * 105 + 40}%` }}
                                        transition={transition}
                                    >
                                        <img draggable="false" src={el.img} alt="" />
                                        <p>{el.title}</p>
                                    </motion.div>
                                )
                            })
                        }
                    </div>
                </div>
                <div className="bottom">
                    <img src={AllBImg} alt="" />
                    <div className='text'>
                        <h2>
                            ALL-IN-ONE
                        </h2>
                        <p>
                            В нескольких метрах от вашего дома появятся коворкинг, фитнес-зал, кинотеатр и детская комната. Это система All-in-One, которая будет внедрена в RAMS EVO, чтобы сделать места для работы, спорта и отдыха ближе к дому.
                        </p>
                    </div>
                    <div className="carousel-info">
                        <div className='number'>
                            <span className='current'>{(position + 1).toLocaleString('en-US', {
                                minimumIntegerDigits: 2,
                                useGrouping: false,
                            })}</span> <span className='sup'>{(list.length).toLocaleString('en-US', {
                                minimumIntegerDigits: 2,
                                useGrouping: false,
                            })}</span>
                        </div>
                        <div className="controls">
                            <button onClick={()=>handleSwipe("Left")} disabled={position === 0}><ArrowSvg className="arrow" /></button>
                            <button onClick={()=>handleSwipe("Right")} disabled={position === list.length}><ArrowSvg className="arrow rotate" /></button>
                        </div>
                    </div>
                </div>
                <div className="cards">
                    {
                        list.map((el) => {
                            // console.log(index, position);
                            return (
                                <div key={el.i} className="card">
                                    <img draggable="false" src={el.img} alt="" />
                                    <p>{el.title}</p>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </section>
    )
}

export default AllInOne