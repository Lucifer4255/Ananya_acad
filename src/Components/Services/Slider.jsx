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
                        <img src="src\assets\Academic Writing Editing.jpg" class="card-img-top" alt="..." style={{height:'18rem'}}/>
                            <div class="card-body">
                                <h5 class="card-title">Academic Writing</h5>
                                {/* <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                                {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
                            </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div class="card" style={{width: '19rem'}}>
                        <img src="src\assets\pexels-rfstudio-3059747.jpg" class="card-img-top" alt="..." style={{height:'18rem'}}/>
                            <div class="card-body">
                                <h5 class="card-title">Content Writing</h5>
                                {/* <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                                {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
                            </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div class="card" style={{width: '19rem'}}>
                        <img src="src\assets\ThesisDissertation.jpg" class="card-img-top" alt="..." style={{height:'18rem'}}/>
                            <div class="card-body">
                                <h5 class="card-title">Thesis/Dissertation</h5>
                                {/* <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                                {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
                            </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div class="card" style={{width: '19rem'}}>
                        <img src="src\assets\SPSS.jpg" class="card-img-top" alt="..." style={{height:'18rem'}}/>
                            <div class="card-body">
                                <h5 class="card-title">SPSS</h5>
                                {/* <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                                {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
                            </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div class="card" style={{width: '19rem'}}>
                        <img src="src\assets\PythonJava.png" class="card-img-top" alt="..." style={{height:'18rem'}}/>
                            <div class="card-body">
                                <h5 class="card-title">Python/Java</h5>
                                {/* <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                                {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
                            </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div class="card" style={{width: '19rem'}}>
                        <img src="src\assets\Mobile App Development.png" class="card-img-top" alt="..." style={{height:'18rem'}}/>
                            <div class="card-body">
                                <h5 class="card-title">Mobile App Development</h5>
                                {/* <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                                {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
                            </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div class="card" style={{width: '19rem'}}>
                        <img src="src\assets\Live  Dashboard designing.png" class="card-img-top" alt="..." style={{height:'18rem'}}/>
                            <div class="card-body">
                                <h5 class="card-title">Live Dashboard Design</h5>
                                {/* <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                                {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
                            </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div class="card" style={{width: '19rem'}}>
                        <img src="src\assets\Professional CV.jpg" class="card-img-top" alt="..." style={{height:'18rem'}}/>
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
