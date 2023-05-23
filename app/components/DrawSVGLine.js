'use client';
import { motion, useViewportScroll } from 'framer-motion';

function DrawSVGLine() {
  const { scrollYProgress } = useViewportScroll();
  const pathVariants = {
    hidden: { pathLength: 0 },
    visible: {
      pathLength: 1,
      transition: {
        duration: 10,
        ease: 'easeInOut',
      },
    },
  };

  return (
    <svg viewBox='0 0 100 100'>
      <motion.path
        d='M 10,50 C 20,70 40,80 60,70 C 80,60 90,30 90,10'
        stroke='#000'
        strokeWidth='2'
        fill='none'
        strokeDasharray='1 0'
        strokeDashoffset='0'
        variants={pathVariants}
        style={{ pathLength: scrollYProgress }}
      />
    </svg>
  );
}

export default DrawSVGLine;
