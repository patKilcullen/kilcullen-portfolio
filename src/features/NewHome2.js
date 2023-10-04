import React from "react";

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
import computer from "./computer.png";
import clouds from "./clouds.png";
import clouds2 from "./clouds2.png";
import clouds3 from "./clouds3.png";
import clouds4 from "./clouds4.png";


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
const NewHome2 = () => {
  return (
    <div>
      NewHome
      <Parallax pages={3} style={{ zIndex: 2 }}>
        <ParallaxLayer
          offset={0.9}
          factor={1}
          speed={2}
          // sticky={{ start: 1, end: 0.5 }}
          style={{ zIndex: 100, left: "-20vw", marginTop: "1000px" }}
        >
          <Projects2></Projects2>
        </ParallaxLayer>

        <ParallaxLayer
          style={{ backgroundImage: `url(${ai})`, backgroundSize: "cover" }}
          factor={3.1}
          speed={1 / 5}
        ></ParallaxLayer>

        <ParallaxLayer
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
          style={{
            backgroundImage: `url(${clouds3})`,
            backgroundSize: "cover",
          }}
          factor={2}
          offset={0.9}
          speed={1.5}
        ></ParallaxLayer>

        <ParallaxLayer
          style={{
            backgroundImage: `url(${mountains})`,
            backgroundSize: "cover",
          }}
          factor={4}
          offset={1}
          speed={2.7}
        ></ParallaxLayer>

        <ParallaxLayer
          style={{
            backgroundImage: `url(${clouds3})`,
            backgroundSize: "cover",
            left: "-30vw",
          }}
          factor={2}
          offset={1.4}
          speed={1.5}
        ></ParallaxLayer>

        <ParallaxLayer
          style={{
            backgroundImage: `url(${trees})`,
            backgroundSize: "cover",
          }}
          factor={3}
          offset={1.9}
          speed={1.7}
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

        <ParallaxLayer
          style={{
            backgroundImage: `url(${computer})`,
            backgroundSize: "contain",
          }}
          factor={2}
          offset={2}
          speed={1.3}
        ></ParallaxLayer>

        <ParallaxLayer
          sticky={{ start: 0.3, end: 0.3 }}
          speed={1}
          style={{ zIndex: 30 }}
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
            <span>" "</span>
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
          sticky={{ start: 0.45, end: 0.4 }}
          speed={1}
          style={{ left: "20vw" }}
        >
          <div style={{}}>
            <span className="name-in-text-left">Software Developer</span>
          </div>
        </ParallaxLayer>

        <ParallaxLayer
          offset={0.9}
          speed={1.8}
          factor={1}
          style={{ textAlign: "center", left: "25vw" }}
        >
          <Home2></Home2>
        </ParallaxLayer>
        <ParallaxLayer
          offset={0.9}
          speed={1}
          factor={0.5}
          style={{ left: "45vw", marginTop: "800px" }}
        >
          <Tech></Tech>
        </ParallaxLayer>

        {/* <ParallaxLayer sticky={{ start: 2, end: 4 }}>
          <SideNav></SideNav>
        </ParallaxLayer> */}

        {/* <ParallaxLayer
          offset={2.8}
          factor={1}
          speed={1.5}
          style={{ zIndex: 30 }}
        >
          <Experience2></Experience2>
        </ParallaxLayer> */}
      </Parallax>
    </div>
  );
};

export default NewHome2;
