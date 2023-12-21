import {motion} from 'framer-motion'
// import { styles } from '../style'
import { staggerContainer } from '../utils/motion'
import { useInView } from 'react-intersection-observer';
import { useEffect } from "react"

const SectionWrapper = (Component,idName) => function HOC({setActive}){
  const { ref, inView } = useInView({});

  useEffect(()=>{
    inView&&(idName!=='contact'&&idName!=="about")? setActive(idName):''
  },[inView])

  return (
    <motion.section
    // variants={staggerContainer()}
    // initial="hidden"
    // whileInView="show"
    // viewport={{once:true,amount:0.25}}
    className={`px-6 sm:px-16 py-0 sm:py-0 max-w-7xl mx-auto  z-0`}
    >
      <p ref={ref} className='w-full md:mb-[5rem]' id={idName}>&nbsp;</p>
      <Component setActive={setActive}/>
    </motion.section>
  )
}

export default SectionWrapper