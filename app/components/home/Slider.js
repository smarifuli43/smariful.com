'use client';
import Image from 'next/image';

import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import './slider.css';

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
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 5500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className='mySwiper'
      >
        <SwiperSlide>
          <Image src={slider1} className='h-[600px] relative'></Image>
          <span className=' absolute z-0 w-full h-16 bg-gradient-to-b from-transparent to-gray-700 bottom-0'></span>
        </SwiperSlide>
        <SwiperSlide>
          <Image src={slider2} className='h-[600px] relative'></Image>
          <span className=' absolute z-0 w-full h-16 bg-gradient-to-b from-transparent to-gray-700 bottom-0'></span>
        </SwiperSlide>
        <SwiperSlide>
          <Image src={slider3} className='h-[600px] relative'></Image>
          <span className=' absolute z-0 w-full h-16 bg-gradient-to-b from-transparent to-gray-700 bottom-0'></span>
        </SwiperSlide>
        <SwiperSlide>
          <Image src={slider4} className='h-[600px] relative'></Image>
          <span className=' absolute z-0 w-full h-16 bg-gradient-to-b from-transparent to-gray-700 bottom-0'></span>
        </SwiperSlide>

        <div className='autoplay-progress' slot='container-end'>
          <svg viewBox='0 0 48 48' ref={progressCircle}>
            <circle cx='24' cy='24' r='20'></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>
    </>
  );
};

export default Slider;
