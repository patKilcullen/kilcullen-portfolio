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

import {Box, Button} from "@mui/material";

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

  // const [plainColor1, setPlainColor1] = useState("#050c2c");
    const [plainColor1, setPlainColor1] = useState("#858CAA");
  const [plainColor2, setPlainColor2] = useState("#e74c3c");
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
  const handleNightMode = (type) => {
    setNightMode(type);
  };
  const [showEditDesign, setShowEditDesign] = useState(false);
  const handleShowEdit = () => {
    setShowEditDesign(!showEditDesign);
  };

  const [plain, setPlain] = useState(false);

  const handlePlainBackground = (type) => {
    setPlain(type);
  };

  const [addClouds, setAddClouds] = useState(false);
  const [addMountains, setAddMountains] = useState(false);
  return (
    <div style={{ display: "flex", overflowY: "hidden" }}>
      <SideNav></SideNav>

      <Parallax pages={2.8}>
        <ParallaxLayer
          sticky={{ start: 0, end: 2.5 }}
          style={{ height: "1--%" }}
        >
          {showEditDesign ? (
            <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
              <Box sx={{ alignSelf: "center" }}>
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
                  plainColor1={plainColor1}
                  setPlainColor1={setPlainColor1}
                  addClouds={addClouds}
                  addMountains={addMountains}
                  setAddClouds={setAddClouds}
                  setAddMountains={setAddMountains}
                  setShowEditDesign={setShowEditDesign}
                />
              </Box>
            </Box>
          ) : (
            <label
              style={{ color: "white", backgroundColor: "rgba(0, 0, 0, 0.2)" }}
            >
              Don't like my background? Click to
              <Button onClick={handleShowEdit}>Edit</Button>
            </label>
          )}

          {/* <label
            style={{ color: "white", backgroundColor: "rgba(0, 0, 0, 0.2)" }}
          >
            Don't like my background? Click to
            <Button onClick={handleShowEdit}>Edit</Button>
            <EditDesign
              open={showEditDesign}
              setShowEditDesign={setShowEditDesign}
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
          </label> */}
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
                  // filter: `saturate(${skySaturation}%) grayscale(${skyGrayscale}%) contrast(${skyContrast}%) brightness(${skyBrightness}%) hue-rotate(${color}deg)`,
                  filter: `saturate(${saturation}%) grayscale(${grayscale}%) contrast(${contrast}%) brightness(${brightness}%) hue-rotate(${color}deg)`,
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
                // filter: `saturate(${skySaturation}%) grayscale(${skyGrayscale}%) contrast(${skyContrast}%) brightness(${skyBrightness}%) hue-rotate(${color}deg)`,
                filter: `saturate(${saturation}%) grayscale(${grayscale}%) contrast(${contrast}%) brightness(${brightness}%) hue-rotate(${color}deg)`,
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
              // background: "linear-gradient(180deg, #050c2c, #e74c3c)",
              // background: `linear-gradient(180deg, ${plainColor1}, ${plainColor2})`,

              background: plainColor1,
              filter: `saturate(${saturation}%) grayscale(${grayscale}%) contrast(${contrast}%) brightness(${brightness}%) hue-rotate(${color}deg)`,
              // filter: `saturate(${skySaturation}%) grayscale(${skyGrayscale}%) contrast(${skyContrast}%) brightness(${skyBrightness}%) hue-rotate(${color}deg)`,
            }}
            factor={5.5}
            speed={1.5}
          ></ParallaxLayer>
        ) : (
          <>
            <ParallaxLayer
              style={{
                // backgroundImage: nightMode ? `url(${newMoon})` : `url(${sky4})`,
                backgroundImage: nightMode ? `url(${newMoon})` : null,
                backgroundColor: nightMode ? "black" : plainColor1,

                backgroundSize: "cover",
                // filter: `saturate(${skySaturation}%) grayscale(${skyGrayscale}%) contrast(${skyContrast}%) brightness(${skyBrightness}%) hue-rotate(${color}deg)`,
                // filter: `saturate(${skySaturation}%) grayscale(${skyGrayscale}%) contrast(${skyContrast}%) brightness(${skyBrightness}%) hue-rotate(${color}deg)`,
                filter: `saturate(${saturation}%) grayscale(${grayscale}%) contrast(${contrast}%) brightness(${brightness}%) hue-rotate(${color}deg)`,
              }}
              // factor={3.1}
              factor={3.3}
              speed={1.5}
            >
              {" "}
            </ParallaxLayer>

            <ParallaxLayer
              id={"mntns"}
              style={{
                backgroundImage: addMountains ? `url(${mountains})` : null,
                // backgroundImage: null,
                backgroundColor: nightMode ? "black" : plainColor1,

                backgroundSize: "cover",
                // filter: `hue-rotate(${skyColor}deg)`,
                filter: `saturate(${saturation}%) grayscale(${grayscale}%) contrast(${contrast}%) brightness(${brightness}%) hue-rotate(${color}deg)`,
                // marginTop: "-150vh",
                marginTop: "-180vh",
              }}
              // factor={3}
              factor={3.2}
              offset={1}
              speed={3.8}
            ></ParallaxLayer>

            {/* BOTTOM */}
            <ParallaxLayer
              style={{
                backgroundImage: addMountains ? `url(${lake})` : null,
                // backgroundImage: null,
                backgroundColor: nightMode ? "black" : plainColor1,

                backgroundSize: "cover",

                marginTop: "-350vh",
                // marginTop: "-350vh",
                // marginTop: "300px",
                // width: "100vw",
                // height: "1000px",
                filter: `saturate(${saturation}%) grayscale(${grayscale}%) contrast(${contrast}%) brightness(${brightness}%) hue-rotate(${color}deg)`,
              }}
              factor={1}
              offset={2}
              speed={3.8}
            ></ParallaxLayer>
            {/* Black Bottom */}
            <ParallaxLayer
              style={{
                marginTop: "-281vh",
                background: nightMode || addMountains ? "#060A0E" : plainColor1,
                // backgroundImage: addMountains ? `url(${lake})` : null,
                filter: `saturate(${saturation}%) grayscale(${grayscale}%) contrast(${contrast}%) brightness(${brightness}%) hue-rotate(${color}deg)`,
              }}
              factor={3.4}
              offset={2}
              speed={3.8}
            ></ParallaxLayer>

            <ParallaxLayer
              id={"clouds"}
              style={{
                backgroundImage: addClouds ? `url(${clouds3})` : null,
                backgroundSize: "cover",
                left: "50vw",
                filter: `saturate(${saturation}%) grayscale(${grayscale}%) contrast(${contrast}%) brightness(${brightness}%) hue-rotate(${color}deg)`,
                // filter: `saturate(${skySaturation}%) grayscale(${skyGrayscale}%) contrast(${skyContrast}%) brightness(${skyBrightness}%) hue-rotate(${skyColor}deg)`,
              }}
              factor={2}
              offset={0.4}
              speed={2.3}
            ></ParallaxLayer>

            <ParallaxLayer
              id={"clouds"}
              style={{
                backgroundImage: addClouds ? `url(${clouds3})` : null,
                backgroundSize: "cover",
                filter: `saturate(${saturation}%) grayscale(${grayscale}%) contrast(${contrast}%) brightness(${brightness}%) hue-rotate(${color}deg)`,
                // filter: `saturate(${skySaturation}%) grayscale(${skyGrayscale}%) contrast(${skyContrast}%) brightness(${skyBrightness}%) hue-rotate(${skyColor}deg)`,
              }}
              factor={2}
              offset={0.4}
              // speed={1.5}
              speed={2.5}
            ></ParallaxLayer>

            <ParallaxLayer
              id={"clouds"}
              style={{
                // backgroundImage: `url(${clouds3})`,
                backgroundImage: addClouds ? `url(${clouds3})` : null,
                backgroundSize: "contain",
                left: "-70vw",
                height: "200vh",
                width: "200vw",
                zIndex: 10000,
                filter: `saturate(${saturation}%) grayscale(${grayscale}%) contrast(${contrast}%) brightness(${brightness}%) hue-rotate(${color}deg)`,
                // filter: `saturate(${skySaturation}%) grayscale(${skyGrayscale}%) contrast(${skyContrast}%) brightness(${skyBrightness}%) hue-rotate(${skyColor}deg)`,
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
            display: "flex",
            justifyContent: "space-around",
            // filter: `saturate(${saturation}%) grayscale(${grayscale}%) contrast(${contrast}%) brightness(${brightness}%) hue-rotate(${color}deg)`,
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
                //  position: "float",
                //    right: "80px",
                //   top: "1000px"
              }}
            />
            ;
          </div>
          {/* <div
            id="about-me-layer"
            style={{ display: "flex", gap: "0px", alignItems: "flex-start", marginTop: "20vh", left: "100px" }}
          >
            <img
              alt="Patrick Kilcullen"
              className="profilePic"
              src={profilePic2}
              style={{
                float: "right", // Change to "right" if you want the image on the right
                margin: "0 20px 20px 0",
                // left: "100px",
                filter: `saturate(${
                  saturation - 200
                }%) contrast(${contrast}%) brightness(${brightness}%) grayscale(${grayscale}%) hue-rotate(${skyColor}deg)`,
                zIndex: 0,
              }}
            />
            <h1 className="homeAbout" style={{ width: "70vw" }}>
              {typedText}
            </h1>
          </div> */}
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
      </Parallax>
    </div>
  );
};

export default Home;
