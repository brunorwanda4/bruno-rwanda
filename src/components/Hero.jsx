/* eslint-disable react/prop-types */
import React from 'react'
import { Link } from 'react-scroll'
import { TypeAnimation } from 'react-type-animation'

const Hero = ({person}) => {
  return (
    <section className=' h-screen w-full relative' id='hero'>
      <div className=' flex flex-col gap-2'>
        <h1 className=' flex max-md:flex-col  gap-1 font-bold text-3xl font-mono name  cursor-pointer'>
          <span className=' text-green-600 dark:to-green-500 '>{person[0].Fname}</span>
          <span>{person[0].Sname}</span>
        </h1>
        <h2 className=' text-2xl gap-2 flex'>
          <span>I am a</span>
          <TypeAnimation
          sequence={['Developer',
          'Designer',
          'Photographer',
          ]}
          speed={50}
          className='text-green-500 cursor-pointer'
          wrapper='span'
          repeat={Infinity}
          />
        </h2>
        <p className=' flex mt-10'>
        Looking to create a dynamic and user-friendly website that engages <br /> 
        your audience? Our experienced web developer is here to turn your <br />
        vision into a stunning online reality.
        </p>
        <div className=' text-xl flex gap-10  '>
          <Link> Contact </Link>
          <Link> Service </Link>
          
        </div>
      </div>
    </section>
  )
}

export default Hero