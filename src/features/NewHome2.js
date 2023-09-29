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
      <Parallax pages={6} style={{ zIndex: 2 }}>
        <ParallaxLayer
          style={{ backgroundImage: `url(${ai})`, backgroundSize: "cover" }}
          factor={5}
        ></ParallaxLayer>

        <ParallaxLayer
          offset={3}
          factor={1}
          style={{ backgroundColor: "black" }}
        ></ParallaxLayer>
        <ParallaxLayer
          sticky={{ start: 0.3, end: 4 }}
          speed={1}
          style={{ left: "-20vw", zIndex: 10 }}
        >
          <div style={{ backgroundColor: "black", fontSize: "8vh" }}>
            <span
              style={{ backgroundColor: "black", fontSize: "10vh" }}
              className="name-in-text-left"
            >
              Patrick{" "}
            </span>
            <span>" "</span>
            <span
              style={{
                backgroundColor: "black",
                fontSize: "10vh",
                alignItems: "center",
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
          speed={2}
          factor={1}
          style={{ textAlign: "center", left: "25vw" }}
        >
          <Home2></Home2>
        </ParallaxLayer>
        <ParallaxLayer
          offset={.9}
          speed={3}
          factor={0.5}
          style={{ left: "45vw", marginTop:"800px" }}
        >
          
          <Tech></Tech>
      
        </ParallaxLayer>

        <ParallaxLayer sticky={{ start: 1.4, end: 4 }}>
          <SideNav></SideNav>
        </ParallaxLayer>

        <ParallaxLayer
          // offset={2}
          // factor={1}
          // speed={2}
          sticky={{ start: 1.3, end: 1.3 }}
          style={{ zIndex: 20 }}
        >
          <Projects2></Projects2>
        </ParallaxLayer>

        <ParallaxLayer offset={2} factor={1} speed={2}>
          <Experience2></Experience2>
        </ParallaxLayer>
      </Parallax>
    </div>
  );
};

export default NewHome2;
