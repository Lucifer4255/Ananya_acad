import React from 'react'
import './About.css'
import { motion } from "framer-motion"
import about from '../../assets/About.jpg'
const fadeInAnimationVariants ={
  initial:{
    opacity:0,
    y:100
  },
  animate:{
    opacity:1,
    y:0,
    transition:{
      delay:0.5
    }
  }
}
export const About = () => {
  return (
  <div className="container-fluid d-flex my-5" id="About">
    <div className="container my-5">
      <div className="row">
        <motion.div className="col-md-6 p-4" variants={fadeInAnimationVariants} initial="initial" whileInView="animate"viewport={{
            once:true
          }}>
          <h4 variants={fadeInAnimationVariants} initial="initial" whileInView="animate"viewport={{
            once:true
          }}>About us</h4>
          <h2>Ananya Academics</h2>
          <p className='about'>Ananya Academics: Your bespoke content partner. Our adept writers craft tailored solutions that resonate.
            With originality at our core, we deliver diverse content promptly. We collaborate closely, ensuring your
            voice shines. From articles to academic papers, experience impactful narratives that drive success. Join us
            in creating captivating content where words meet excellence.</p>
        </motion.div>
        <motion.div className="col-md-5 p-4" variants={fadeInAnimationVariants} initial="initial" whileInView="animate"viewport={{
            once:true
          }}>
          <img src={about} className='About_img' alt="About..."/>
        </motion.div>
      </div>
      <motion.div className="row" variants={fadeInAnimationVariants} initial="initial" whileInView="animate" viewport={{
            once:true
          }}>
        <div className="col-md-8">
          <h2>Call Us at</h2>
          <span className='h3'><i className="bi bi-telephone-fill"></i> <b>+91-9646016111</b></span> 
        </div>
      </motion.div>
    </div>
  </div>
  )
}
