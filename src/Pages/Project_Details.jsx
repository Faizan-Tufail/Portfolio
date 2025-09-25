import React from 'react'
import '../CSS/Project_Details.css'

const Project_Details = ({project}) => {
  return (
        <div className='project-details'>
            <img src={project.image} alt={project.title} />
            <h2>{project.title}</h2>
            <p>{project.Description}</p>
        </div>
  )
}

export default Project_Details
