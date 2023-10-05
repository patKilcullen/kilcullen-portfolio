import React, {useEffect, useState} from "react";

import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import Home from "./Home";
import Home2 from "./Home2";
import Projects2 from "./Projects2";
import Experience from "./Experience";
import Experience2 from "./Experience2";
import SideNav from "../SideNav";
import NavBar from "../NavBar";

import Tech from "./Tech";

import forest from "./forest.png";
import mountains from "./mountains.png";
import waterfall from "./waterfall.png";
import trees from "./trees.png";
import trees2 from "./trees2.png";
import computer from "./computer.png";
import clouds from "./clouds.png";
import clouds2 from "./clouds2.png";
import clouds3 from "./clouds3.png";
import clouds4 from "./clouds4.png";
import lake from "./lake.png";


import moon from "./moon.jpg";
import bloodMoon from "./bloodMoon.png";

import newMoon from "./newMoon.png";
import bmoon from "./bmoon.png";

import moon3 from "./moon6.png";
import sky from "./sky.jpg";
import sky4 from "./sky4.png";

import stars from "./stars4.png";
import ai from "./ai.png";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@material-ui/icons/School";
import WorkIcon from "@material-ui/icons/Work";

import fullstack from "../FullstackCertificate.png";
import "../style/experience.css";

