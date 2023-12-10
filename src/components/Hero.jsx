import {motion} from 'framer-motion'
import { styles } from '../style'
import {ComputersCanvas} from './canvas/index'
import { Typewriter } from 'react-simple-typewriter'
import { useInView } from 'react-intersection-observer'
import { useEffect } from "react"

const Hero = ({setActive}) => {
  const { ref, inView } = useInView({
    /* Optional options */
    // threshold: 0,
  });

  useEffect(()=>{
    inView? setActive('home'):''
    // console.log(inView)
  },[inView])
  return (
    <section
    className='relative w-full xl:h-screen mx-auto'>
      <div
      className={`${styles.paddingX}  inset-0 pt-[100px] max-w-7xl mx-auto flex flex-row items-start gap-5 `}>
        <div
        className='flex flex-col justify-center items-center mt-5 relative'>
          <div
          className='w-5 h-5 rounded-full bg-violet-450'/>
          <div
            className='w-1 absolute h-40 sm:h-80 violet-gradient top-[20px]'
          />
          </div>
          <div >
            <h1 ref={ref} className={`${styles.heroHeadText}`}>Hi, I'm <span className='text-violet-450'>Ishan.</span></h1>
            <p 
            
            className={`${styles.heroSubText} mt-2 text-white-100`}>
              I do D
              <Typewriter
            words={['evelopment.', 'SA.']}
            loop={true}
            cursor
            cursorStyle='|'
            cursorColor='#915eff'
            typeSpeed={90}
            deleteSpeed={70}
            delaySpeed={1000}
          />
            </p>
          </div>
      </div>
      <div className='mt-2 h-[300px]  xl:h-[500px]'>
      <ComputersCanvas/>
      </div>
    </section>
  )
}

export default Hero