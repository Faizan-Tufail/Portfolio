import React from 'react'
import projects from '../Assests/projects.js'
import Project_Details from './Project_Details.jsx'
import '../CSS/Portfolio.css'


const Portfolio = () => {
  return (
    <div className='portfolio' id='portfolio'>
      <h1>Portfolio</h1>

      <div className="projects">
        {projects.map((project) =>(
          <Project_Details key={project.id} project={project}/>
        )
        
        )}
      </div>

      {/* <p className=' mt-10 text-4xl'>Lemme show you my Amazing work.</p>
      <p className='mt-5 text-gray-400 text-xl'>These are the projects that I have created for self learning as well as user's benefit.</p> */}
    </div>
  )
}

export default Portfolio
