import React, { useEffect, useState, useRef } from "react";

import { Parallax, ParallaxLayer } from "@react-spring/parallax";

import { useInView } from "react-intersection-observer";

import Projects2 from "./Projects3";
import Experience from "./Experience";
import SideNav from "./SideNav";
import Tech from "./Tech";
import EditDesign from "./EditDesign";

import profilePic from "../ProfilePic.PNG";
import profilePic2 from "../profile-pic.jpeg";
import mountains from "./backgrounds/mountains.png";
import clouds3 from "./backgrounds/clouds3.png";
import clouds4 from "./backgrounds/clouds4.png";
import cloudsPurple from "./backgrounds/cloudPurple.png";
import lake from "./backgrounds/lake.png";
import newMoon from "./backgrounds/newMoon.png";
import sky4 from "./backgrounds/sky4.png";


import Button from "@mui/material/Button";

import resume from "../resume.pdf"

const Home = () => {


  const handleDownload = () => {
    // Replace 'document.pdf' with the actual file URL you want to download.
    const fileUrl = "https://example.com/path/to/document.pdf";
    const link = document.createElement("a");
    link.href = fileUrl;
    link.download = "document.pdf"; // The name you want the file to have when downloaded.
    link.click();
  };



 const projectsSectionRef = useRef(null);

   const scrollToProjectsSection = () => {

 
     if (projectsSectionRef.current) {
       projectsSectionRef.current.scrollIntoView({ behavior: "smooth" });
     }
   };



  const textToType =
    "I'm a passionate, creative developer based in Chicago, Il. I specialize in building innovative apps using a variety of technolgies including...";
  // const [typedText, setTypedText] = useState("");

const typedText = textToType
  const [currentIndex, setCurrentIndex] = useState(0);
  const [ref, inView] = useInView({
    threshold: 1,
  });
  const [typingDelay, setTypingDelay] = useState(false);

  // useEffect(() => {
  //   setTimeout(() => {
  //     setTypingDelay(true);
  //   }, 1500);
  // }, []);

  // useEffect(() => {
  //   if (typingDelay) {
  //     const typingInterval = setInterval(() => {
  //       if (currentIndex < textToType.length) {
  //         setTypedText(textToType.slice(0, currentIndex + 1));
  //         setCurrentIndex(currentIndex + 1);
  //       } else {
  //         clearInterval(typingInterval);
  //       }
  //     }, 20);

  //     return () => {
  //       clearInterval(typingInterval);
  //     };
  //   } else {
  //     setTypingDelay(false);
  //   }
  // }, [currentIndex, inView, typingDelay]);

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
  };

  const [brightness, setBrightness] = useState(70);
  const [skyBrightness, setSkyBrightness] = useState(brightness + 30);
  const handleBrightness = (e) => {
    setBrightness(e.target.value);
    setSkyBrightness(Number(e.target.value) + 30);
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
  };

  const [nightMode, setNightMode] = useState(false);
  const handleNightMode = () => {
    setNightMode(!nightMode);
  };
  const [showEditDesign, setShowEditDesign] = useState(false);
  const handleShowEdit = () => {
    setShowEditDesign(!showEditDesign);
  };



const [plain, setPlain] = useState(false)

