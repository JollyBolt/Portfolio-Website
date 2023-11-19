import {motion} from 'framer-motion'
import { styles } from '../style'
import {ComputersCanvas} from './canvas/index'
import { Typewriter } from 'react-simple-typewriter'

const Hero = () => {
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
          <div>
            <h1 className={`${styles.heroHeadText}`}>Hi, I'm <span className='text-violet-450'>Ishan.</span></h1>
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
            // delaySpeed={1000}
          />
            </p>
          </div>
      </div>
      <div className='mt-2 h-[300px]  xl:h-[500px]'>
      <ComputersCanvas/>
      </div>
      {/* <ComputersCanvas/> */}
      {/* <div
      className='hidden absolute xs:bottom-10 bottom-32 w-full xl:flex justify-center items-center'>
        <a href="#about">
          <div className='w-[35px] h-[64px] rounded-3xl flex justify-center p-2 border-4 border-secondary items-start'>
            <motion.dev
              animate={{
                y:[0,24,0]
              }}
              transition={{
                duration:1.5,
                repeat:Infinity,
                repeatType:'loop'
              }}
              className="w-3 h-3 rounded-full bg-secondary"
            />
          </div>
        </a>
      </div> */}
    </section>
  )
}

export default Hero