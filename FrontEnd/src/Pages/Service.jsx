import React from 'react'
import '../CSS/Services.css'

const Service = () => {
  return (
    <div className='service' id='service'>
      <h1>Services</h1>
        <p className='tagline-title'>What I can do for You</p>
        <p className='tagline'>Here are the Services that I offer to provide you with exceptional quality and dedication.</p>

<div className='services-div'>

              <div className="design">

                <h2>Web Development</h2>
                
                <p>I can develop responsive and dynamic web apps using the MERN Stack, ensuring speed, scalability, and seamless user experiences.</p>

              </div>

              <div className="design">

                <h2>Creative Design</h2>
                
                <p>I design intuitive and engaging interfaces that enhance user experience while aligning with business objectives..</p>

              </div>

          <div className="design">
            <h2>Responsive Design</h2>
            <p>Building responsive layouts that adapt seamlessly across devices, ensuring a consistent and optimized user experience.</p>
          </div>


        </div>


    </div>
  )
}

export default Service
