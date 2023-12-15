import React from 'react'
import { Tilt } from "react-tilt"

import { motion } from 'framer-motion'
import { styles } from '../style'
import SectionWrapper from '../hoc/SectionWrapper'
import { technologies } from '../constants'
import { textVariant,fadeIn,staggerContainer } from '../utils/motion'


const Tech = () => {
  return (
    <>
      <motion.div
        variants={textVariant()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className='mt-14 sm:mt-32 z-50'
      >
        <h2 className={`uppercase font-[Poppins] text-white text-[18px] sm:text-[26px] mt-4 tracking-wider z-20`}>
          What I Know.
        </h2>
      </motion.div>
      <div className='mt-5 flex flex-wrap gap-5 justify-center'>

        {technologies.map((tech, index) => (
          <Tilt key={index}>
            <motion.div
              variants={fadeIn("up", "", 0.1*index, 0.6)}
              // variants={fadeIn("up", "spring", 0.2*index, 0.2)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className=" green-pink-gradient p-[1px] rounded-[20px] shadow-card"
            >
              <div className='bg-[#0f093e] rounded-[20px] flex flex-col justify-start items-center p-3 w-[150px]'>
                <img src={tech.icon} alt="" className='w-[40px] h-[40px]'
                />
                <p className='uppercase'>{tech.name}</p>
              </div>

            </motion.div>
          </Tilt>
        ))}
      </div>
    </>
  )
}

// export default SectionWrapper(Tech, 'tech')
export default Tech