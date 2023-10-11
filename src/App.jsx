import { useState } from 'react'
import Header from './components/Header'
import About from './components/About'
import Services from './components/Services'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Hero from './components/Hero'
const App = () => {
  const [darkMode,setDarkMode] = useState(true);
  const toggleDarkMode = () => {
    setDarkMode(preDarkMode => !preDarkMode);
  }
  return (
    <section className={` w-full h-full ${darkMode ? 'dark' : 'light'} `}>
     <Header toggleDarkMode={toggleDarkMode}/>
     <Hero/>
     <About/>
     <Services/>
     <Portfolio/>
     <Contact/>
     <Footer/>
    </section>
  )
}

export default App