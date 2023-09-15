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
import { Navigation, Pagination, Scrollbar, A11y,Mousewheel } from 'swiper/modules';
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
// import './styles.css';
// import { Pagination } from 'swiper/modules';

export const Slider = () => {
    return (
        <motion.div className='container my-5' variants={fadeInAnimationVariants} initial="initial" whileInView="animate" viewport={{
            once: true
        }}>
            <Swiper
                slidesPerView={1}
                spaceBetween={10}
                mousewheel={true}
                pagination={{
                    clickable: true,
                }}
                breakpoints={{
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 4,
                        spaceBetween: 40,
                    },
                    1024: {
                        slidesPerView: 4,
                        spaceBetween: 60,
                    },
                }}
                modules={[Pagination,Mousewheel]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div class="card" style={{width: '19rem'}}>
                        <img src={academicwriting} class="card-img-top" alt="..." style={{height:'18rem'}}/>
                            <div class="card-body">
                                <h5 class="card-title">Academic Writing</h5>
                                {/* <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                                {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
                            </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div class="card" style={{width: '19rem'}}>
                        <img src={contentwriting} class="card-img-top" alt="..." style={{height:'18rem'}}/>
                            <div class="card-body">
                                <h5 class="card-title">Content Writing</h5>
                                {/* <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                                {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
                            </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div class="card" style={{width: '19rem'}}>
                        <img src={Thesis} class="card-img-top" alt="..." style={{height:'18rem'}}/>
                            <div class="card-body">
                                <h5 class="card-title">Thesis/Dissertation</h5>
                                {/* <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                                {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
                            </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div class="card" style={{width: '19rem'}}>
                        <img src={SPSS} class="card-img-top" alt="..." style={{height:'18rem'}}/>
                            <div class="card-body">
                                <h5 class="card-title">SPSS</h5>
                                {/* <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                                {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
                            </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div class="card" style={{width: '19rem'}}>
                        <img src={Python} class="card-img-top" alt="..." style={{height:'18rem'}}/>
                            <div class="card-body">
                                <h5 class="card-title">Python/Java</h5>
                                {/* <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                                {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
                            </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div class="card" style={{width: '19rem'}}>
                        <img src={Mobdev} class="card-img-top" alt="..." style={{height:'18rem'}}/>
                            <div class="card-body">
                                <h5 class="card-title">Mobile App Development</h5>
                                {/* <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                                {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
                            </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div class="card" style={{width: '19rem'}}>
                        <img src={LiveDash} class="card-img-top" alt="..." style={{height:'18rem'}}/>
                            <div class="card-body">
                                <h5 class="card-title">Live Dashboard Design</h5>
                                {/* <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                                {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
                            </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div class="card" style={{width: '19rem'}}>
                        <img src={CV} class="card-img-top" alt="..." style={{height:'18rem'}}/>
                            <div class="card-body">
                                <h5 class="card-title">Professional CV</h5>
                                {/* <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                                {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
                            </div>
                    </div>
                </SwiperSlide>
                
            </Swiper>
        </motion.div>
    )
}
