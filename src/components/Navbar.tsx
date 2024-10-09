'use client';

import Image from 'next/image';
import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { FaArrowRightLong } from 'react-icons/fa6';

import { cn } from '@/lib/utils';

import { BaseButton } from '@/components/Button';

const Navbar = () => {
  // State to manage the navbar's visibility
  const [nav, setNav] = useState(false);

  // Toggle function to handle the navbar's display
  const handleNav = () => {
    setNav(!nav);
  };

  // Array containing navigation items
  const navItems = [
    { id: '#home', text: 'Home' },
    { id: '#about', text: 'About Us' },
    { id: '#service', text: 'Service' },
    { id: '#contact', text: 'Contact' },
  ];

  return (
    <nav className='fixed top-0 w-screen z-50 flex justify-between items-center padding-page py-4'>
      <Image src='/images/logo.png' alt='Logo' width={150} height={50} />
      <ul className='hidden md:flex'>
        <div
          className='bg-primary/20 py-3 px-5 rounded-full backdrop-blur-sm'
          id='navbar-default'
        >
          <ul className='flex gap-6 text-white font-bold uppercase'>
            <li className='hover:text-primary'>
              <a href='#home'>Home</a>
            </li>
            <li className='hover:text-primary'>
              <a href='#about'>About Us</a>
            </li>
            <li className='hover:text-primary'>
              <a href='#service'>Service</a>
            </li>
            <li className='hover:text-primary'>
              <a href='#contact'>Contact</a>
            </li>
          </ul>
        </div>
      </ul>

      {/* Mobile Navigation Icon */}
      <BaseButton
        endIcon={<FaArrowRightLong className='text-white' />}
        className='font-semibold text-secondary md:flex hidden'
      >
        Get Started
      </BaseButton>
      <div
        onClick={handleNav}
        className='block md:hidden bg-primary p-1 rounded-sm'
      >
        <AiOutlineMenu size={20} className='text-secondary' />
      </div>

      {/* Mobile Navigation Menu */}
      <ul
        className={cn(
          'z-50 text-white bg-primary p-5 flex flex-col justify-between gap-4 h-full relative',
          nav
            ? 'fixed md:hidden left-0 top-0 w-full h-full ease-in-out duration-500 '
            : 'ease-in-out w-full duration-500 fixed top-0 bottom-0 left-[-100%]'
        )}
      >
        <Image
          src='/images/home-circle.png'
          alt='Hero'
          width={500}
          height={1000}
          className='absolute bottom-0 left-0 translate-x-[-50%] translate-y-[50%] opacity-20 overflow-hidden'
        />
        <div className='flex flex-col gap-4 h-full'>
          <div className='flex items-center justify-between'>
            <Image src='/images/logo.png' alt='Logo' width={150} height={50} />
            <AiOutlineClose size={20} onClick={handleNav} />
          </div>
          <p className='text-center text-secondary text-2xl font-bold'>
            Navigasi
          </p>
          <div className='space-y-4'>
            {/* Mobile Navigation Items */}
            {navItems.map((item) => (
              <li
                key={item.id}
                className='py-4 text-xl font-bold hover:text-white/70'
                onClick={handleNav}
              >
                <a href={item.id}>{item.text}</a>
              </li>
            ))}
          </div>
        </div>
        <p className='text-[#FFFFFF33] text-center justify-self-end font-extrabold'>
          Unleash the power of AI PR!
        </p>
      </ul>
    </nav>
  );
};

export default Navbar;
