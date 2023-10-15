/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { FaMoon , FaSun} from  'react-icons/fa';
const DarkMode = ({toggleDarkMode}) => {
  const [clicked, setClicked]= useState(false);
  const handleClick = () => {
    toggleDarkMode();
    setClicked(!clicked);
  }
  return (
    <button onClick={handleClick} className=' cursor-pointer flex font-bold text-xl gap-2 group duration-500'>
      {clicked ? <FaSun className=' text-2xl '/> : <FaMoon className=' text-2xl '/> }
      <span className=' hidden group-hover:block '>Dark mode</span>
    </button>
  )
}

export default DarkMode