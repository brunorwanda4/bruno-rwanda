//icons
import { FaHome, FaMoon, FaWater } from 'react-icons/fa'
import {BsSunFill,BsMoonFill, BsPersonFill, BsImage, BsPhone,} from 'react-icons/bs'
import Hero from './Hero'
import { useEffect, useState } from 'react'
//header
const Header = ({toggleDarkMode}) => {
 
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
    <header className={` fixed  ${hideNavbar ? '' : 'top-[90%]'} justify-center duration-500 flex z-50 gap-4 px-2 py-1 items-center  rounded-xl m-2 text-white bg-cool`}>
      {/* navbar */}
      <div className=' blur-md'></div>
     <nav className=' flex '>
      {/* list of links */}
      <ul className=' flex gap-2'>
        {/* home */}
        <li>
          <a href={<Hero/>} className=' flex font-bold text-xl  hover:text-green-600 duration-300 dark:hover:text-green-400'>
            <FaHome className=' text-2xl '/>
            <span className=''>Home</span>
          </a>
        </li>
        {/* about */}
        <li>
          <a href={<Hero/>} className=' flex font-bold text-xl  hover:text-green-600 duration-300 dark:hover:text-green-400'>
            <BsPersonFill className=' text-2xl '/>
            <span className=''>About</span>
          </a>
        </li>
        <li>
          <a href={<Hero/>} className=' flex font-bold text-xl  hover:text-green-600 duration-300 dark:hover:text-green-400'>
            <FaWater className=' text-2xl '/>
            <span className=''>Services</span>
          </a>
        </li>
        <li>
          <a href={<Hero/>} className=' flex font-bold text-xl  hover:text-green-600 duration-300 dark:hover:text-green-400'>
            <BsImage className=' text-2xl '/>
            <span className=''>Portfolio</span>
          </a>
        </li>
        <li>
          <a href={<Hero/>} className=' flex font-bold text-xl  hover:text-green-600 dark:hover:text-green-400 duration-300'>
            <BsPhone className=' text-2xl '/>
            <span className=''>Contact</span>
          </a>
        </li>
      </ul>
     </nav>
     <button onClick={toggleDarkMode} className=' flex font-bold text-xl '>
      <FaMoon className=' text-2xl'/>
      <span>Dark Mode</span>
     </button>
    </header>
  )
}

export default Header