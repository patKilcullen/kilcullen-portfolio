import React from 'react'
import {Link} from 'react-router-dom'
import { projects } from './projectInfo'

import '../style/projects.css'
import Button from '@mui/material/Button';

const Projects = () => {
  return (
    <div id="main" >
        <h1 className='pageTitle'>Projects</h1>
        <div id="mainContent">
        
            <div className='mainProjectContainer'>
                
        {projects.map((project,idx)=>{
            return (
                <div className='projectContainer' key={idx}>
                    <div className='name'>{project.name}</div>
                    <div className='description'>{project.description}</div>
                    <img className='projectPic' src={project.pic} alt="screenshot of project"/>
                    <div className='projectAbout'> {project.about}</div>
                    <div className='buttons'>
              <Link to={project.demo} target="_blank" rel="noopener noreferrer"> <Button className="button" variant="contained" sx={{color:'#81567a', backgroundColor: 'white', fontWeight: "bold", borderRadius: '20px', border: "2px solid black"}}>Demo</Button></Link> 
               <Link to={project.code} target="_blank" rel="noopener noreferrer"> <Button className="button" variant="contained" sx={{color:'#81567a', backgroundColor: 'white', fontWeight: "bold", borderRadius: '20px', border: "2px solid black"}}>Code</Button></Link>
               </div>
                </div>
            )
        })}

            </div>
            </div></div>
  )
}

export default Projects