import React from "react";
import '../style/home.css'
import { useNavigate } from "react-router-dom";
import Button from '@mui/material/Button';
// import nodeIcon from '../icons8-nodejs-48.png'
import javascriptIcon from "../icons8-javascript-48.png"
import reactIcon from "../logo192.png"
import reduxIcon from '../icons8-redux-an-open-source-javascript-library-for-managing-application-state-24.png'
import postgresIcon from '../icons8-postgresql-48.png'
import htmlIcon from"../icons8-html5-48.png"
import cssIcon from '../icons8-css-48.png'
import nodeSVG from '../node-js.svg'
import materialIcon from  '../icons8-material-ui-48.png'
import sequelizeIcon from '../sequelize.svg'
import expressIcon from '../icons8-express-js-64.png'

import profilePic from "../ProfilePic.PNG"

const Home = () => {
    const navigate = useNavigate()
  return (
    <div id="main">
      {/* <div id="mainContent"> */}
      <div className="mainContent">
     
        {/* <img id="profilePic" src={profilePic} />  */}
        <div className="mainContainer">
          <div className="about-and-pic">
        <img alt="Patrick Kilcullen" className="profilePic" src={profilePic} /> 
        <div className="scroll">
        <h1 className="homeAbout">
          Hi, I'm Patrick Kilcullen, a software developer with a passion for
          creating forward-thinking and efficient applications. I love learning about
          new technologies and discovering how they can be used to solve all kinds of
          problems. I have experience building apps with
          the PERN stack, but I'm always eager to learn more and explore new
          technologies. If you're looking for a dedicated software
          developer who's always excited to overcome challenges with innovative solutions, I'm your guy!
        </h1>
   
        </div>
        </div>
        </div>
        
        {/* <hr className="divider" /> */}
   <div className="tech">
        <h2 className="techIntro" >I've build applications using a variety of technologies, inclucing...<h3 style={{display: "flex", flexDirection: "row", flexWrap: "wrap", alignItems: "flex-end"}} >
          <div><img alt="language-icon" className="language-icon" src={javascriptIcon} style={{height: "100px"}}/>Javascript, </div>
        <div> <img alt="language-icon" className="node-icon" src={nodeSVG} style={{height: "100px"}}/>Node.js, </div>
        <div><img alt="language-icon" className="node-icon" src={reactIcon} style={{height: "100px"}}/>React, </div>
        <div>  <img alt="language-icon" className="node-icon" src={reduxIcon} style={{height: "100px"}}/>Redux, </div>
      <div> <img alt="language-icon" className="node-icon" src={postgresIcon} style={{height: "100px"}}/>PostgreSQL, </div>
        <div><img alt="language-icon" className="node-icon" src={sequelizeIcon} style={{height: "100px"}}/>Sequelize, </div>
        <div><img alt="language-icon" className="node-icon" src={expressIcon} style={{height: "100px"}}/>Express, </div>
        <div><img alt="language-icon" className="node-icon" src={materialIcon} style={{height: "100px"}}/>MaterialUI, </div>
       <div> <img alt="language-icon" className="node-icon" src={htmlIcon} style={{height: "100px"}}/>HTML, </div>
       <div><img alt="language-icon" className="node-icon" src={cssIcon} style={{height: "100px"}} /> CSS          </div>  
       </h3></h2>
        
        </div>
        <hr className="divider" />
        <div className="homeButtons">
            <h1 className="button-text" > Learn more about what I've done... </h1>
        <Button onClick={()=>navigate('/projects')} className="button" variant="contained" sx={{color: "#3e497a", backgroundColor: "#d8a2a2", fontWeight: "bold", fontSize: "30px",
  boxShadow: "4px 4px 8px 4px rgba(234, 238, 111, 0.5)",  borderRadius: '20px', border: "2px solid white"}}> Projects</Button>
        <Button onClick={()=>navigate('/experience')} className="button" variant="contained"sx={{color: "#3e497a", backgroundColor: "#d8a2a2",fontWeight: "bold", fontSize: "30px",
  boxShadow: "4px 4px 8px 4px rgba(234, 238, 111, 0.5)",  borderRadius: '20px', border: "2px solid white"}}> Experience</Button>
        </div>
      </div>
      
      </div>
   
  );
};




export default Home;
