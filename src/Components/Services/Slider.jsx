import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
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
import 'swiper/css/pagination';
import { Navigation, Pagination, Scrollbar, A11y, Mousewheel } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/mousewheel';
import academicwriting from '../../assets/Academic Writing Editing.jpg'
import contentwriting from '../../assets/pexels-rfstudio-3059747.jpg'
import Thesis from '../../assets/ThesisDissertation.jpg'
import Python from '../../assets/PythonJava.png'
import SPSS from '../../assets/SPSS.jpg'
import Mobdev from '../../assets/Mobile App Development.png'
import LiveDash from '../../assets/Live  Dashboard designing.png'
import CV from '../../assets/Professional CV.jpg'
import HR from '../../assets/Human Resource Management.jpeg';
import pm from '../../assets/project-management.png'
import business from '../../assets/Business Management.jpeg'
import bio from '../../assets/Biology.jpeg'
import Chemistry from '../../assets/Chemistry.jpeg';
import Geology from '../../assets/Geology.jpg';
import hist from '../../assets/history.jpg';
import sci from '../../assets/Science.jpeg';
import pharm from '../../assets/pharmacology.jpeg'
import Maths from '../../assets/Maths.jpg';
import stat from '../../assets/statistics.jpg'
import nurse from '../../assets/nursing.jpeg';
import engg from '../../assets/engg.jpeg'
// import './styles.css';
// import { Pagination } from 'swiper/modules';
import { Card } from './Card';
const data = 
    [
        {
            title: "HR Management",
            img: HR
        },
        {
            title: "Project Management",
            img: pm
        },
        {
            title: "Business Management",
            img: business
        },
        {
            title: "Biology",
            img: bio
        },
        {
            title: "Chemistry",
            img: Chemistry
        },
        {
            title: "Pharmacology",
            img: pharm
        },
        {
            title: "Science",
            img: sci
        },
        {
            title: "Maths",
            img: Maths
        },
        {
            title: "Geology",
            img: Geology
        },
        {
            title: "History",
            img: hist
        },
        {
            title: "Statistics",
            img: stat
        },
        {
            title: "Engineering",
            img: engg
        },
        {
            title: "Nursing",
            img: nurse
        },
        {
            title: "Academic Writing",
            img: academicwriting
        },
        {
            title: "Content Writing",
            img: contentwriting
        },
        {
            title: "Thesis/Dissertation",
            img: Thesis
        },
        {
            title: "SPSS",
            img: SPSS
        },
        {
            title: "Python/Java",
            img: Python
        },
        {
            title: "Mobile App Development",
            img: Mobdev
        },
        {
            title: "Live Dashboard Design",
            img: LiveDash
        },
        {
            title: "Professional CV",
            img: CV
        }
    ]

export const Slider = () => {
    return (
        <motion.div className='container my-5' variants={fadeInAnimationVariants} initial="initial" whileInView="animate" viewport={{
            once: true
        }}>
            <Swiper
                slidesPerView={1}
                spaceBetween={10}
                mousewheel={true}
                breakpoints={{
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 3,
                        spaceBetween: 40,
                    },
                    1024: {
                        slidesPerView: 4,
                        spaceBetween: 60,
                    },
                }}
                modules={[Mousewheel]}
                className="mySwiper"
            >
                {
                    data.map((el) => {
                        // console.log(el.title);
                        return (
                            <SwiperSlide key={el.title}>
                                <Card title={el.title} img={el.img} />
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>
        </motion.div>
    )
}
