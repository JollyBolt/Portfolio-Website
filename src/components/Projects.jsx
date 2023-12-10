import React from 'react'
import SectionWrapper from '../hoc/SectionWrapper'
import { useInView } from 'react-intersection-observer';
import { useEffect } from "react"

const Projects = ({setActive}) => {
  const { ref, inView } = useInView({});

  useEffect(()=>{
    inView? setActive('about'):''
  },[inView])
  return (
    <div>Projects</div>
  )
}

export default SectionWrapper(Projects,"projects") 