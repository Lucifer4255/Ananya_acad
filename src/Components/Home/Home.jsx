import React from 'react'
import './Home.css'
// import React from 'react'
import bg from '../../assets/bgg.png'
import { Typewriter } from 'react-simple-typewriter'

export const Home = () => {
  return (
    <div className='container-fluid' id='Home' style={{ background: `url(${bg}) no-repeat transparent`,
    backgroundSize: 'cover'}}>
      <div className="d-flex flex-column mb-3 justify-content-center align-items-center vh-100">
        <div className="row align-items-center">
          <div className="col-12 text-center">
            <h1 className='text-dark'>Ananya Academics</h1>
            <div className='fw-bold d-inline fs-3 typewrite'>
              <Typewriter words={['Unlock the power of exceptional content with our expert writing services']}
                loop={1}
                cursor
                cursorStyle='_'
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
                // onLoopDone={handleDone}  
                // onType={handleType}
                />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
