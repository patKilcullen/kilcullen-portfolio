import React from 'react'
import { Link } from "react-router-dom"

const NavBar = () => {
  return (

<div className="navbar">
<h1>Patrick Kilcullen</h1>
        <div className='toggleButton'>
            <button></button>
            <div>
                <div >
                    
                 <Link className='links' to="/" > Home</Link>
              <Link className='links' to="/projects">Projects</Link>
              <Link className='links' to="/experience">Experience</Link> 
                </div>
            </div>
        </div>
      </div>
  )
}

export default NavBar