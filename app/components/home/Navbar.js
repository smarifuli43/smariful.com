'use client';
import Image from 'next/image';
import logo from '../../../public/images/ariful logo.png';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { FaHome } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='top-0 z-30 shadow-2xl md:sticky backdrop-blur-md bg-slate-900 py-1'>
      <nav className='max-w-[1200px] mx-auto '>
        <div className='mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='flex items-center justify-between h-16'>
            <div className='flex items-center w-screen justify-between'>
              <div className=''>
                <Link href='/' className='flex-shrink-0 '>
                  <Image
                    src={logo}
                    className='h-32 w-36 md:h-[160px] md:w-[180px] sm:-ml-2 md:-ml-3'
                    alt='Logo'
                  />
                </Link>
              </div>
              <div className='hidden md:block bg-white/20 backdrop-blur-md border border-gray-500 rounded-md px-2'>
                <div className='flex'>
                  <Link
                    href='/'
                    className='mx-1 px-3 py-2 rounded-md text-base font-normal text-white hover:bg-slate-600 my-1 flex '
                  >
                    <FaHome className='text-white text-xl mr-2' />
                    Home
                  </Link>
                  <Link
                    href='/portfolio'
                    className='mx-1 px-3 py-2 rounded-md text-base font-normal text-white hover:bg-slate-600 my-1'
                  >
                    Portfolio
                  </Link>
                  <Link
                    href='/resume'
                    className='mx-1 px-3 py-2 rounded-md text-base font-normal text-white hover:bg-slate-600 my-1'
                  >
                    Resume
                  </Link>

                  <Link
                    href='/contact'
                    className='mx-1 px-3 py-2 rounded-md text-base font-normal text-white hover:bg-slate-600 my-1'
                  >
                    Contact
                  </Link>
                  <Link
                    href='/blog'
                    className='mx-1 px-3 py-2 rounded-md text-base font-normal text-white hover:bg-slate-600 my-1'
                  >
                    Blog
                  </Link>
                </div>
              </div>
            </div>
            <div className='-mr-2 flex md:hidden'>
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
                      stroke-linecap='round'
                      stroke-linejoin='round'
                      stroke-width='2'
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
                      stroke-linecap='round'
                      stroke-linejoin='round'
                      stroke-width='2'
                      d='M6 18L18 6M6 6l12 12'
                    ></path>
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        <div
          className={`
          ${isOpen ? 'block' : 'hidden'}   
          ${!isOpen ? 'h-0' : 'h-[250px] border-t border-gray-600'}
            backdrop-blur-md bg-slate-900 md:hidden `}
        >
          <div className='w-screen pt-2 pb-3 absolute z-30'>
            <Link
              href='/'
              className=' block w-full pl-4 py-2 rounded-md text-base font-normal text-white hover:bg-gray-700   transition duration-150 ease-in-out'
            >
              {/* <FaHome className='text-white text-xl mr-2' /> */}
              Home
            </Link>

            <Link
              href='/portfolio'
              className='mt-1 block pl-4 py-2 rounded-md text-base font-normal text-white hover:bg-gray-700   transition duration-150 ease-in-out'
            >
              Portfolio
            </Link>
            <Link
              href='/resume'
              className='mt-1 block pl-4 py-2 rounded-md text-base font-normal text-white hover:bg-gray-700   transition duration-150 ease-in-out'
            >
              Resume
            </Link>

            <Link
              href='/contact'
              className='mt-1 block pl-4 py-2 rounded-md text-base font-normal text-white hover:bg-gray-700  transition duration-150 ease-in-out'
            >
              Contact
            </Link>
            <Link
              href='/blog'
              className='mt-1 block pl-4 py-2 rounded-md text-base font-normal text-white hover:bg-gray-700   transition duration-150 ease-in-out'
            >
              Blog
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
