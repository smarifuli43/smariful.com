import Link from 'next/link';
import React from 'react';
import heroImg from '../../../public/images/ariful1.jpeg';
import Image from 'next/image';

const Hero = () => {
  return (
    <div>
      <div
        className='absolute bottom-44 left-70  h-[150px] w-[150px] sm:w-[350px] md:w-[400px]  rounded-3xl bg-gradient-to-r
       from-violet-600 to-indigo-800 opacity-20 blur-3xl filter lg:bottom-24 lg:left-20 lg:h-28  lg:-rotate-12 lg:opacity-20 xl:h-40 xl:w-[400px]'
      ></div>

      <div
        className='absolute left-[48%] top-20  rotate-12 rounded-3xl bg-gradient-to-l 
       from-rose-600/50 to-sky-400  opacity-20 blur-3xl filter h-44 w-[100px] sm:w-[200px] lg:h-32 lg:w-[450px] xl:h-44 xl:w-[600px]'
      ></div>

      <div className='flex items-center h-screen '>
        <div className='text-left md:text-left sm:w-[550px] '>
          <p>Hi there,</p>
          <h1 className=' text-[30px] md:text-[40px] lg:text-[50px] font-extrabold text-[#5c2ede]'>
            I’m Md Ariful Islam
          </h1>
          <p className='text-[20px] lg:text-[30px] font-medium pt-2'>
            Front-End Web Developer
          </p>
          <p className='text-gray-200 mb-4'>
            I'm a undergraduate student and freelancer front‑end developer
            focused on building clean and user‑friendly websites.
          </p>

          <Link
            href='/'
            className='px-4 py-2 rounded cursor-pointer bg-slate-700 lg:text-lg hover:bg-slate-900 absolute z-20'
          >
            Let's connect
          </Link>
        </div>
        <div className=''>
          {/* <Image src={heroImg} className='w-[300px]'></Image> */}
        </div>
      </div>
    </div>
  );
};

export default Hero;
