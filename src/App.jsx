
import { useState } from 'react'
import './App.css'
import { About, Contact, Experience, Hero, Navbar, StarsCanvas, Tech, Projects } from './components'
import Sidebar from './components/Sidebar'


function App() {
  const [active,setActive] = useState('home')
  return (
    <>
      <div className=' z-0 bg-primary flex'>
        <Navbar active={active} setActive={setActive}/>
      <Sidebar active={active} />
      <div className='sm:ml-[24px] w-full overflow-x-hidden'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Hero setActive={setActive}/>
        </div>
        <About setActive={setActive}/>
        <Experience setActive={setActive}/>
        <Projects setActive={setActive}/>
        <Contact setActive={setActive}/>
        </div>
      </div>
    </>
  )
}

export default App
