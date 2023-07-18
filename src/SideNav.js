import React from 'react'
import { Email, GitHub, LinkedIn } from '@material-ui/icons'
import "./style/sideBar.css"

const SideNav = () => {
  return (
    // <div id="sideBar">
    <div className='sideBar'>

    <div className='socialMedia'>
        <p>Connect with me:</p>
        <hr className="divider"/>
       <a href='https://github.com/patKilcullen?tab=repositories' target="_blank" rel="noopener noreferrer" style={{color: "red"}}> <GitHub style={{color: "#d8a2a2"}} className="link-icon"/></a>
      <a href='https://www.linkedin.com/in/patrick-kilcullen-264ba61a4/' target="_blank" rel="noopener noreferrer"> <LinkedIn style={{color: "#d8a2a2"}} /></a> 
      <a href='mailto:patrickjkilcullen@gmail.com'  >
          <Email style={{color: "#d8a2a2"}} />
        </a>
    </div>
  

    </div>
  )
}

export default SideNav