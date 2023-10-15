import { useState } from 'react'
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
    },
  ]

  return (
    <section className={` w-full h-full ${darkMode ? 'dark' : 'light'} `}>
    App 
    <span className=' text-green-500'>Bruno </span>
    </section>
  )
}

export default App