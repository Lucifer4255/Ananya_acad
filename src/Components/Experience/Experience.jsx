import React from 'react'
import { motion, useMotionValue, useTransform, animate } from 'framer-motion';
import './Experience.css';
import { useEffect } from 'react';
import CountUp from 'react-countup';

export const Experience = () => {
    // const count = useMotionValue(0);
    // const rounded = useTransform(count, Math.round);
    // const rounded_1 = useTransform(count, Math.round);
    // const rounded_2 = useTransform(count, Math.round);

    // useEffect(() => {
    //     const animation = animate(count, 200, { duration: 5 });
    //     return animation.stop;
    // }, []);
    return (
        <div class="container-fluid d-flex" id="Experience">
            <div class="container my-5">
                <div class="row">
                    <div class="col-md-4 text-center">
                        <h3 id="count"><b><CountUp end={200} duration={10} enableScrollSpy={true} scrollSpyOnce={true}/></b></h3>
                        <p id="count"><b>Clients</b></p>
                    </div>
                    <div class="col-md-4 text-center">
                        <h3 id="count"><b><CountUp end={1000} duration={10} enableScrollSpy={true} scrollSpyOnce={true}/></b></h3>
                        <p id="count"><b>Projects</b></p>
                    </div>
                    <div class="col-md-4 text-center">
                        <h3 id="count"><b><CountUp end={10} duration={10} enableScrollSpy={true} scrollSpyOnce={true}/></b></h3>
                        <p id="count"><b>Years of Experience</b></p>
                    </div>
                </div>
            </div>
        </div>
    )
}
