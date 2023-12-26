import { Tilt } from "react-tilt"
import { motion } from "framer-motion"
import { styles } from "../style"
import {fadeIn,textVariant} from '../utils/motion'
import Leetcode from "./Leetcode"
import Codeforces from "./Codeforces"
import {leetcode,codeforces} from "../assets"
import SectionWrapper from "../hoc/SectionWrapper"
import { useInView } from 'react-intersection-observer';
import { useEffect } from "react"
import Tech from "./Tech"



const About = ({setActive}) => {
  const { ref, inView } = useInView({});

  useEffect(()=>{
    inView? setActive('about'):''
  },[inView])


  return (
    <>
      <motion.div 
      variants = {textVariant(0.1)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      >
      <p className={styles.sectionHeadText}>
      Introduction
      </p>
      <p className={`uppercase font-[Poppins] text-white text-[18px] sm:text-[26px] mt-4 tracking-wider`}>
      A little about me..
      </p>
      </motion.div>
      <motion.p 
      
      variants={fadeIn("","",0.1,1)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="mt-1 text-[17px] text-secondary max-w-3xl leading-[30px]">
      As a dedicated and versatile full-stack developer, I bring comprehensive expertise in both front-end and back-end technologies. <br className="lg:hidden"/> My proficiency encompasses the seamless integration of <b>React</b> and <b>Next.js</b> for dynamic user interfaces, as well as robust back-end development.<br  className="lg:hidden"/> <span ref={ref}> </span> With a strong foundation in data structures and algorithms, I am adept at creating scalable and efficient digital solutions. My commitment to optimizing user experiences and leveraging cutting-edge technologies is complemented by a strategic approach to problem-solving. 
      </motion.p>
      <p className={`uppercase font-[Poppins] text-white text-[26px] mt-14 tracking-wider`}>
      My coding profiles
      </p>
      <div className="flex flex-col gap-7 lg:flex-row mx-auto md:justify-evenly">
      <a target="_blank" href="https://leetcode.com/Jolly_Bolt/" className="mx-auto w-[95%] sm:w-[85%] lg:w-[45%] lg:h-[284px]">
      <Tilt className=" mt-5">
        <motion.div
        variants={fadeIn("right","spring",0.5,0.2 )}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        // animate="show"
        className=" green-pink-gradient p-[1px] rounded-[20px] shadow-card "
        >
        <div
        options={{
          max:45,
          scale:1,
          speed:450
        }}
        className="bg-tertiary rounded-[20px] py-5 pl-5 px-2 sm:px-5 ">
        <div className="flex items-center">
          <img 
          src={leetcode} 
          alt="logo"
          className="w-10 mx-3" />
          <p className="ml-2 text-lg sm:text-2xl ">LeetCode: <span className="font-extrabold tracking-wider
          ">Jolly_Bolt</span></p>
        </div>
        <Leetcode/>
        </div>
        </motion.div>
      </Tilt>
      </a>
      <a target="_blank" href="https://codeforces.com/profile/ishan_sen" className="mx-auto w-[95%] sm:w-[85%] lg:w-[45%] lg:h-[284px]">
      <Tilt className=" mt-5">
        <motion.div
        variants={fadeIn("right","spring",1,0.2 )}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className=" green-pink-gradient p-[1px] rounded-[20px] shadow-card"
        >
        <div
        options={{
          max:45,
          scale:1,
          speed:450
        }}
        className="bg-tertiary rounded-[20px] p-5 pb-0 lg:py-7 lg:h-[284px]">
        <div className="flex items-center">
          <img 
          src={codeforces} 
          alt="logo"
          className="w-10 mx-3" />
          <p className="ml-2 text-lg sm:text-2xl ">Codeforces: <span className="font-extrabold tracking-wider
          ">ishan_sen</span></p>
        </div>
        
        <Codeforces/>
        </div>

        </motion.div>
      </Tilt>
      </a>
      </div>
      <Tech/>
    </>
  )
}

export default SectionWrapper(About,"about")