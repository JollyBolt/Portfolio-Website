import {motion} from 'framer-motion'
import { styles } from '../style'
import { staggerContainer } from '../utils/motion'

const SectionWrapper = (Component,idName) => function HOC({setActive}){
  return (
    <motion.section
    variants={staggerContainer()}
    initial="hidden"
    whileInView="show"
    viewport={{once:true,amount:0.25}}
    className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
    >
      <p className='w-full mb-[5rem]' id={idName}>&nbsp;</p>
      <Component setActive={setActive}/>
    </motion.section>
  )
}

export default SectionWrapper