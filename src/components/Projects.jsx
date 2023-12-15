import React, { useEffect, useState } from 'react'
import SectionWrapper from '../hoc/SectionWrapper'
import { Tilt } from 'react-tilt'
import { motion } from 'framer-motion'
import { styles } from '../style'
import { github } from '../assets'
import { projects } from '../constants'
import { fadeIn, textVariant } from '../utils/motion'

const ProjectModal = ({open,setOpen,currProject}) => {

  const { name, images, description, tech, github_link, live_link, features } = currProject
  
  // console.log(props)
  const [image, setImage] = useState(images[0])
  return (
    <div onClick={() => setOpen(!open)} className={`fixed inset-0 z-50 transition-all  flex ${open ? "bg-black/60" : "invisible"} `}>
      <div onClick={e => e.stopPropagation()} className={`h-[90%] z-50 w-screen rounded-t-[40px] bg-black-200 border-t-2 transition-all items-end self-end ${open ? 'scale-100' : 'scale-0'} p-3 sm:px-20 sm:py-5 lg:px-10 overflow-scroll`}>
        <div onClick={() => setOpen(!open)} className='absolute right-7 top-7 flex flex-col cursor-pointer'>
          <div className='h-1 w-[30px] bg-white rounded-full rotate-45'/>
          <div className='h-1 w-[30px] bg-white rounded-full -rotate-45  -translate-y-[4px]'/>

        </div>
        <p className='font-bold text-[25px] mt-7 sm:text-[40px] text-center'>{name}</p>
        <hr className='mb-2 w-[90%] mx-auto'/>
        <div className='flex justify-center mt-4 gap-5'>
                <a target='_blank' href={live_link} className='green-pink-gradient rounded-md p-[1px]'>
                  <div className='bg-black-200 rounded-md px-3 p-[6px] text-center'>Live Demo</div>
                </a>

                <a target='_blank' href={github_link} className='green-pink-gradient rounded-md p-[1px]'>
                  <div className='bg-black-200 rounded-md px-3 p-[6px] text-center'>Source Code</div>
                </a>
              </div>
        <div className='flex flex-col lg:flex-row'>
          <div className='flex flex-col xl:w-1/2 p-3 sm:mt-5'>
            <img src={image} alt=""
              className='rounded-2xl object-scale-down h-[150px] sm:h-[310px] '
            />
            <div className='flex justify-between mt-5'>
              {
                images.map((im, index) => (
                  <img
                    key={index}
                    src={im}
                    className='w-[23%] h-[80px] object-cover'
                    onMouseEnter={() => setImage(im)}
                    onMouseLeave={() => setImage(images[0])}
                  />
                ))
              }
            </div>
          </div>
          <div className='lg:w-[50%] mt-5 p-3'>
            <div>
              <p className='uppercase font-[Poppins] text-white text-[18px] sm:text-[26px] tracking-wider'>Description</p>
              <p>{description}</p>
              
            </div>
            <div className='mt-5'>
              <p className='uppercase font-[Poppins] text-white text-[18px] sm:text-[26px]  tracking-wider'>Technologies Used</p>
              <div className='flex flex-wrap gap-4'>
                {tech.map((tech, index) => (
                  <div key={index} className='green-pink-gradient w-[130px] rounded-md p-[1px]'>
                    <div className='bg-black-200 rounded-md px-3 p-[6px] text-center'>{tech.name}</div>
                  </div>
                ))}
              </div>

            </div>
            <div className='mt-5'>
              <p className='uppercase font-[Poppins] text-white text-[18px] sm:text-[26px] tracking-wider'>Features</p>
              <ul className='list-disc ml-4'>
                {features.map((feature, index) => (
                  <li key={index}>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>

      </div>
    </div>

  )
}

const ProjectCard = ({open,setOpen,project,setCurrProject}) => {
  const { index, name, images } = project
  return (
    <>
    <motion.div
      variants={fadeIn("up", "spring", index * 0.5)}
      className=''
    >
      <Tilt
        options={{
          max: 25,
          scale: 1,
          speed: 450
        }}

        className="bg-tertiary p-5 rounded-2xl sm:w-[500px] w-full cursor-pointer"
      >
        <div onClick={() => {
            setCurrProject({...project})
            setOpen(!open)
          }}>
          <div className='w-full h-[230px]'>
            <img
              src={images[0]}
              alt={name}
              className='w-full h-full object-cover rounded-2xl'
            />
          </div>
          <div className='mt-5'>
            <h3 className='text-white text-[24px] font-bold'>{name}</h3>
          </div>
        </div>
      </Tilt>
    </motion.div>
    </>
  )
}

const Projects = ({ setActive }) => {
  const [open, setOpen] = useState(false)
  const [currProject,setCurrProject] = useState({...projects[0]})
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "unset";
  }, [open]);
  return (
    <>
      <motion.div
        variants={textVariant()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <p className={`uppercase font-[Poppins] text-white text-[18px] sm:text-[26px] mt-4 tracking-wider`}>
          My works
        </p>
        <h2 className={styles.sectionHeadText}>
          Projects.
        </h2>
      </motion.div>
      <div className='w-full flex'>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
        >
          Following projects showcases my skills and experience through real-world examples of my work. Each project is briefly described with links to code repositories and live demos in it. It reflects my ability to solve complex problems, work with different technologies, and manage projects effectively. Click on any project for more details.
        </motion.p>
      </div>
      <div className='flex flex-wrap gap-16 mt-4 justify-center'>
        {projects.map((project, index) => (
          <div key={index}>
            <ProjectCard
              open={open}
              setOpen={setOpen}
              project = {project}
              setCurrProject={setCurrProject}
            />
          </div>
        ))}
      </div>
      {
        currProject &&
        <ProjectModal open={open} setOpen={setOpen} currProject={currProject} />
      }
    </>
  )
}

export default SectionWrapper(Projects, "projects") 