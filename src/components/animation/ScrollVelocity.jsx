// import "./styles.css";
import { useRef, useEffect } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useVelocity,
  useAnimationFrame
} from "framer-motion";
import { wrap } from "@motionone/utils";

function ScrollVelocity({ children, direction = 1 }) {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false
  });
  const x = useTransform(baseX, (v) => `${wrap(-50, -27, v)}%`);
  const directionFactor = useRef(1);
  const prevScrollY = useRef(scrollY.get());
  useEffect(() => {
    const scrollDirection = scrollY.get() > prevScrollY.current ? 1 : -1;
    directionFactor.current = scrollDirection;
    prevScrollY.current = scrollY.get();
  }, [scrollY]);
  useAnimationFrame(() => {
    let moveBy = 0;
    moveBy += directionFactor.current * 0.05 * velocityFactor.get() * direction;
    baseX.set(baseX.get() + moveBy);
  });
  return (
    <div className="parallax">
      <motion.div className="scroller" style={{ x }}>
        {children}
        {children}
      </motion.div>
    </div>
  );
}

export default ScrollVelocity;