import React, {useEffect, useState } from 'react'
import { Link, useLocation } from "react-router-dom"
import './style/navbar.css'
 import ReorderIcon from '@material-ui/icons/Reorder'

const NavBar = () => {
const [smallNav, setSmallNav] = useState(false)
const location = useLocation()
useEffect(()=>{
    setSmallNav(false)
}, [location])
console.log("SMALL VAV: ", smallNav)
  return (


    <div className="navbar" id={smallNav ? "open" : "close"}>
    <div className="toggleButton">
      <button
        onClick={() => {
          setSmallNav(() => !smallNav);
        }}
      >
        <ReorderIcon />
      </button>
    </div>
    <div>
    <div className="links">
      <Link to="/"> Home </Link>
      <Link to="/projects"> Projects </Link>
      {/* <Link to="/experience"> Experience </Link>
      <Link > Resume </Link> */}
      
    </div>
    <hr className="divider" />
    </div>
    
  </div>
  

  )
}

export default NavBar