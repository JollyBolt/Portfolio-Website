import React from 'react'
import { sideBarLinks } from "../constants/index.js"
import { HashLink } from 'react-router-hash-link'


const Sidebar = ({active,setActive}) => {
    return (
        <div className='hidden sm:flex  h-[calc(100vh-5rem)] fixed top-20 bg-black left-0 text-white pb-20 '>
            <ul className=' flex justify-between flex-col'>
                {sideBarLinks.map((link, index) => (
                    <li
                        key={index}
                        className={`uppercase font-semibold ${active===link.id?'text-purple-500':''}`}
                        style={{ writingMode: 'vertical-lr' }}>

                        <HashLink to={`#${link.id}`}>
                            {link.title}
                        </HashLink>

                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Sidebar