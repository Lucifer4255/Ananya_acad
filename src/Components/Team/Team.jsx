import React from 'react'
import './Team.css'

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
export const Team = () => {
    return (
        <>
            <div className="container-fluid Team">
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
                                <motion.div className="col-md-3 p-3" variants={fadeInAnimationVariants} initial="initial" whileInView="animate" viewport={{
                                    once: true
                                }}>
                                    <div className="card" style={{ width: '18rem', height: "400px" }}>
                                        <img src="src/assets/office bhanu.jpg" className="card-img-top team-card" alt="..." height="285px" />
                                        <div className="card-body">
                                            <p className="card-text text-center">Bhanu
                                            </p>
                                        </div>
                                    </div>
                                </motion.div>
                                <motion.div className="col-md-3 p-3" variants={fadeInAnimationVariants} initial="initial" whileInView="animate" viewport={{
                                    once: true
                                }}>
                                    <div className="card" style={{ width: '18rem', height: "400px" }}>
                                        <img src="src/assets/office bhanu 1.jpg" className="card-img-top team-card" alt="..." height="285px" />
                                        <div className="card-body">
                                            <p className="card-text text-center">Subhash
                                            </p>
                                        </div>
                                    </div>
                                </motion.div>
                                <motion.div className="col-md-3 p-3" variants={fadeInAnimationVariants} initial="initial" whileInView="animate" viewport={{
                                    once: true
                                }}>
                                    <div className="card" style={{ width: '18rem', height: "400px" }}>
                                        <img src="src\assets\img---1.jpeg" className="card-img-top team-card" alt="..." height="285px" />
                                        <div className="card-body">
                                            <p className="card-text text-center">Jayti
                                            </p>
                                        </div>
                                    </div>
                                </motion.div>
                                <motion.div className="col-md-3 p-3" variants={fadeInAnimationVariants} initial="initial" whileInView="animate" viewport={{
                                    once: true
                                }}>
                                    <div className="card" style={{ width: '18rem', height: "400px" }}>
                                        <img src="src\assets\img--2.jpeg" className="card-img-top team-card" alt="..." />
                                        <div className="card-body">
                                            <p className="card-text text-center ">Debesh
                                            </p>
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
