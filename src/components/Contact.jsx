import {useState,useRef} from 'react'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'
import { styles } from '../style'
import { EarthCanvas } from './canvas'
import SectionWrapper from '../hoc/SectionWrapper'
import { slideIn } from '../utils/motion'
// import { useInView } from 'react-intersection-observer';
// import { useEffect } from "react"

//DOMS9Xf_MOMWGlMKx
//service_jf24y8c
// template_lu5ozlb


const Contact = ({setActive}) => {
  // const { ref, inView } = useInView({
  //   /* Optional options */
  //   // threshold: 0,
  // });

  // useEffect(()=>{
  //   inView? setActive('contact'):''
  //   // console.log(inView)
  // },[inView])
  const formRef = useRef()
  const [form,setForm] = useState({
    name:'',
    email:'',
    message:''
  }) 
  const [loading,setLoading] = useState(false)

  const handleChange=(e)=>{
    setForm({...form,[e.target.name]:e.target.value})
  }
  const handleSubmit=async (e)=>{
    e.preventDefault()
    setLoading(true)

    //This is sent to the one who fills the form
    await emailjs.send(
      'service_jf24y8c',
      'template_lu5ozlb',
      {
        from_name:'Ishan',
        to_name: form.name,
        from_email:'senishan21@gmail.com',
        to_email:form.email,
        message:form.message,
      },
      'DOMS9Xf_MOMWGlMKx'
    )
    
    await emailjs.send(
        'service_jf24y8c',
        'template_eyq0equ',
        {
          from_name:form.name,
          to_name: 'Ishan',
          from_email:'senishan21@gmail.com',
          to_email:'senishan21@gmail.com',
          message:form.message,
        },
        'DOMS9Xf_MOMWGlMKx'
    )
    //This is sent to me
    setLoading(false)
    setForm({
      name:'',
      email:'',
      message:''
    })

  }
  return (
    <div  className=' xl:flex-row flex-col-reverse flex gap-10 mb-14 z-0'>
      <motion.div
      variants={slideIn('left','tween',0.2,1)}
      className='xl:w-[50%] mx-auto w-full md:w-[80%] lg:w-[70%] bg-black-100 p-8 z-0 rounded-2xl'>
      <p className={styles.sectionSubText}>Get in touch</p>
      <h3 className={styles.sectionHeadText}>Contact.</h3>
      <form 
      ref={formRef}
      onSubmit={handleSubmit}
      className='mt-6 z-0 flex flex-col gap-8'>
      
        <div className='flex-col flex'>
          <span className='text-white font-medium mb-4'>Your Name</span>
          <input type="text" name="name" id="name" value={form.name} onChange={handleChange} placeholder="What's your name?"
            className='py-4 px-6 text-white rounded-lg outline-none border-none font-medium placeholder:text-secondary bg-tertiary'
          />
        </div>
        <div className='flex-col flex'>
          <span className='text-white font-medium mb-4'>Your Email</span>
          <input type="email" name="email" id="email" value={form.email} onChange={handleChange}  placeholder="What's your email?"
            className='py-4 px-6 text-white rounded-lg outline-none border-none font-medium placeholder:text-secondary bg-tertiary'
          />
        </div>
        <div className='flex-col flex'>
          <span className='text-white font-medium mb-4'>Your Message</span>
          <textarea rows={5} type="text" name="message" id="message" onChange={handleChange}  value={form.message} placeholder="What's your message?"
            className='py-4 px-6 text-white rounded-lg outline-none border-none font-medium placeholder:text-secondary bg-tertiary'
          />
        </div>
        <button onClick={handleSubmit}
        className='bg-tertiary py-3 px-8 outline-none w-fit text-white shadow-md shadow-primary font-bold rounded-xl'> 
          {loading?'Sending':'Send'}

        </button>
      </form>
      </motion.div>
      <motion.div
      variants={slideIn('right','tween',0.2,1)}
      className='xl:w-[50%] xl:h-auto md:h-[550px] h-[350px]'>
        <EarthCanvas/>
      </motion.div>
    </div>
  )
}

export default SectionWrapper(Contact,"contact")