'use client';
import Image from 'next/image';
import logo from '../../../public/images/ariful logo.png';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FaHome, FaAddressCard } from 'react-icons/fa';
import { SiTask, SiMinutemailer } from 'react-icons/si';
import { ImBlog } from 'react-icons/im';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathName = usePathname();

  return (
    <div className='top-0 z-30 shadow-2xl sticky backdrop-blur-2xl   bg-slate-900/90  py-1 '>
      <nav className=' max-w-[1200px] mx-auto '>
        <div className='flex items-center justify-between h-12 md:h-16 px-4 md:px-6 lg:px-8 xl:px-0'>
          <div className='flex items-center w-screen justify-between'>
            <div className=''>
              <Link href='/' className='flex-shrink-0 '>
                <Image
                  src={logo}
                  className='h-24 w-32 -mt-6 md:-mt-8 lg:-mt-10 md:h-[120px] md:w-[140px] lg:h-[140px] lg:w-[170px] sm:-ml-2 md:-ml-3'
                  alt='Logo'
                />
              </Link>
            </div>
            <div className='hidden md:block bg-white/20 backdrop-blur-md border border-gray-500 rounded-md px-2'>
              <div className='flex'>
                <Link
                  href='/'
                  className={`mx-1 px-3 py-2 rounded-md text-base font-normal text-white hover:bg-slate-600 my-1 flex items-center
                  ${pathName === '/' ? 'active' : ''}
                  `}
                >
                  <FaHome className='text-white text-xl mr-2' />
                  Home
                </Link>
                <Link
                  href='/portfolio'
                  className={`mx-1 px-3 py-2 rounded-md text-base font-normal text-white hover:bg-slate-600 my-1 flex items-center
                  ${pathName === '/portfolio' ? 'active' : ''}
                  `}
                >
                  <SiTask className='text-white text-xl mr-2' />
                  Portfolio
                </Link>
                <Link
                  href='/resume'
                  className={`mx-1 px-3 py-2 rounded-md text-base font-normal text-white hover:bg-slate-600 my-1 flex items-center
                  ${pathName === '/resume' ? 'active' : ''}
                  `}
                >
                  <FaAddressCard className='text-white text-xl mr-2' />
                  Resume
                </Link>

                <Link
                  href='/contact'
                  className={`mx-1 px-3 py-2 rounded-md text-base font-normal text-white hover:bg-slate-600 my-1 flex items-center
                  ${pathName === '/contact' ? 'active' : ''}
                  `}
                >
                  <SiMinutemailer className='text-white text-xl mr-2' />
                  Contact
                </Link>
                <Link
                  href='/blog'
                  className={`mx-1 px-3 py-2 rounded-md text-base font-normal text-white hover:bg-slate-600 my-1 flex items-center
                  ${pathName === '/blog' ? 'active' : ''}
                  `}
                >
                  <ImBlog className='text-white text-xl mr-2' />
                  Blog
                </Link>
              </div>
            </div>
          </div>
          <div className=' flex md:hidden'>
            <button
              type='button'
              onClick={() => setIsOpen(!isOpen)}
              className='inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white transition duration-150 ease-in-out'
              aria-label='Main menu'
            >
              {!isOpen ? (
                <svg
                  className='block h-6 w-6'
                  stroke='currentColor'
                  fill='none'
                  viewBox='0 0 24 24'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M4 6h16M4 12h16M4 18h16'
                  ></path>
                </svg>
              ) : (
                <svg
                  className={` h-6 w-6 ${isOpen ? 'block' : 'hidden'}`}
                  stroke='currentColor'
                  fill='none'
                  viewBox='0 0 24 24'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M6 18L18 6M6 6l12 12'
                  ></path>
                </svg>
              )}
            </button>
          </div>
        </div>

        <div
          className={`
           md:hidden 

          ${isOpen ? 'block h-full border-t border-gray-600' : 'hidden h-0 '}   
           pt-6 `}
        >
          <div className=''>
            <Link
              href='/'
              className={`flex items-center w-full pl-4 py-2 rounded-md text-base font-normal  text-slate-300 hover:text-white hover:bg-[#5C2EDE]    transition duration-150 ease-in-out`}
            >
              <FaHome className='text-white text-xl mr-3' />
              Home
            </Link>

            <Link
              href='/portfolio'
              className={`mt-1 flex items-center pl-4 py-2 rounded-md text-base font-normal text-slate-300 hover:text-white hover:bg-[#5C2EDE]   transition duration-150 ease-in-out
               ${pathName === '/portfolio' ? 'active' : ''}

              `}
            >
              <SiTask className='text-white text-xl mr-3' />
              Portfolio
            </Link>
            <Link
              href='/resume'
              className={`mt-1 flex items-center pl-4 py-2 rounded-md text-base font-normal text-slate-300 hover:text-white hover:bg-[#5C2EDE]  transition duration-150 ease-in-out
               ${pathName === '/resume' ? 'active' : ''}
              `}
            >
              <FaAddressCard className='text-white text-xl mr-3' />
              Resume
            </Link>

            <Link
              href='/contact'
              className={`mt-1 flex items-center pl-4 py-2 rounded-md text-base font-normal text-slate-300 hover:text-white hover:bg-[#5C2EDE] transition duration-150 ease-in-out
               ${pathName === '/contact' ? 'active' : ''}
              `}
            >
              <SiMinutemailer className='text-white text-xl mr-3' />
              Contact
            </Link>
            <Link
              href='/blog'
              className={`mt-1 flex items-center pl-4 py-2 rounded-md text-base font-normal text-slate-300 hover:text-white hover:bg-[#5C2EDE]  transition duration-150 ease-in-out
               ${pathName === '/blog' ? 'active' : ''}
              `}
            >
              <ImBlog className='text-white text-xl mr-3' />
              Blog
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
