import React, { useEffect, useState } from 'react'
import {styles} from "../style"
import {navIcons,navLinks} from "../constants/index.js"
import { logoNoBg } from '../assets'
// import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'
import Hamburger from './Hamburger'

const Navbar = ({active,setActive}) => {
  const [toggle,setToggle] = useState(false)

  useEffect(() => {
    document.body.style.overflow = toggle ? "hidden" : "unset";
  }, [toggle]);
  const [scrolled,setScrolled] = useState(false)

  const changeBG = () =>{
    if(window.scrollY>=50)
    setScrolled(true)
    else setScrolled(false)
  }
  window.addEventListener('scroll',changeBG)

  return (
    <nav
    className={`${styles.paddingX} sm:ml-[24px] w-full py-5 flex items-center fixed top-0 z-20 bg-primary ${scrolled?'':'bg-opacity-0'} transition-colors`}
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
        
        <div className='hidden sm:flex gap-6 items-center'>
        <ul
        className='list-none hidden sm:flex flex-row gap-6'
        >
          {
            navIcons.map((icon)=>(
              <li 
              key={icon.id}
              className={` hover:text-white text-[18px] font-medium cursor-pointer transition-all`}
              >
                <a href={icon.link} target='_blank'><img src={icon.icon} className='w-[30px]' alt={icon.id} /></a>
              </li>
            ))
          }
        </ul>
        <a href='https://drive.google.com/file/d/15lB-SM3ZVwLZs_FPtE1NsDek8kG-owdc/view?usp=sharing' target='_blank' className='green-pink-gradient rounded-md p-[1px] overflow-hidden'>
          <div  className='bg-black-200 rounded-md px-3 p-[6px]'>My Resume</div>
        </a>
        </div>
 
        <div 
        className='sm:hidden flex flex-1 justify-end items-center'>
          <Hamburger toggle={toggle} setToggle={setToggle}/>
        </div>

        <div onClick={()=>setToggle(!toggle)} className={`absolute w-full left-0  top-0 overflow-scroll overscroll-contain ${toggle?'top-20 h-[calc(100vh-5rem)] ':'-top-72 opacity-0'}`}>
        <div
        className={` sm:hidden p-6 bg-black-100 w-full left-0 absolute duration-300  transition-all min-w-[140px] z-10 rounded-b-2xl flex flex-col justify-center items-center gap-5`}>
          <ul
        className='list-none w-full flex flex-col gap-4 justify-center items-center'
        >
          {
            navLinks.map((link)=>(
              <li 
              key={link.id}
              className={`${active === link.id?"text-purple-500":"text-white"} uppercase font-poppins text-[16px] font-medium cursor-pointer transition-all`}
              onClick={()=> {
                setToggle(!toggle)
                setActive(link.id)
              }}
              >
                <HashLink to={`#${link.id}`}>
                  {link.title}
                </HashLink>
              </li>
            ))
          }
        </ul>
        <ul
        className='list-none flex  flex-row gap-6'
        >
          {
            navIcons.map((icon)=>(
              <li 
              key={icon.id}
              className={` hover:text-white text-[18px] font-medium cursor-pointer transition-all`}
              >
                <a href={icon.link} target='_blank'><img src={icon.icon} className='w-[30px]' alt={icon.id} /></a>
              </li>
            ))
          }
        </ul>
        <a href='https://drive.google.com/file/d/15lB-SM3ZVwLZs_FPtE1NsDek8kG-owdc/view?usp=sharing' target='_blank'  className='green-pink-gradient rounded-md p-[1px]'>
          <div className='bg-black-200 rounded-md px-3 p-[6px]'>My Resume</div>
        </a>

        </div>
      </div>
      </div>
    </nav>
  )
}

export default Navbar