import Image from 'next/image';
import React from 'react';
import ariful from '../../../public/images/ariful.jpeg';
import { Great_Vibes } from 'next/font/google';
import {
  BsGithub,
  BsFacebook,
  BsInstagram,
  BsLinkedin,
  BsTwitter,
} from 'react-icons/bs';
import { FiExternalLink } from 'react-icons/fi';
import Link from 'next/link';

const font = Great_Vibes({
  weight: '400',
  subsets: ['latin-ext'],
});

const About = () => {
  return (
    <div className='h-full text-white mb-14 relative mt-10'>
      <h1 className='text-[50px] md:text-[60px] lg:text-[70px] xl:text-[80px] font-bold  text-gray-600/40 uppercase leading-[70px] tracking-tight'>
        About me
      </h1>
      <h2 className='text-[30px] md:text-[33px] lg:text-[36px] font-semibold leading-[30px] -mt-8'>
        Who Am I
      </h2>
      <hr className='mt-9 w-[100px] border border-gray-200' />
      <div className='mt-10 grid md:grid-cols-2 gap-8 place-content-between p-6 md:p-8 lg:p-10 bg-opacity-0 rounded-2xl bg-slate-600/20 ring-1 ring-gray-400/20'>
        <div className='order-2'>
          <div className=' text-justify font-light leading-relaxed tracking-wide opacity-75 text-base '>
            <p>
              Hello there, I'm Ariful, an undergraduate student of EEE at RUET.
              I have always been passionate about coding and programming, and
              that's what led me to web development. As a tech enthusiast, I am
              always eager to learn and explore new technologies, and this has
              helped me develop my skills in website development.
            </p>

            <p className=' mt-3'>
              In my free time, you can find me experimenting with new coding
              techniques, exploring the latest tools and frameworks. My goal is
              to build websites that not only look great but also provide value
              to businesses and individuals.
            </p>
          </div>
          <h3 className={` ${font.className} text-[30px] mt-6 text-[#f5b402]`}>
            {/*  #02d918*/}
            Ariful
          </h3>

          <div className=' mt-6 flex gap-8 text-gray-300  text-[18px] md:text-[20px] '>
            <Link
              href='https://github.com/smarifuli43'
              target='_blank'
              className='flex justify-center items-center border rounded-sm border-gray-400 p-2 hover:bg-[#5C2EDE] hover:border-[#5C2EDE] hover:text-white hover:-translate-y-1 transition-all duration-200'
            >
              <BsGithub />
            </Link>
            <Link
              href='https://www.facebook.com/smarifuli43/'
              target='_blank'
              className='flex justify-center items-center border rounded-sm border-gray-400 p-2 hover:bg-[#5C2EDE] hover:border-[#5C2EDE] hover:text-white hover:-translate-y-1 transition-all duration-200'
            >
              <BsFacebook />
            </Link>
            <Link
              href='https://www.linkedin.com/in/smarifuli43/'
              target='_blank'
              className='flex justify-center items-center border rounded-sm border-gray-400 p-2 hover:bg-[#5C2EDE] hover:border-[#5C2EDE] hover:text-white hover:-translate-y-1 transition-all duration-200'
            >
              <BsLinkedin />
            </Link>
            <Link
              href='https://www.instagram.com/smarifuli43/'
              target='_blank'
              className='flex justify-center items-center border rounded-sm border-gray-400 p-2 hover:bg-[#5C2EDE] hover:border-[#5C2EDE] hover:text-white hover:-translate-y-1 transition-all duration-200 '
            >
              <BsInstagram />
            </Link>

            <Link
              href='https://twitter.com/smarifuli43'
              target='_blank'
              className='flex justify-center items-center border rounded-sm border-gray-400 p-2 hover:bg-[#5C2EDE] hover:border-[#5C2EDE] hover:text-white hover:-translate-y-1 transition-all duration-200'
            >
              <BsTwitter />
            </Link>
          </div>
          <Link
            href='/'
            className='cursor-pointer relative inline-flex items-center justify-center overflow-hidden  font-medium  rounded-md group px-4 py-2 text-white bg-slate-700 lg:text-lg z-10 mt-12 shadow'
          >
            <span className='absolute w-0 h-0 transition-all duration-500 ease-out bg-[#5C2EDE] rounded-md group-hover:w-56 group-hover:h-56'></span>
            <span className='absolute inset-0 w-full h-full -mt-1 rounded-md opacity-30 bg-gradient-to-b from-transparent via-transparent to-gray-700'></span>
            <span className='relative'>Learn More</span>
            <FiExternalLink className='ml-3 relative' />
          </Link>
        </div>
        <div className='md:order-2 md:justify-self-end'>
          <Image
            src={ariful}
            className='w-full rounded-md max-w-[400px] mx-auto block min-h-[400px] max-h-[600px]'
          ></Image>
        </div>
      </div>
    </div>
  );
};

export default About;
