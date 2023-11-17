import React, { useEffect, useState } from 'react'
import {styles} from "../style"
import {navLinks} from "../constants/index.js"
import { logo,logoWhite, logoNoBg,menu,close } from '../assets'
// import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'

const Navbar = () => {
  const [active,setActive] = useState("")
  const [toggle,setToggle] = useState(false)
  const [scrolled,setScrolled] = useState(false)

  useEffect(()=>{
    const handleScroll = () =>{
      const scrollTop = window.scrollY;
      if(scrollTop>100){
        setScrolled()
      }
    }
  },[])

  return (
    <nav
    className={`${styles.paddingX} w-full py-5 flex items-center fixed top-0 z-20 bg-primary bg-opacity-70`}
    id='nax'
    >
      <div
      className='w-full flex justify-between items-center max-w-7xl mx-auto text-white'
      >
        <HashLink
        to='/'
        className='flex items-center gap-2'
        onClick={()=>{
          setActive("")
          window.scrollTo(0,0)
        }}>
          <img 
          src={logoNoBg} 
          alt="logo"
          className='w-9 h-9 object-contain' />
          <p className='text-[18px] font-bold cursor-pointer'>
            Ishan Sen.
          </p>
        </HashLink>
        <ul
        className='list-none hidden sm:flex flex-row gap-10'
        >
          {
            navLinks.map((link)=>(
              <li 
              key={link.id}
              className={`${active === link.title?"text-white":"text-secondary"} hover:text-white text-[18px] font-medium cursor-pointer transition-all`}
              onClick={()=> setActive(link.title)}
              >
                <HashLink to={`#${link.id}`}>
                  {link.title}
                </HashLink>
              </li>
            ))
          }
        </ul>
        <div 
        className='sm:hidden flex flex-1 justify-end items-center'>
          <img 
          src={toggle?close:menu} 
          onClick={()=>setToggle(prev=>!prev)}
          alt="menu"
          className='w-[28px] h-[28px] object-contain cursor-pointer'  />
        </div>
        <div
        className={`${toggle?'flex':'hidden'} p-6 black-gradient absolute top-20 right-0 my-2 min-w-[140px] z-10 rounded-xl`}>
          <ul
        className='list-none flex flex-col gap-4 justify-end items-start'
        >
          {
            navLinks.map((link)=>(
              <li 
              key={link.id}
              className={`${active === link.title?"text-white":"text-secondary"} font-poppins text-[16px] font-medium cursor-pointer transition-all`}
              onClick={()=> {
                setToggle(!toggle)
                setActive(link.title)
              }}
              >
                <HashLink to={`#${link.id}`}>
                  {link.title}
                </HashLink>
              </li>
            ))
          }
        </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar