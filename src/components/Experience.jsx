import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import { motion } from 'framer-motion'
import 'react-vertical-timeline-component/style.min.css'
import { styles } from '../style'
import SectionWrapper from '../hoc/SectionWrapper'
import { experiences } from '../constants'
import { textVariant } from '../utils/motion'
import { education } from '../constants'
import { useInView } from 'react-intersection-observer'
import { useEffect } from "react"

const ExperienceCard = ({experience}) => (

  <VerticalTimelineElement
    contentStyle={{background:'#1d1846',color:'#fff'}}
    contentArrowStyle={{borderRight:'7px solid #1d1846'}}
    date={experience.date}
    iconStyle={{background:experience.iconBg}}
    icon = {
      <a target='_blank' href={experience.link}>
      <div className='flex justify-center items-center w-full h-full'>
        <img src={experience.icon} alt={experience.company_name} className='object-contain w-[100%] h-[100%]'/>
      </div>
      </a>
    }
  >
    <div>
      <h3 className='text-white font-bold text-[24px]'>{experience.title}</h3>
      <p className='text-secondary text-[16px] font-semibold ' style={{margin:0}}>{experience.company_name}</p>
    </div>
    <ul className='mt-5 list-disc ml-5 space-y-2'>
      {experience.points.map((point,index)=>(
        <li
        key={index}>
          {point}
        </li>
      ))}
    </ul>
  </VerticalTimelineElement>
)
const EducationCard = ({education}) => (
  <VerticalTimelineElement
    contentStyle={{background:'#1d1846',color:'#fff'}}
    contentArrowStyle={{borderRight:'7px solid #1d1846'}}
    date={education.date}
    iconStyle={{background:education.iconBg}}
    icon = {
      <a target='_blank' href={education.link}>
      <div className='flex justify-center items-center w-full h-full ove  border-3 border-red-500'>
        <img src={education.icon} alt={education.title} className='object-contain w-[70%]'/>
      </div>
      </a>
    }
  >
    <div>
      <h3 className='text-white font-bold text-[24px]'>{education.program}</h3>
      <p className='text-secondary text-[16px] font-semibold ' style={{margin:0}}>{education.title}</p>
      {education.program!=="Class 10" && <h4 className='text-white text-[17px]  mt-4 font-semibold ' >Course: {education.course}</h4>}
      {education.program!=="B Tech" && <h4 className='text-white text-[17px]  mt-1 font-semibold ' >Percentage: {education.CGPA}</h4>}
      {education.program==="B Tech" && <h4 className='text-white text-[17px]  mt-1 font-semibold ' >CGPA: {education.CGPA}</h4>}
    </div>
    
  </VerticalTimelineElement>
)

const Experience = ({setActive}) => {
  const { ref, inView } = useInView({
    /* Optional options */
    // threshold: 0,
  });

  useEffect(()=>{
    inView? setActive('work'):''
    // console.log(inView)
  },[inView])
  return (
    <>
      <motion.div 
        variants = {textVariant()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        >
          <p className={`uppercase font-[Poppins] text-white text-[18px] sm:text-[26px] mt-4 tracking-wider`}>
          My Journey so far
          </p>
          <h2 ref={ref} className={styles.sectionHeadText}>
          Work Experience.
          </h2>
        </motion.div>
        <div className='my-20 flex flex-col'>
          <VerticalTimeline>
            {
              experiences.map((experience,index)=> (
                <ExperienceCard key={index} experience={experience}/>
              ))
            }
          </VerticalTimeline>
        </div>
        <motion.div 
        variants = {textVariant()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        >
          <h2 className={styles.sectionHeadText}>
          Education.
          </h2>
        </motion.div>
        <div className='my-20 flex flex-col'>
          <VerticalTimeline>
            {
              education.map((education,index)=> (
                <EducationCard key={index} education={education}/>
              ))
            }
          </VerticalTimeline>
        </div>
      </>
  )
}

export default SectionWrapper(Experience,"work") 