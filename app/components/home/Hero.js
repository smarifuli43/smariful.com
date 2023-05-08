import Link from 'next/link';
import React from 'react';
// import heroImg from '../../../public/images/hero-img.jpg';
import Image from 'next/image';
import Slider from './Slider';

const Hero = () => {
  return (
    <div className='h-[680px]'>
      <div
        className='absolute bottom-44 left-70  h-[150px] w-[150px] sm:w-[350px] md:w-[400px]  rounded-3xl bg-gradient-to-r
       from-violet-600 to-indigo-800 opacity-30 blur-3xl filter lg:bottom-24 lg:left-20 lg:h-28  lg:-rotate-12 lg:opacity-20 xl:h-40 xl:w-[400px] z-0'
      ></div>

      <div
        className='fixed left-[48%] top-20  rotate-12 rounded-3xl bg-gradient-to-l 
       from-rose-600/50 to-sky-400  opacity-30 blur-3xl filter h-44 w-[100px] sm:w-[200px] lg:h-32 lg:w-[450px] xl:h-44 xl:w-[600px] z-0'
      ></div>

      <div className='flex items-center justify-between h-full  gap-2'>
        <div className='text-left md:text-left sm:w-[550px] '>
          <p>Hi there,</p>
          <h1 className=' text-[30px] md:text-[40px] lg:text-[50px] font-extrabold text-[#5c2ede]'>
            I’m Md Ariful Islam
          </h1>
          <p className='text-[20px] lg:text-[30px] font-medium mt-2'>
            Front-End Web Developer
          </p>
          <p className='text-gray-200 mb-4 mt-3'>
            I'm a undergraduate student and freelancer front‑end developer
            focused on building clean and user‑friendly websites.
          </p>

          <Link
            href='/'
            className='cursor-pointer relative inline-flex items-center justify-center overflow-hidden  font-medium  rounded-lg group px-4 py-2 text-white bg-slate-700 lg:text-lg z-10 mt-2 shadow'
          >
            <span className='absolute w-0 h-0 transition-all duration-500 ease-out bg-[#5C2EDE] rounded-full group-hover:w-56 group-hover:h-56'></span>
            <span className='absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-gray-700'></span>
            <span className='relative'>Let's Connect</span>
          </Link>
        </div>
        <div className='hidden md:block w-[300px] lg:w-[400px] xl:w-[500px] h-[250px] lg:h-[300px] xl:h-[350px]'>
          {/* <Image src={heroImg} className='w-[300px]'></Image> */}
          {/* <Slider /> */}
        </div>
      </div>
      {/* <hr className='border-gray-600'/> */}
    </div>
  );
};

export default Hero;