const handlePlainBackground = ()=>{
  setPlain(!plain)
}


  return (
    <div>
      {/* {showEditDesign ? (
        <EditDesign
          handlePlainBackground={handlePlainBackground}
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
          <Button onClick={handleShowEdit}>Edit</Button>
        </label>
      )} */}
      {/* <Parallax pages={3.1}> */}
      <Parallax pages={2.2}>
        <ParallaxLayer
          sticky={{ start: 0, end: 2.5 }}
          style={{ height: "1--%" }}
        >
          {showEditDesign ? (
            <EditDesign
              handlePlainBackground={handlePlainBackground}
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
              <Button onClick={handleShowEdit}>Edit</Button>
            </label>
          )}
        </ParallaxLayer>

        <ParallaxLayer
          offset={0}
          speed={1}
          factor={0}
          style={{
            marginTop: "150px",
            zIndex: 1,
            height: "15vh",
            opacity: "85%",
          }}
        >
          <div>
            <div
              style={{
                left: "-5vw",
                zIndex: 1,
                backgroundColor: "black",
                opacity: "85%",
              }}
              id="title"
            >
              <span
                style={{
                  backgroundColor: "black",
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
                }}
                className="name-in-text-right"
              >
                Kilcullen
              </span>
            </div>

            <div
              style={{
                // backgroundColor: "#050c2c",
                backgroundClip: "rgba(5, 12, 44, 0.5",

                marginTop: "-1%",
                filter: `saturate(${skySaturation}%) grayscale(${skyGrayscale}%) contrast(${skyContrast}%) brightness(${skyBrightness}%) hue-rotate(${color}deg)`,
              }}
            >
              <span className="software-engineer">Software Developer</span>
            </div>
          </div>
        </ParallaxLayer>

        {/* PLAIN LAYER */}
        {plain ? (
          <ParallaxLayer
            style={{
              // background: "linear-gradient(45deg, #3498db, #e74c3c)",
              background: "linear-gradient(180deg, #050c2c, #e74c3c)",

              // backgroundSize: "cover",
              filter: `saturate(${skySaturation}%) grayscale(${skyGrayscale}%) contrast(${skyContrast}%) brightness(${skyBrightness}%) hue-rotate(${color}deg)`,
            }}
            // factor={3.1}
            // factor={2.9}
            factor={5.1}
            // speed={0.5}
            speed={1.5}
          ></ParallaxLayer>
        ) : (
          <>
            <ParallaxLayer
              style={{
                backgroundImage: nightMode ? `url(${newMoon})` : `url(${sky4})`,
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

            {/* BOTTOM */}
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
              {/* <SideNav></SideNav> */}
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
              // speed={1.5}
              speed={2.5}
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
              id={"clouds"}
              style={{
                backgroundImage: `url(${clouds3})`,
                backgroundSize: "contain",
                left: "-70vw",
                height: "200vh",
                width: "200vw",
                zIndex: 10000,
                // transform: "scaleX(-1)",
                filter: `saturate(${skySaturation}%) grayscale(${skyGrayscale}%) contrast(${skyContrast}%) brightness(${skyBrightness}%) hue-rotate(${skyColor}deg)`,
              }}
              offset={0.9}
              speed={0.8}
            ></ParallaxLayer>
          </>
        )}

        {/* <ParallaxLayer
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
          offset={1}
          speed={2}
        ></ParallaxLayer> */}

        {/* ABOUT ME */}
        <ParallaxLayer
          offset={0.5}
          speed={1.5}
          style={{
            textAlign: "center",
            //  left: "5vw",
            display: "flex",
            justifyContent: "space-around",
          }}
        >
          <div id="about-me-layer">
            <img
              alt="Patrick Kilcullen"
              className="profilePic"
              src={profilePic2}
              style={{
                filter: `saturate(${
                  saturation - 200
                }%) contrast(${contrast}%) brightness(${brightness}%) grayscale(${grayscale}%) hue-rotate(${skyColor}deg)`,
                zIndex: 0,
              }}
            />
            ;
            <h1 className="homeAbout" style={{ width: "70vw" }}>
              {typedText}
            </h1>
            {/* <div
              style={{ display: "flex", justifyContent: "center", gap: "25px" }}
            >
              <Button
                variant="contained"
                style={{ zIndex: 100001 }}
                onClick={scrollToProjectsSection}
              >
                Projects
              </Button>
              <Button variant="contained" onClick={handleDownload}>
                Download Resume
              </Button>
            </div> */}
          </div>
        </ParallaxLayer>

        {/* TECH */}
        <ParallaxLayer
          offset={0.3}
          // speed={2}
          speed={1.5}
          //  factor={0.5}
          id="tech-layer"
        >
          <Tech></Tech>
        </ParallaxLayer>

        {/* PROJECTS */}
        <ParallaxLayer
          offset={1}
          factor={1}
          // speed={3}
          speed={1.5}
          id="projects-layer"
          style={{
             marginTop: "-300px",

            zIndex: 10001,
            // marginTop: "-1500px",
            //  marginTop: "1000px"
          }}
        >
          <div ref={projectsSectionRef}>
            <Projects2></Projects2>
          </div>
        </ParallaxLayer>

        {/* EXPERIENCE */}
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

        {/* <ParallaxLayer
          style={{
            backgroundSize: "cover",
            // marginTop: "-350vh",
          }}
          sticky={{ start: 0, end: 2.5 }}
        >
          <SideNav></SideNav>
       
        </ParallaxLayer> */}
      </Parallax>
    </div>
  );
};

export default Home;
