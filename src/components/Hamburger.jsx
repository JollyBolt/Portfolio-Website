import React, { useState } from 'react'

const Hamburger = ({toggle,setToggle}) => {
  return (
    <div
     onClick={()=>setToggle(!toggle)}
     className=' cursor-pointer  overflow-hidden'>
        <div className={`w-[40px] h-[40px]  rounded-md py-2 px-1 overflow-hidden ${toggle?'flex flex-col justify-center':'flex flex-col justify-between'}`}>
            <div className={`bg-white self-end w-1/2 h-1 rounded-sm transition-all ease-in-out ${toggle? 'absolute hidden':''}`}></div>
            <div className={`bg-white w-full h-1 rounded-sm transition-all ease-in-out  ${toggle? 'rotate-45 translate-y-[50%] top-[50%]':''} `}></div>
            <div className={`bg-white w-full h-1 rounded-sm transition-all ease-in-out  ${toggle? ' rotate-[135deg] -translate-y-[50%]':''} `}></div>

        </div>
    </div>
  )
}

export default Hamburger