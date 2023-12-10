
import { useState } from 'react'
import './App.css'
import { About, Contact, Experience, Hero, Navbar, StarsCanvas, Tech, Projects } from './components'
import Sidebar from './components/Sidebar'


function App() {
  const [active,setActive] = useState('home')
  return (
    <>
      <div className='relative z-0 bg-primary flex'>
        <Navbar active={active} setActive={setActive}/>
      <Sidebar active={active} />
      <div className='sm:ml-[24px] w-full'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Hero setActive={setActive}/>
        </div>
        <About setActive={setActive}/>
        <Tech/>
        <Experience setActive={setActive}/>
        <Projects setActive={setActive}/>
        <div className='relative'>
          <Contact setActive={setActive}/>
          <StarsCanvas/>
        </div>
        </div>
      </div>
    </>
  )
}

export default App
