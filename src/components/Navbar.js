import React from 'react'
import { Link } from "react-router-dom"

const NavBar = () => {
  return (

<div className="navbar">
        {/* <h1 id="siteName">
          Patrick Kilcuellen 
          
        </h1>
        
        <div id="navbar-right">
          <nav>
            <div>
              
              
              <Link to="/" >Home</Link>
              <Link to="/projects">Projects</Link>
              <Link to="/experience">Experience</Link>
              <Link >Resume</Link>
              <Link >Contact</Link>
            </div>
          </nav>
        </div> */}
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