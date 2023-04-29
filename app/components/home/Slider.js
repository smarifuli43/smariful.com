'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import slider1 from '../../../public/images/slider/1.png';
import slider2 from '../../../public/images/slider/2.png';
import slider3 from '../../../public/images/slider/3.png';
import slider4 from '../../../public/images/slider/4.png';

const Slider = () => {
    const progressCircle = useRef(null);
    const progressContent = useRef(null);
    const onAutoplayTimeLeft = (s, time, progress) => {
      progressCircle.current.style.setProperty('--progress', 1 - progress);
      progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    };

  return <div></div>;
};

export default Slider;