import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import { projects } from "./projectInfo";
const NewHome2 = () => {



 const [scrollPosition, setScrollPosition] = useState(0);
 const [opacity, setOpacity] = useState(1);

 useEffect(() => {
   const handleScroll = () => {
     const currentPosition = window.pageYOffset;
     setScrollPosition(currentPosition);

     // Calculate the opacity based on scroll position
     const maxOpacity = 1; // Maximum opacity
     const minScroll = 200; // The scroll position at which the element starts to disappear
     const maxScroll = 400; // The scroll position at which the element is fully disappeared
     const opacityRange = maxScroll - minScroll;
     const newOpacity =
       maxOpacity - (currentPosition - minScroll) / opacityRange;

     // Ensure opacity is within the bounds
     setOpacity(Math.min(maxOpacity, Math.max(0, newOpacity)));
   };

   window.addEventListener("scroll", handleScroll);

   return () => {
     window.removeEventListener("scroll", handleScroll);
   };
 }, []);





  return (
    <div>
      NewHome
      <Parallax pages={2.9}>
        <ParallaxLayer
          id={"bummyboy"}
          sticky={{ start: 0.19, end: 0.2 }}
          speed={2}
           style={{ height: "15vw" }}
        >
          <div style={{ backgroundColor: "black", left: "-5vw" }}>
            <span
              style={{
                backgroundColor: "black",
                fontSize: "8vw",
                left: "-5vw",
              }}
              className="name-in-text-left"
            >
              Patrick{" "}
            </span>

            <span
              style={{
                backgroundColor: "black",
                fontSize: "8vw",
              }}
              className="name-in-text-right"
            >
              Kilcullen
            </span>
          </div>
        </ParallaxLayer>

        <ParallaxLayer
          id={"ssofware-enginerr"}
          sticky={{ start: 0.32, end: 0.3 }}
          speed={2}
          style={{ left: "20vw", height: "10vh" }}
        >
          <div style={{ zIndex: 2, opacity: opacity }}>
            <span className="name-in-text-left">Software Developer</span>
          </div>
        </ParallaxLayer>

        <ParallaxLayer
          offset={1}
          factor={1}
          speed={2}
          // sticky={{ start: .4, end: 1 }}
          style={{
            zIndex: 100,
            marginTop: "-500px",
            //  marginTop: "1000px"
          }}
        >
          <Projects2></Projects2>

          {/* <div className="mainProjectContainer">
            {projects.map((project, idx) => {
              return (
                <div className="projectContainer" key={idx}>
                  <div className="name">{project.name}</div>
                  <div className="description">{project.description}</div>
                  <Link
                    to={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {" "}
                    <img
                      className="projectPic"
                      src={project.pic}
                      alt="screenshot of project"
                    />
                  </Link>

                  <div className="projectAbout"> {project.about}</div>
                  <div className="buttons">
                    <Link
                      to={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {" "}
                      <Button
                        onClick={() => {
                          console.log("Foooooo");
                        }}
                        className="button"
                        variant="contained"
                        sx={{
                          color: "#3e497a",
                          backgroundColor: "#d8a2a2",
                          fontWeight: "bold",
                          fontSize: "23px",
                          boxShadow: "4px 4px 8px 4px rgba(234, 238, 111, 0.5)",
                          borderRadius: "20px",
                          border: "2px solid white",
                          zIndex: 1000,
                        }}
                      >
                        {" "}
                        Demo
                      </Button>
                    </Link>
                    <Link
                      to={project.code}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {" "}
                      <Button
                        className="button"
                        variant="contained"
                        sx={{
                          color: "#3e497a",
                          backgroundColor: "#d8a2a2",
                          fontWeight: "bold",
                          fontSize: "23px",
                          boxShadow: "4px 4px 8px 4px rgba(234, 238, 111, 0.5)",
                          borderRadius: "20px",
                          border: "2px solid white",
                        }}
                      >
                        {" "}
                        Code
                      </Button>
                    </Link>
                  </div>
                </div>
              );
            })}
          </div> */}
        </ParallaxLayer>

        <ParallaxLayer
          id={"ai"}
          style={{ backgroundImage: `url(${ai})`, backgroundSize: "cover" }}
          factor={3.1}
          speed={1 / 5}
        ></ParallaxLayer>

        <ParallaxLayer
          id={"clouds"}
          style={{
            backgroundImage: `url(${clouds3})`,
            backgroundSize: "cover",
            left: "50vw",
          }}
          factor={2}
          offset={0.9}
          speed={2.3}
        ></ParallaxLayer>

        <ParallaxLayer
          id={"clouds"}
          style={{
            backgroundImage: `url(${clouds3})`,
            backgroundSize: "cover",
          }}
          factor={2}
          offset={0.9}
          speed={1.5}
        ></ParallaxLayer>

        <ParallaxLayer
          id={"mntns"}
          style={{
            backgroundImage: `url(${mountains})`,
            backgroundSize: "cover",
          }}
          factor={4}
          offset={1}
          speed={2.8}
        ></ParallaxLayer>

        <ParallaxLayer
          id={"clouds"}
          style={{
            backgroundImage: `url(${clouds3})`,
            backgroundSize: "contain",
            left: "-50vw",
            height: "200vh",
            width: "200vw",
          }}
          factor={2}
          offset={1.4}
          speed={1.5}
        ></ParallaxLayer>

        {/* <ParallaxLayer
          style={{
            backgroundImage: `url(${trees})`,
            backgroundSize: "cover",
          }}
          factor={3}
          offset={1.9}
          speed={1.7}
        ></ParallaxLayer> */}

        {/* <ParallaxLayer
          style={{
            backgroundImage: `url(${trees2})`,
            backgroundSize: "contain",
            left: "-50vw",
            height: "200vh",
            width: "200vw",
          }}
          factor={3}
          offset={1.9}
          speed={1.7}
        ></ParallaxLayer> */}

        <ParallaxLayer
          style={{
            backgroundImage: `url(${lake})`,
            backgroundSize: "cover",
          }}
          factor={1}
          offset={2}
          speed={3}
        ></ParallaxLayer>

        <ParallaxLayer
          style={{
            backgroundImage: `url(${clouds4})`,
            backgroundSize: "cover",
            left: "-5vw",
            // transform: "rotate(-5deg)"
            // transform: "scaleX(-1)",
          }}
          factor={2}
          offset={3}
          speed={2}
        ></ParallaxLayer>

        {/* <ParallaxLayer
          style={{
            backgroundImage: `url(${computer})`,
            backgroundSize: "contain",
          }}
          factor={2}
          offset={2}
          speed={1.3}
        ></ParallaxLayer> */}

        {/* <ParallaxLayer
          sticky={{ start: 0.3, end: 0.3 }}
          speed={1}
          // style={{ zIndex: 30 }}
        >
          <div style={{ backgroundColor: "black", left: "-5vw" }}>
            <span
              style={{
                backgroundColor: "black",
                fontSize: "8vw",
                left: "-5vw",
              }}
              className="name-in-text-left"
            >
              Patrick{" "}
            </span>
        
            <span
              style={{
                backgroundColor: "black",
                fontSize: "8vw",
              }}
              className="name-in-text-right"
            >
              Kilcullen
            </span>
          </div>
        </ParallaxLayer>

        <ParallaxLayer
        id={"sfotywa"}
          sticky={{ start: 0.45, end: 0.4 }}
          speed={1}
          style={{ left: "20vw" }}
        >
          <div style={{zIndex: 2}}>
            <span className="name-in-text-left">Software Developer</span>
          </div>
        </ParallaxLayer> */}

        <ParallaxLayer
          offset={0.9}
          speed={1.8}
          factor={1}
          style={{ textAlign: "center", left: "25vw" }}
        >
          <Home2></Home2>
        </ParallaxLayer>

        {/* <ParallaxLayer
          offset={0.9}
          speed={2}
          factor={0.5}
          style={{ left: "45vw", marginTop: "800px" }}
        >
          <Tech></Tech>
        </ParallaxLayer> */}

        {/* <ParallaxLayer sticky={{ start: 2, end: 3 }}>
          <SideNav></SideNav>
        </ParallaxLayer> */}

        {/* <ParallaxLayer
          offset={1.5}
          factor={1}
          speed={1.5}
          // style={{ zIndex: 30 }}
          style={{ left: "" }}
        >
          <Experience2></Experience2>
        </ParallaxLayer> */}
      </Parallax>
    </div>
  );
};

export default NewHome2;
