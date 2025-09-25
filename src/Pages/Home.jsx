import React from 'react'
import fazii from '../images/Faz.png'
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import About from './About'
import Portfolio from './Portfolio';
import Service from './Service';
import Contact from './Contact';
import Blog from './Blog';
import '../CSS/Home.css'

const Home = () => {
  return (
    <>
       <div className='Home' id='home'>

       {/* <img src="https://dizme.vercel.app/img/slider/2.jpg " alt=""/> */}


                <div className='myself'>
                    <div className='self-info'>

                      <p>Hello I'm</p>
                      <h2>Faizan Tufail</h2>
                      <p>A Creative FrontEnd Developer</p>
                      <p><span>I'm creative FrontEnd Developer, and I'm very passionate and dedicated to my work.</span></p>
                      
                    <div className='social-links'>
                      
                      <button><a href="#about">About Me</a></button>

                      <ul>
                        <li><a href="https://www.facebook.com/mian.fzn.9"  target='_blank'><FaFacebook /></a></li>
                        <li><a href="https://www.instagram.com/call.me.fazii/"  target='_blank'> <FaInstagram /></a></li>
                        <li><a href="https://www.linkedin.com/in/faizan-tufail-685316363/"  target='_blank'> <FaLinkedin /></a></li>

                      </ul>
                      </div>

                    </div>
                      
                      <img src={fazii} alt="" />
                </div>


        </div>
    </>
    
  )
}

export default Home
