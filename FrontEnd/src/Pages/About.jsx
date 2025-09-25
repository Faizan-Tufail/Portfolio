import React from 'react'
import fazii from '../images/Faz.png'

import "../CSS/About.css";

const About = () => {
  return (
    <div id='about'>
      <div className='about'>
          <img src={fazii} alt="" />

          <div className='about-info'>

                      <p>I'm Full Stack Developer</p>
                      <h2>I Can Develop Professional Responsive Websites As You Want.</h2>
                      <p className='detail'>Hello, I'm a Full Stack Developer with the experience of 6 months to design and develop the professional websites. I have learned the skills in MERN Stack to meet the demand of the client by developing the responsive layout for multiple devices.</p>

                     
                      <button><a href="#contact">Hire Me</a></button>


                    </div>
      </div>
    </div>
  )
}

export default About
