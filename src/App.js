import React, { useEffect, useState, useRef, useContext } from 'react';
import { gsap } from 'gsap';
import "./App.css";
import Banner from './components/banner/Banner';
import DropDown from './components/drop-down/DropDown';
import { AppContext } from './context/Context';
import About from './components/about/About';
import Evolution from './components/evolution/Evolution';
import Location from './components/location/Location';
import Field from './components/field/Field';
import School from './components/school/School';
import Sticky from './components/sticky/Sticky';
import Impression from './components/impression/Impression';
import AllInOne from './components/all-in-one/AllInOne';
import BottomForm from './components/bottomForm/BottomForm';
import Modalheader from './components/modalHeader/Modalheader';
import Footer from './components/footer/Footer';
import ModalForm from './components/modalForm/ModalForm';
import P404 from './components/p404/P404';
import Submitted from './components/submitted/Submitted';
import TradeIn from './components/trade-in/TradeIn';

function App() {
  const [scrollerHeight, setScrollerHeight] = useState(0);
  const targetRef = useRef(null);
  let requestId = null;
  const { is404, isSubmitted } = useContext(AppContext);

  // const scroller = {
  //   target: targetRef.current,
  //   ease: 0.1,
  //   endY: 0,
  //   y: 0,
  //   resizeRequest: 1,
  //   scrollRequest: 0,
  // };

  // const handleResize = () => {
  //   scroller.resizeRequest++;
  //   if (!requestId) {
  //     requestId = requestAnimationFrame(updateScroller);
  //   }
  // };

  // const handleScroll = () => {
  //   scroller.scrollRequest++;
  //   if (!requestId) {
  //     requestId = requestAnimationFrame(updateScroller);
  //   }
  // };

  // const onLoad = () => {
  //   const targetElement = targetRef.current;
  //   if (targetElement) {
  //     setScrollerHeight(targetElement.clientHeight);
  //   }

  //   updateScroller();
  //   window.focus();
  // };

  // const updateScroller = () => {
  //   const targetElement = targetRef.current;
  //   if (!targetElement) return;

  //   const resized = scroller.resizeRequest > 0;

  //   if (resized) {
  //     const height = scrollerHeight;
  //     document.body.style.height = height + "px";
  //     scroller.resizeRequest = 0;
  //   }

  //   const scrollY = window.scrollY || document.documentElement.scrollTop || document.body.scrollTop || 0;

  //   scroller.endY = scrollY;
  //   scroller.y += (scrollY - scroller.y) * scroller.ease;

  //   if (Math.abs(scrollY - scroller.y) < 0.05 || resized) {
  //     scroller.y = scrollY;
  //     scroller.scrollRequest = 0;
  //   }

  //   gsap.set(targetElement, {
  //     y: -scroller.y
  //   });

  //   requestId = scroller.scrollRequest > 0 ? requestAnimationFrame(updateScroller) : null;
  // };
  // useEffect(() => {
  //   onLoad();
  //   window.addEventListener("resize", handleResize);
  //   document.addEventListener("scroll", handleScroll);
  //   return () => {
  //     window.removeEventListener("resize", handleResize);
  //     document.removeEventListener("scroll", handleScroll);
  //     cancelAnimationFrame(requestId);
  //   };
  // }, []);

  // function isMobileDevice() {
  //   const userAgent = navigator.userAgent.toLowerCase();
  //   const mobileKeywords = ['android', 'webos', 'iphone', 'ipad', 'ipod', 'blackberry', 'windows phone'];
  //   return mobileKeywords.some(keyword => userAgent.includes(keyword));
  // }

  

  if (is404) {
    return <P404/>;
  } 
  else if (isSubmitted) {
    return <Submitted/>;
  }

  return (
    <main>
      <Modalheader />
      <DropDown />
      <ModalForm />
      <div ref={true ? null : targetRef} id="scroll-container" className='content'>
        <Banner />
        <About />
        <Evolution />
        <Location />
        <Field />
        <School />
        <Sticky />
        <Impression />
        <AllInOne />
        <TradeIn/>
        <BottomForm />
        <Footer />
      </div>
    </main>
  );
}

export default App;