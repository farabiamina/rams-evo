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
    // useEffect(() => {
    //     const handleScroll = (event) => {
    //         // Check the scroll direction
    //         const scrollDirection = event.deltaY > 0 ? 'down' : 'up';

    //         // Handle the scroll event based on direction
    //         if (scrollDirection === 'down') {
    //             handleSwipe("Right");
    //         } else {
    //             // Scroll up logic
    //             handleSwipe("Left");
    //         }
    //     };

    //     // Add the event listener when the component mounts
    //     window.addEventListener('wheel', handleScroll);

    //     // Clean up the event listener when the component unmounts
    //     return () => {
    //         window.removeEventListener('wheel', handleScroll);
    //     };
    // }, []);
    const transition = {
        duration: 0.5,
        type: "tween",
        ease: "easeInOut",
    };
    return (
        <section id='all'>
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
                    <div>
                        <h2>
                            ALL-IN-ONE
                        </h2>
                        <p>
                            В нескольких метрах от вашего дома появятся коворкинг, фитнес-зал, кинотеатр и детская комната. Это система All-in-One, которая будет внедрена в RAMS EVO, чтобы сделать места для работы, спорта и отдыха ближе к дому.
                        </p>
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