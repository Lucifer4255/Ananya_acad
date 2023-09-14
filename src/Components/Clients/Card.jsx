import React from 'react'
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
export const Card = ({ title, description }) => {
    return (
        <motion.div className="card mb-3" style={{maxWidth: '650px',height:'80vh'}}  variants={fadeInAnimationVariants} initial="initial" whileInView="animate" viewport={{
            once: true
        }}>
            <div className="row g-0">
                <div className="col-md-2">
                    <img src="src\assets\user-icon.jpg" className="img-fluid rounded-start p-2" alt="..."/>
                </div>
                <div className="col-md-10">
                    <div className="card-body">
                        <h3 className="card-title">{title}</h3>
                        <h5>Verified Customer</h5>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-half"></i>
                        <p className="card-text"><small className="text-body-secondary">{description}</small></p>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}
