import React, { useEffect, useState } from "react";

import { Parallax, ParallaxLayer } from "@react-spring/parallax";

import { useInView } from "react-intersection-observer";

import Projects2 from "./Projects2";
import Experience from "./Experience";
import Experience2 from "./Experience";
import SideNav from "./SideNav";
import NavBar from "../NavBar";

import Tech from "./Tech";
import EditDesign from "./EditDesign";

import mountains from "./backgrounds/mountains.png";
import waterfall from "./backgrounds/waterfall.png";
import trees from "./backgrounds/trees.png";
import trees2 from "./backgrounds/trees2.png";
import computer from "./backgrounds/computer.png";
import clouds from "./backgrounds/clouds.png";

import clouds3 from "./backgrounds/clouds3.png";
import clouds4 from "./backgrounds/clouds4.png";
import cloudsPurple from "./backgrounds/cloudPurple.png";
import lake from "./backgrounds/lake.png";

import newMoon from "./backgrounds/newMoon.png";

import sky from "./backgrounds/sky.jpg";
import sky4 from "./backgrounds/sky4.png";

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

const Home = () => {
  const textToType =
    "I'm a passionate, creative developer based in Chicago, Il. I specialize in building innovative apps using a variety of technolgies including...";
  const [typedText, setTypedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [ref, inView] = useInView({
    threshold: 1,
  });
  const [typingDelay, setTypingDelay] = useState(false);

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

    if (typingDelay) {
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
    } else {
      setTypingDelay(false);
    }
  }, [currentIndex, inView, typingDelay]);

  const [saturation, setSaturation] = useState(300);
  const [skySaturation, setSkySaturation] = useState(saturation - 200);
  const handleSaturation = (e) => {
    setSaturation(e.target.value);
    setSkySaturation(e.target.value - 200);
  };

  const [grayscale, setGrayscale] = useState(20);
  const [skyGrayscale, setSkyGrayscale] = useState(grayscale - 20);
  const handlegrayscale = (e) => {
    setGrayscale(e.target.value);
    setSkyGrayscale(e.target.value - 20);
  };

  const [contrast, setContrast] = useState(130);
  const [skyContrast, setSkyContrast] = useState(contrast - 30);
  const handleContrast = (e) => {
    setContrast(e.target.value);
    setSkyContrast(e.target.value - 30);
    console.log("contrast: ", contrast, typeof contrast);
    console.log("SKY contrast: ", skyContrast, typeof e.target.value);
  };

  const [brightness, setBrightness] = useState(70);
  const [skyBrightness, setSkyBrightness] = useState(brightness + 30);
  const handleBrightness = (e) => {
    setBrightness(e.target.value);
    setSkyBrightness(Number(e.target.value) + 30);
    console.log("BRIGHTNESS: ", brightness, typeof brightness);
    console.log("SKY BRIGHTNESS: ", skyBrightness, typeof e.target.value);
  };

  const [color, setColor] = useState(0);
  const [skyColor, setSkyColor] = useState(0);
  const handleColor = (e) => {
    setColor(e.target.value);
    setSkyColor(
      e.target.value > 0
        ? `-${e.target.value}`
        : Number(e.target.value) + Math.abs(Number(e.target.value)) * 2
    );
    console.log("color: ", color, typeof color);
    console.log("SKY color: ", skyColor, typeof skycolor);
  };

  //        const [hue, setHue] = useState(0)
  //        const handleChangeColor =()=>{
  // setHue(hue + 20)
  //        }

  const [nightMode, setNightMode] = useState(false);
  const handleNightMode = () => {
    setNightMode(!nightMode);
  };
  const [showEditDesign, setShowEditDesign] = useState(false);
  const handleShowEdit = () => {
    setShowEditDesign(!showEditDesign);
  };

  return (
    <div>
      {showEditDesign ? (
        <EditDesign
          handleShowEdit={handleShowEdit}
          handleBrightness={handleBrightness}
          handleColor={handleColor}
          handleContrast={handleContrast}
          handleNightMode={handleNightMode}
          handleSaturation={handleSaturation}
          handlegrayscale={handlegrayscale}
          brightness={brightness}
          color={color}
          contrast={contrast}
          nightMode={nightMode}
          saturation={saturation}
          grayscale={grayscale}
        />
      ) : (
        <label style={{ color: "white" }}>
          Don't like my design? Click to
          <button onClick={handleShowEdit}>Edit</button>
        </label>
      )}
      {/* <Parallax pages={3.1}> */}
      <Parallax pages={2.2}>
        <ParallaxLayer
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
            style={
              {
                // marginTop: "150px",
                // zIndex: 1,
                // height: "15vh",
                // backgroundColor: "black",
                // opacity: "85%",
                // border: "2px solid red",
              }
            }
          >
            <div
              style={{
                left: "-5vw",
                zIndex: 1,
                // height: "15vh",
                backgroundColor: "black",
                opacity: "85%",
              }}
              id="title"
            >
              <span
                style={{
                  backgroundColor: "black",
                  // fontSize: "8vw",
                  left: "-5vw",
                  filter: `saturate(${skySaturation}%) grayscale(${skyGrayscale}%) contrast(${skyContrast}%) brightness(${skyBrightness}%) hue-rotate(${color}deg)`,
                }}
                className="name-in-text-left"
              >
                Patrick{" "}
              </span>
              <span style={{ margin: "2vw" }}>""</span>
              <span
                style={{
                  backgroundColor: "black",
                  // fontSize: "8vw",
                }}
                className="name-in-text-right"
              >
                Kilcullen
              </span>
            </div>

            <div
              style={{
                backgroundColor: "#050c2c",
                marginTop: "-1%",
                filter: `saturate(${skySaturation}%) grayscale(${skyGrayscale}%) contrast(${skyContrast}%) brightness(${skyBrightness}%) hue-rotate(${color}deg)`,
              }}
            >
              <span
                // className="name-in-text-left"
                className="software-engineer"
              >
                Software Developer
              </span>
            </div>
          </div>
        </ParallaxLayer>

        <ParallaxLayer
          style={{
            backgroundImage: nightMode ? `url(${newMoon})` : `url(${sky4})`,
            // backgroundColor: nightMode ? "black" : null,
            backgroundSize: "cover",
            filter: `saturate(${skySaturation}%) grayscale(${skyGrayscale}%) contrast(${skyContrast}%) brightness(${skyBrightness}%) hue-rotate(${color}deg)`,
          }}
          // factor={3.1}
          // factor={2.9}
          factor={3.1}
          // speed={0.5}
          speed={1.5}
        ></ParallaxLayer>

        <ParallaxLayer
          id={"clouds"}
          style={{
            backgroundImage: nightMode ? null : `url(${clouds3})`,
            backgroundSize: "cover",
            left: "50vw",
            filter: `saturate(${skySaturation}%) grayscale(${skyGrayscale}%) contrast(${skyContrast}%) brightness(${skyBrightness}%) hue-rotate(${skyColor}deg)`,
          }}
          factor={2}
          offset={0.4}
          speed={2.3}
        ></ParallaxLayer>

        <ParallaxLayer
          id={"clouds"}
          style={{
            backgroundImage: nightMode ? null : `url(${clouds3})`,
            backgroundSize: "cover",
            filter: `saturate(${skySaturation}%) grayscale(${skyGrayscale}%) contrast(${skyContrast}%) brightness(${skyBrightness}%) hue-rotate(${skyColor}deg)`,
          }}
          factor={2}
          offset={0.4}
          speed={1.5}
        ></ParallaxLayer>

        <ParallaxLayer
          id={"clouds"}
          style={{
            backgroundImage: `url(${cloudsPurple}) grayscale(${skyGrayscale}%) contrast(${skyContrast}%) brightness(${skyBrightness}%) hue-rotate(${skyColor}deg)`,
            backgroundSize: "contain",
            left: "25vw",
            filter: `saturate(${skySaturation}%) grayscale(${skyGrayscale}%) contrast(${skyContrast}%) brightness(${skyBrightness}%) hue-rotate(${skyColor}deg)`,
          }}
          factor={2}
          offset={0.5}
          speed={0.5}
        ></ParallaxLayer>

        <ParallaxLayer
          id={"mntns"}
          style={{
            backgroundImage: `url(${mountains})`,
            backgroundSize: "cover",
            filter: `hue-rotate(${skyColor}deg)`,
            marginTop: "-150vh",
          }}
          factor={3}
          // factor={3}
          // offset={1.1}
          offset={1}
          // speed={2.8}
          speed={3.8}
        ></ParallaxLayer>

        <ParallaxLayer
          id={"clouds"}
          style={{
            backgroundImage: `url(${clouds3})`,
            backgroundSize: "contain",
            left: "-70vw",
            height: "200vh",
            width: "200vw",
            zIndex: 10000,
            filter: `saturate(${skySaturation}%) grayscale(${skyGrayscale}%) contrast(${skyContrast}%) brightness(${skyBrightness}%) hue-rotate(${skyColor}deg)`,
          }}
          offset={0.9}
          speed={0.8}
        ></ParallaxLayer>

        <ParallaxLayer
          style={{
            backgroundImage: `url(${lake})`,
            backgroundSize: "cover",
            marginTop: "-350vh",
          }}
          factor={1}
          offset={2}
          speed={3.8}
        >
          <SideNav></SideNav>
          {/* <img
            alt="computer"
            // className="profilePic"
            src={computer}
            style={{
              width: "100vw",
              marginTop: "-40vh"
            }}
          /> */}
        </ParallaxLayer>
        {/* 
        <ParallaxLayer
          style={{
            backgroundImage: `url(${clouds4})`,
            backgroundSize: "cover",
            left: "-5vw",
            zIndex: 10000,
            filter: `saturate(${skySaturation}%) grayscale(${skyGrayscale}%) contrast(${skyContrast}%) brightness(${skyBrightness}%) hue-rotate(${skyColor}deg)`,
            // transform: "rotate(-5deg)"
            // transform: "scaleX(-1)",
          }}
          factor={2}
          offset={3}
          speed={2}
        ></ParallaxLayer> */}

        {/* ABOUT ME */}
        <ParallaxLayer
          offset={0.5}
          speed={1}
          // factor={1}
          // id="about-me-layer"
          style={{
            textAlign: "center",
            //  left: "5vw",
            display: "flex",
            justifyContent: "space-around",
          }}
        >
          {/* <Home2></Home2> */}
          <div id="about-me-layer">
            <img
              alt="Patrick Kilcullen"
              className="profilePic"
              src={profilePic}
              style={{
                filter: `saturate(${saturation}%) contrast(${contrast}%) brightness(${brightness}%) grayscale(${grayscale}%) hue-rotate(${skyColor}deg)`,
                zIndex: 0,
              }}
            />
            ;
            <h1
              // ref={ref}
              className="homeAbout"
              style={{ width: "70vw" }}
            >
              {typedText}
            </h1>
          </div>
        </ParallaxLayer>

        <ParallaxLayer
          offset={0.3}
          speed={2}
          //  factor={0.5}
          id="tech-layer"
          // style={{ marginTop: "900px" }}
        >
          <Tech></Tech>
        </ParallaxLayer>

        <ParallaxLayer
          offset={1}
          // factor={1}
          speed={3}
          // sticky={{ start: .4, end: 1 }}
          id="projects-layer"
          style={{
            zIndex: 10001,
            // marginTop: "-1500px",
            //  marginTop: "1000px"
          }}
        >
          <Projects2></Projects2>
        </ParallaxLayer>

        {/* <ParallaxLayer
          offset={1.15}
          // factor={10}
          speed={4}
          id="experience-layer"
          // style={{ zIndex: 30 }}
          style={{ left: "-5vw", zIndex: 100000 }}
        >
          <Experience></Experience>
        </ParallaxLayer> */}
        {/* 
        <ParallaxLayer
          offset={2.9}
          factor={0.8}
          speed={2.8}
          // style={{ zIndex: 30 }}
          style={{ backgroundColor: "black" }}
        ></ParallaxLayer> */}
      </Parallax>
    </div>
  );
};

export default Home;
