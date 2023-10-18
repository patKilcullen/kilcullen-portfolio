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
    <div id="main" style={{ width: "20vw" }}>
      {/* <div id="mainContent"> */}
      <div className="mainContent">
        {/* <img id="profilePic" src={profilePic} />  */}
        <div className="mainContainer">
          <div className="about-and-pic">
            {/* <img alt="Patrick Kilcullen" className="profilePic" src={profilePic} />  */}
            <div className="scroll">
              <h1 className="homeAbout" style={{ width: "50vw" }}>
                I've a 
              </h1>
            </div>
          </div>
        </div>

       
   
      </div>
    </div>
  );
};




export default Home;
