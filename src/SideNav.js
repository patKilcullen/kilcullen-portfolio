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
       <a href='https://github.com/patKilcullen?tab=repositories' target="_blank" rel="noopener noreferrer"> <GitHub /></a>
      <a href='https://www.linkedin.com/in/patrick-kilcullen-264ba61a4/' target="_blank" rel="noopener noreferrer"> <LinkedIn/></a> 
      <a href='mailto:patrickjkilcullen@gmail.com'  >
          <Email />
        </a>
    </div>
  

    </div>
  )
}

export default SideNav