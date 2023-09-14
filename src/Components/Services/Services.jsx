import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Slider } from './Slider';
import { motion } from "framer-motion"
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
// Import Swiper styles
import 'swiper/css';
import './Services.css'
export const Services = () => {
    return (
        <>
            <div className="container-fluid p-5 services" id="Services">
                <motion.h1 className="text-center" variants={fadeInAnimationVariants} initial="initial" whileInView="animate" viewport={{
                    once: true
                }}>What We Provide</motion.h1>
                <Slider />
            </div>
        </>
    )
}
