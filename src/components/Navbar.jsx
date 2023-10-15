/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
// icons
import { BiUser } from 'react-icons/bi';
import { BsBriefcase, BsClipboardData } from 'react-icons/bs';
import { FaHome, FaPhoneAlt, FaSun, FaMoon } from 'react-icons/fa';
import { Link } from 'react-scroll';
import DarkMode from './nav/DarkMode';

const Navbar = ({ toggleDarkMode }) => {
  const [hideNavbar, setHideNavbar] = useState(false);

  useEffect(() => {
    let prevScrollPos = window.pageYOffset;
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      const scrollingDown = currentScrollPos > prevScrollPos;

      // If scrolling down, hide the navbar; if scrolling up, show it
      setHideNavbar(scrollingDown);
      prevScrollPos = currentScrollPos;
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`fixed z-50 px-2 py-1 flex gap-4 backdrop-blur-md rounded-md shadow-cool shadow-green-600 justify-center items-center left-[40%] max-md:left-[30%] ${hideNavbar ? 'top-4' : 'top-[90%]'}`}>
      <ul className='flex gap-4'>
        <li>
          <Link offset={-200} to='hero' activeClass='text-green-500' smooth={true} spy={true} className='nav-list group'>
            <FaHome className='text-2xl' />
            <span className='hidden group-hover:block'>Home</span>
          </Link>
        </li>
        <li>
          <Link to='about' activeClass='text-green-500' smooth={true} spy={true} className='nav-list group'>
            <BiUser className='text-2xl' />
            <span className='hidden group-hover:block'>About</span>
          </Link>
        </li>
        <li>
          <Link to='services' activeClass='text-green-500' smooth={true} spy={true} className='nav-list group'>
            <BsClipboardData className='text-2xl' />
            <span className='hidden group-hover:block'>Services</span>
          </Link>
        </li>
        <li>
          <Link to='work' activeClass='text-green-500' smooth={true} spy={true} className='nav-list group'>
            <BsBriefcase className='text-2xl' />
            <span className='hidden group-hover:block'>Work</span>
          </Link>
        </li>
        <li>
          <Link to='contact' activeClass='text-green-600' smooth={true} spy={true} className='nav-list group'>
            <FaPhoneAlt className='text-2xl' />
            <span className='hidden group-hover:block'>Contact</span>
          </Link>
        </li>
      </ul>
      <div className='hover:text-sky-600'>
        <DarkMode toggleDarkMode={toggleDarkMode} />
      </div>
    </nav>
  );
};

export default Navbar;
