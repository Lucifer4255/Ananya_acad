import React from 'react'
import './Team.css'
import spacer_2 from '../../assets/wave-haikei_2.svg'
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
import bhanu from '../../assets/office bhanu.jpg'
import bhanu_1 from '../../assets/office bhanu 1.jpg'
import jayti from '../../assets/img---1.jpeg'
import arshiya from '../../assets/Team 4.jpg'
export const Team = () => {
    return (
        <>
            <div className="container-fluid" style={{
                backgroundImage: `url(${spacer_2})`,
                /* margin-top: 100px; */
                height: '900px',
                width: '100%',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                backgroundSize: 'cover'
            }}>
            </div>
            <div className="container-fluid " style={{ backgroundColor: '#EC8886' }}>

                <div className="container d-flex flex-column justify-content-center">
                    <motion.div className="p-5 text-center" variants={fadeInAnimationVariants} initial="initial" whileInView="animate" viewport={{
                        once: true
                    }}>
                        <h1>Our Team</h1>
                    </motion.div>
                    <div className="container">
                        <div className="container my-5">
                            <div className="row align-items-center justify-content-center">
                                <motion.div className="col-lg-3 col-md-4 col-sm-6 p-3" variants={fadeInAnimationVariants} initial="initial" whileInView="animate" viewport={{
                                    once: true
                                }}>
                                    <div className="card" style={{ width: '18rem', height: "400px" }}>
                                        <img src={bhanu} className="card-img-top team-card" alt="..." height="285px" />
                                        <div className="card-body">
                                            <p className="card-title text-center">Bhanu</p>
                                            <p className="card-text text-center h6">CEO</p>
                                        </div>
                                    </div>
                                </motion.div>
                                <motion.div className="col-lg-3 col-md-4 col-sm-6 p-3" variants={fadeInAnimationVariants} initial="initial" whileInView="animate" viewport={{
                                    once: true
                                }}>
                                    <div className="card" style={{ width: '18rem', height: "400px" }}>
                                        <img src={bhanu_1} className="card-img-top team-card" alt="..." height="285px" />
                                        <div className="card-body">
                                            <p className="card-title text-center">Subhash
                                            </p>
                                            <p className="card-text text-center h6">Lead Program Manager</p>
                                        </div>
                                    </div>
                                </motion.div>
                                <motion.div className="col-lg-3 col-md-4 col-sm-6 p-3" variants={fadeInAnimationVariants} initial="initial" whileInView="animate" viewport={{
                                    once: true
                                }}>
                                    <div className="card" style={{ width: '18rem', height: "400px" }}>
                                        <img src={jayti} className="card-img-top team-card" alt="..." height="285px" />
                                        <div className="card-body">
                                            <p className="card-title text-center p-0">Jayti</p>
                                            <p className="card-text text-center h6 p-0">Student Engagement Manager</p>
                                        </div>
                                    </div>
                                </motion.div>
                                <motion.div className="col-lg-3 col-md-4 col-sm-6 p-3" variants={fadeInAnimationVariants} initial="initial" whileInView="animate" viewport={{
                                    once: true
                                }}>
                                    <div className="card" style={{ width: '18rem', height: "400px" }}>
                                        <img src={arshiya} className="card-img-top team-card" alt="..." />
                                        <div className="card-body">
                                            <p className="card-title text-center ">Arshiya</p>
                                            <p className="card-text text-center h6 p-0">QA Manager</p>
                                        </div>
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}
