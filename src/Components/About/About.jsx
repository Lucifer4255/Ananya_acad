import React from 'react'
import './About.css'
import { motion } from "framer-motion"
import about from '../../assets/office bhanu.jpg'
const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.5
    }
  }
}
export const About = () => {
  return (
    <div className="container-fluid d-flex my-5" id="About">
      <div className="container my-5">
        <div className="row">
          <motion.div className="col-md-6 p-4" variants={fadeInAnimationVariants} initial="initial" whileInView="animate" viewport={{
            once: true
          }}>
            <h4 variants={fadeInAnimationVariants} initial="initial" whileInView="animate" viewport={{
              once: true
            }}>About us</h4>
            <h2>Founder's Desk</h2>
            <p className='about'>
              Welcome to Ananya Academics, where academic excellence meets dedication. I'm Bhanu Shah, the founder, and for the past decade, we've been unwavering in our mission to provide top-notch academic assistance and assignments to overseas students. With a dedicated team of over 30 staff members and subject matter experts across various fields, we're committed to nurturing talents and helping students shape their careers. Join us on this journey towards success
            </p>
          </motion.div>
          <motion.div className="col-md-5 p-4" variants={fadeInAnimationVariants} initial="initial" whileInView="animate" viewport={{
            once: true
          }}>
            <img src={about} className='About_img' alt="About..." />
          </motion.div>
        </div>
        <motion.div className="row" variants={fadeInAnimationVariants} initial="initial" whileInView="animate" viewport={{
          once: true
        }}>
          <div className="col-md-6">
            <h2>Call Us at</h2>
            <span className='h3'><i className="bi bi-telephone-fill"></i> <b>+91-9646016111</b></span>
          </div>
          <div className="col-md-6">
            <h2>WhatsApp</h2>
            <span className='h3'><a href='https://wa.me/447424965855'><i class="bi bi-whatsapp"></i></a> <b>+44 7424965855</b></span>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
