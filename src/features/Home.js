import React, { useState, useRef } from "react";

import { Parallax, ParallaxLayer } from "@react-spring/parallax";

import Projects from "./Projects";

import SideNav from "./SideNav";
import Tech from "./Tech";
import EditDesign from "./EditDesign";

import profilePic2 from "../profile-pic.jpeg";
import mountains from "./backgrounds/mountains.png";
import clouds3 from "./backgrounds/clouds3.png";
import lake from "./backgrounds/lake.png";
import newMoon from "./backgrounds/newMoon.png";


import {Box, Button} from "@mui/material";

const Home = () => {
  const projectsSectionRef = useRef(null);

  const textToType =
    "I'm a full stack software developer based in Chicago, Il. I think of Software development as a creative outlet, and I’m passionate about bringing unique and innovative ideas to life. Beyond coding, I enjoy writing, reading, movies, and cooking.";


  const typedText = textToType;


  const [saturation, setSaturation] = useState(300);
  const handleSaturation = (e) => {
    setSaturation(e.target.value);
  };

  const [grayscale, setGrayscale] = useState(20);
  const handlegrayscale = (e) => {
    setGrayscale(e.target.value);
  };

  const [contrast, setContrast] = useState(130);
  const handleContrast = (e) => {
    setContrast(e.target.value);
  };

  const [brightness, setBrightness] = useState(70);
  const handleBrightness = (e) => {
    setBrightness(e.target.value);
  };

    const [plainColor1, setPlainColor1] = useState("#858CAA");

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
              style={{
                color: "white",
                backgroundColor: "rgba(0, 0, 0, 0.2)",
                fontSize: "20px",
                marginRight: "5px",
              }}
            >
              Don't like my background? Click here to:
              <Button
                sx={{ fontSize: "25px", fontWeight: "bold" }}
                onClick={handleShowEdit}
              >
                Edit
              </Button>
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
                backgroundClip: "rgba(5, 12, 44, 0.5",
                marginTop: "-1%",
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
              background: plainColor1,
              filter: `saturate(${saturation}%) grayscale(${grayscale}%) contrast(${contrast}%) brightness(${brightness}%) hue-rotate(${color}deg)`, // filter: `saturate(${skySaturation}%) grayscale(${skyGrayscale}%) contrast(${skyContrast}%) brightness(${skyBrightness}%) hue-rotate(${color}deg)`,
            }}
            factor={5.5}
            speed={1.5}
          ></ParallaxLayer>
        ) : (
          <>
            <ParallaxLayer
              style={{
                backgroundImage: nightMode ? `url(${newMoon})` : null,
                backgroundColor: nightMode ? "black" : plainColor1,

                backgroundSize: "cover",
                filter: `saturate(${saturation}%) grayscale(${grayscale}%) contrast(${contrast}%) brightness(${brightness}%) hue-rotate(${color}deg)`,
              }}
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
                backgroundColor: nightMode ? "black" : plainColor1,

                backgroundSize: "cover",

                marginTop: "-350vh",
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
                filter: `saturate(${saturation}%) grayscale(60%) contrast(${contrast}%) brightness(${brightness}%) hue-rotate(${color}deg)`,
              }}
              factor={2}
              offset={0.4}
              speed={2.5}
            ></ParallaxLayer>

            <ParallaxLayer
              id={"clouds"}
              style={{
                backgroundImage: addClouds ? `url(${clouds3})` : null,
                backgroundSize: "contain",
                left: "-70vw",
                height: "200vh",
                width: "200vw",
                zIndex: 10000,
                filter: `saturate(${saturation}%) grayscale(${grayscale}%) contrast(${contrast}%) brightness(${brightness}%) hue-rotate(${color}deg)`,
              }}
              offset={0.9}
              speed={0.8}
            ></ParallaxLayer>

            {/* MOIUNTIAN CLOUDS */}
            <ParallaxLayer
              id={"clouds"}
              style={{
                backgroundImage: addClouds ? `url(${clouds3})` : null,
                backgroundSize: "contain",
                left: "-70vw",
                height: "200vh",
                width: "200vw",
                zIndex: 10000,
                filter: `saturate(${saturation}%) grayscale(${grayscale}%) contrast(${contrast}%) brightness(${brightness}%) hue-rotate(${color}deg)`,
              }}
              offset={1}
              speed={0.8}
            ></ParallaxLayer>
            <ParallaxLayer
              id={"clouds"}
              style={{
                backgroundImage: addClouds ? `url(${clouds3})` : null,
                backgroundSize: "contain",
                left: "20vw",
                height: "200vh",
                width: "200vw",
                zIndex: 10000,
                filter: `saturate(${saturation}%) grayscale(70%) contrast(${contrast}%) brightness(${brightness}%) hue-rotate(${color}deg)`,
              }}
              offset={0.9}
              speed={0.9}
            ></ParallaxLayer>
            <ParallaxLayer
              id={"clouds"}
              style={{
                backgroundImage:
                  addClouds && !addMountains ? `url(${clouds3})` : null,
                backgroundSize: "contain",
                left: "-30vw",
                height: "200vh",
                width: "200vw",
                zIndex: 10000,
                filter: `saturate(${saturation}%) grayscale(${grayscale}%) contrast(${contrast}%) brightness(${brightness}%) hue-rotate(${color}deg)`,
              }}
              offset={1.2}
              speed={0.8}
            ></ParallaxLayer>
            <ParallaxLayer
              id={"clouds"}
              style={{
                backgroundImage:
                  addClouds && !addMountains ? `url(${clouds3})` : null,
                backgroundSize: "contain",
                left: "60vw",
                height: "200vh",
                width: "200vw",
                zIndex: 10000,
                filter: `saturate(${saturation}%) grayscale(70%) contrast(${contrast}%) brightness(${brightness}%) hue-rotate(${color}deg)`,
              }}
              offset={1.6}
              speed={1}
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
              }}
            />
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
          speed={1.5}
          id="projects-layer"
          style={{
            zIndex: 10001,
          }}
        >
          <div ref={projectsSectionRef}>
            <Projects color={plainColor1}></Projects>
          </div>
        </ParallaxLayer>
      </Parallax>
    </div>
  );
};

export default Home;


