import React from "react";
import '../style/home.css'
import { useNavigate } from "react-router-dom";
import Button from '@mui/material/Button';
import nodeIcon from '../icons8-nodejs-48.png'
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
          <div >
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
        <h3 className="techIntro" >I've build various apps using...<h2 > Javascript <img alt="NOde Icon" className="node-icon" src={javascriptIcon} style={{height: "100px"}}/>| Node.js <img alt="NOde Icon" className="node-icon" src={nodeSVG} style={{height: "100px"}}/> | React <img alt="NOde Icon" className="node-icon" src={reactIcon} style={{height: "100px"}}/>| Redux <img alt="NOde Icon" className="node-icon" src={reduxIcon} style={{height: "100px"}}/>| PostgresSQL <img alt="NOde Icon" className="node-icon" src={postgresIcon} style={{height: "100px"}}/>| Sequelize <img alt="NOde Icon" className="node-icon" src={sequelizeIcon} style={{height: "100px"}}/>| Express <img alt="NOde Icon" className="node-icon" src={expressIcon} style={{height: "100px"}}/>| PERN stack | Material UI <img alt="NOde Icon" className="node-icon" src={materialIcon} style={{height: "100px"}}/>| HTML <img alt="NOde Icon" className="node-icon" src={htmlIcon} style={{height: "100px"}}/>| CSS<img alt="NOde Icon" className="node-icon" src={cssIcon} style={{height: "100px"}}/></h2></h3>
        
        </div>
        <hr className="divider" />
        <div className="homeButtons">
            <h1 className="button-text" > Learn more about what I've done... </h1>
        <Button onClick={()=>navigate('/projects')} className="button" variant="contained" sx={{color:'#81567a', backgroundColor: 'white', fontWeight: "bold", borderRadius: '20px', border: "2px solid white"}}> Projects</Button>
        <Button onClick={()=>navigate('/experience')} className="button" variant="contained"sx={{color:'#81567a', backgroundColor: 'white', fontWeight: "bold", borderRadius: '20px', border: "2px solid white"}}> Experience</Button>
        </div>
      </div>
      
      </div>
   
  );
};




export default Home;
