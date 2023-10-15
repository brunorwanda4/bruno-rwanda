import { useState } from 'react'
import HappyImg from './assets/img/happy.png'
import Navbar from './components/Navbar';
import About from './components/About';
import Services from './components/Services';
import Work from './Work';
import Contact from './components/Contact';
import Hero from './components/Hero';
import Footer from './components/Footer';
import TestParticles from './components/TestParticles'
const App = () => {
  const [darkMode,setDarkMode] = useState(true);
  const toggleDarkMode = () => {
    setDarkMode(preDarkMode => !preDarkMode);
  }

  // person 

  const person =[
    // names
    {
      Fname : ' Bruno',
      Sname : 'Rwanda',
      age : new Date ("October 5 2006"),
      img : {HappyImg},
    },
  ];

  return (
    <section className={` w-full h-full ${darkMode ? 'dark' : 'light'} bg-cover  p-2`}>
       <Navbar toggleDarkMode={toggleDarkMode} />
      {/* pages */}
      <Hero person={person}/>
      <TestParticles toggleDarkMode={toggleDarkMode}/>
      <About/>
      <Services/>
      <Work/>
      <Contact/>
      <Footer/>
    </section>
  )
}

export default App