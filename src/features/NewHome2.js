import React, {useEffect, useState} from "react";

import { Parallax, ParallaxLayer } from "@react-spring/parallax";


import { useInView } from "react-intersection-observer";



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
import laptop from "./laptop.png";
import clouds from "./clouds.png";
import clouds2 from "./clouds2.png";
import clouds3 from "./clouds3.png";
import clouds4 from "./clouds4.png";
import cloudsPurple from "./cloudPurple.png";
import lake from "./lake.png";


import bloodMoon from "./bloodMoon.png";

import newMoon from "./newMoon.png";
import bmoon from "./bmoon.png";


import sky from "./sky.jpg";
import sky4 from "./sky4.png";


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

import profilePic from "../ProfilePic.PNG";

const NewHome2 = () => {



 



  const textToType = "I'm a passionate, creative developer based in Chicago, Il. I specialize in building innovative apps using a variety of technolgies including...";
  const [typedText, setTypedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [ref, inView] = useInView({
    threshold: 1
  });
  const [typingDelay, setTypingDelay]= useState(false)

useEffect(() => {
  setTimeout(() => {
    setTypingDelay(true);
  }, 1500);
}, []);


  useEffect(() => {
    // if (inView) {
    //   const typingInterval = setInterval(() => {
    //     if (currentIndex < textToType.length) {
    //       setTypedText(textToType.slice(0, currentIndex + 1));
    //       setCurrentIndex(currentIndex + 1);
    //     } else {
    //       clearInterval(typingInterval);
    //     }
    //   }, 100); // Adjust the typing speed (interval) as needed

    //   return () => {
    //     clearInterval(typingInterval);
    //   };
    // }

   

    if(typingDelay){
      const typingInterval = setInterval(() => {
        if (currentIndex < textToType.length) {
          setTypedText(textToType.slice(0, currentIndex + 1));
          setCurrentIndex(currentIndex + 1);
        } else {
          clearInterval(typingInterval);
        }
      }, 20); // Adjust the typing speed (interval) as needed

      return () => {
        clearInterval(typingInterval);
      };
    }else{
      setTypingDelay(false)
    }
  
 
  }, [currentIndex, inView, typingDelay]);





  return (
    <div>
      <Parallax pages={2.9}>
        <ParallaxLayer
          id={"bummyboy"}
          offset={0}
          speed={1}
          factor={0}
          style={{
            marginTop: "150px",
            zIndex: 1,
            height: "15vh",
            // backgroundColor: "black",
            opacity: "85%",
            // border: "2px solid red",
          }}
          // sticky={{ start: 0, end: 3 }}
        >
          <div
            style={{
              // marginTop: "150px",
              // zIndex: 1,
              // height: "15vh",
              // backgroundColor: "black",
              // opacity: "85%",
              // border: "2px solid red",
            }}
          >
            <div
              style={{
                left: "-5vw",
                zIndex: 1,
                // height: "15vh",
                backgroundColor: "black",
                opacity: "85%",
  
              }}
            >
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
              <span style={{ margin: "2vw" }}>""</span>
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

            <div style={{ backgroundColor: "#050c2c", marginTop: "-1%" }}>
              <span
                // className="name-in-text-left"
                className="software-engineer"
              >
                Software Developer
              </span>
            </div>
          </div>
        </ParallaxLayer>
        {/* <ParallaxLayer
          offset={0}
          speed={1}
          factor={0}
          sticky={{ start: 0, end: 3 }}
        >
          <div
            style={{
              color: "white",
              zIndex: 10000,
              left: "200px",
              fontSize: "50px",
              border: "2px solid red",
            }}
          >
            <h1 style={{marginLeft: "20px"}}>Sooofffffdfdfdf</h1>
          </div>
        </ParallaxLayer> */}

        {/* <ParallaxLayer
          // id={"bummyboy"}
          offset={0.5}
          speed={1}
          factor={0}
          // style={{ marginTop: "150px", zIndex: 10000 }}

          style={{
            marginLeft: "20vw",
            height: "10vh",

            zIndex: 10000,
          }}
          sticky={{ start: 0, end: 3 }}
        >
          <div>
            <span
              // className="name-in-text-left"
              className="software-engineer"
            >
              Software Developer
            </span>
          </div>
        </ParallaxLayer> */}

        <ParallaxLayer
          offset={1}
          factor={1}
          speed={3}
          // sticky={{ start: .4, end: 1 }}
          style={{
            zIndex: 1000,
            marginTop: "-1500px",
            //  marginTop: "1000px"
          }}
        >
          <Projects2></Projects2>
        </ParallaxLayer>

        <ParallaxLayer
          id={"ai"}
          style={{ backgroundImage: `url(${sky4})`, backgroundSize: "cover" }}
          factor={3.1}
          speed={0.5}
        ></ParallaxLayer>

        <ParallaxLayer
          id={"clouds"}
          style={{
            backgroundImage: `url(${clouds3})`,
            backgroundSize: "cover",
            left: "50vw",
          }}
          factor={2}
          offset={0.4}
          speed={2.3}
        ></ParallaxLayer>

        <ParallaxLayer
          id={"clouds"}
          style={{
            backgroundImage: `url(${clouds3})`,
            backgroundSize: "cover",
          }}
          factor={2}
          offset={0.4}
          speed={1.5}
        ></ParallaxLayer>

        <ParallaxLayer
          id={"clouds"}
          style={{
            backgroundImage: `url(${cloudsPurple})`,
            backgroundSize: "contain",
            left: "25vw",
          }}
          factor={2}
          offset={0.5}
          speed={0.5}
        ></ParallaxLayer>

        {/* <ParallaxLayer
          id={"clouds"}
          style={{
            backgroundImage: `url(${cloudsPurple})`,
            backgroundSize: "contain",
            left: "-25vw",
          }}
          factor={2}
          offset={1}
          speed={2}
        ></ParallaxLayer> */}

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
            zIndex: 10000,
          }}
          factor={3}
          offset={1.2}
          speed={1}
        ></ParallaxLayer>

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
            zIndex: 10000,
            // transform: "rotate(-5deg)"
            // transform: "scaleX(-1)",
          }}
          factor={2}
          offset={3}
          speed={2}
        ></ParallaxLayer>

        {/* BOTTOM */}
        <ParallaxLayer
          style={{
            backgroundImage: `url(${computer})`,
            backgroundSize: "contain",
          }}
          factor={2}
          offset={2}
          speed={1.3}
        >
          <div
            // className="typing-effect-container"
            ref={ref}
          >
            <div
              style={{ color: "white", marginTop: "15vh", fontSize: "10vh" }}
              // className="typing-effect-text"
            >
              {typedText}
            </div>
          </div>
        </ParallaxLayer>

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

        {/* ABOUT ME */}
        <ParallaxLayer
          offset={0.5}
          speed={1}
          factor={1}
          style={{
            textAlign: "center",
            //  left: "5vw",
            display: "flex",
            justifyContent: "space-around",
          }}
        >
          {/* <Home2></Home2> */}
          <div>
            <img
              alt="Patrick Kilcullen"
              className="profilePic"
              src={profilePic}
              style={{
                filter:
                  "saturate(300%) contrast(130%) brightness(70%) grayscale(20%)",
                zIndex: 0,
              }}
            />
            <h1
              // ref={ref}
              className="homeAbout"
              style={{ width: "70vw" }}
            >
              {typedText}
            </h1>
          </div>
        </ParallaxLayer>
        {/* TECH */}
        {/* <ParallaxLayer
          offset={0.3}
          speed={6}
          factor={0.5}
          style={{ left: "60vw", marginTop: "800px" }}
        >
          <Tech></Tech>
        </ParallaxLayer> */}

        <ParallaxLayer
          offset={0.3}
          speed={2}
          factor={0.5}
          style={{ marginTop: "800px" }}
        >
          <Tech></Tech>
        </ParallaxLayer>

        {/* <ParallaxLayer sticky={{ start: 2, end: 3 }}>
          <SideNav></SideNav>
        </ParallaxLayer> */}

        <ParallaxLayer
          offset={1.15}
          factor={0.8}
          speed={4}
          // style={{ zIndex: 30 }}
          style={{ left: "-5vw", zIndex: 100000 }}
        >
          <Experience2></Experience2>
        </ParallaxLayer>
      </Parallax>
    </div>
  );
};

export default NewHome2;
