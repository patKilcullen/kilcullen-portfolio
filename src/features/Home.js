import React, { useState, useRef } from "react";

import { Parallax, ParallaxLayer } from "@react-spring/parallax";

// import { useInView } from "react-intersection-observer";

import Projects from "./Projects";

import SideNav from "./SideNav";
import Tech from "./Tech";
import EditDesign from "./EditDesign";


import profilePic2 from "../profile-pic.jpeg";
import mountains from "./backgrounds/mountains.png";
import clouds3 from "./backgrounds/clouds3.png";
import cloudsPurple from "./backgrounds/cloudPurple.png";
import lake from "./backgrounds/lake.png";
import newMoon from "./backgrounds/newMoon.png";
import sky4 from "./backgrounds/sky4.png";

import Button from "@mui/material/Button";

const Home = () => {
  const projectsSectionRef = useRef(null);

  const textToType =
    "I'm a full stack software developer based in Chicago, Il. I think of Software development as a creative outlet, and I’m passionate about bringing unique and innovative ideas to life. Beyond coding, I enjoy writing, reading, movies, and cooking.";
  // const [typedText, setTypedText] = useState("");

  const typedText = textToType;
  // const [currentIndex, setCurrentIndex] = useState(0);
  // const [ref, inView] = useInView({
  //   threshold: 1,
  // });
  // const [typingDelay, setTypingDelay] = useState(false);

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

  const [plain, setPlain] = useState(false);

  const handlePlainBackground = () => {
    setPlain(!plain);
  };

  return (
    <div style={{ display: "flex", overflowY: "hidden" }}>
      <SideNav></SideNav>

      <Parallax pages={2.8}>
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
            <label
              style={{ color: "white", backgroundColor: "rgba(0, 0, 0, 0.2)" }}
            >
              Don't like my background? Click to
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
                // minWidth: "300px"
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
              background: "linear-gradient(180deg, #050c2c, #e74c3c)",
              filter: `saturate(${skySaturation}%) grayscale(${skyGrayscale}%) contrast(${skyContrast}%) brightness(${skyBrightness}%) hue-rotate(${color}deg)`,
            }}
            factor={5.5}
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
              factor={3.3}
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
              // factor={3}
              factor={3.2}
              offset={1}
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
            </ParallaxLayer>
            {/* Black Bottom */}
            <ParallaxLayer
              style={{
                // backgroundImage: `url(${lake})`,
                // backgroundSize: "cover",
                // marginTop: "-251vh",
                marginTop: "-281vh",
                backgroundColor: "black",
              }}
              factor={3}
              offset={2}
              speed={3.8}
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

        {/* ABOUT ME */}
        <ParallaxLayer
          offset={0.5}
          speed={1.5}
          style={{
            textAlign: "center",
            //  left: "5vw",
            display: "flex",
            justifyContent: "space-around",
            // marginTop: "-25vh"
          }}
        >
          <div
            id="about-me-layer"
            style={{ display: "flex", gap: "0px", alignItems: "center" }}
          >
            <h1 className="homeAbout" style={{ width: "70vw" }}>
              {typedText}
            </h1>
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
          </div>
        </ParallaxLayer>

        {/* TECH */}
        <ParallaxLayer offset={0.3} speed={1.5} id="tech-layer">
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
            zIndex: 10001,
          }}
        >
          <div ref={projectsSectionRef}>
            <Projects></Projects>
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
