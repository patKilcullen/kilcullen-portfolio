import React from "react";
import '../style/home.css'
import { useNavigate } from "react-router-dom";
import Button from '@mui/material/Button';


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
        
        <h1 className="about">
          Hi, I'm Patrick Kilcullen, a software developer with a passion for
          creating innovative and efficient applications. I love learning about
          new technologies and discovering how they can be used to solve all kinds of
          problems. I have experience building apps with
          the PERN stack, but I'm always eager to learn more and explore new
          technologies. If you're looking for a dedicated software
          developer who's alwasy excited to overcome challenges learn, I'm your guy!
        </h1>
        </div>
        </div>
        
        {/* <hr className="divider" /> */}
   <div className="tech">
        <h3 className="techIntro" >I've build various apps using...<h2 > Javascript | Node.js | React | Redux | PostgresSQL | Sequelize | Express | PERN stack | Material UI | HTML | CSS</h2></h3>
        
        </div>
        <hr className="divider" />
        <div className="buttons">
            <h1 className="button-text" > Learn more about what I've done... </h1>
        <Button onClick={()=>navigate('/projects')} className="button" variant="contained" sx={{color:'#81567a', backgroundColor: 'white', fontWeight: "bold", borderRadius: '20px', border: "2px solid white"}}> Projects</Button>
        <Button onClick={()=>navigate('/experience')} className="button" variant="contained"sx={{color:'#81567a', backgroundColor: 'white', fontWeight: "bold", borderRadius: '20px', border: "2px solid white"}}> Experience</Button>
        </div>
      </div>
      
      </div>
   
  );
};




export default Home;
