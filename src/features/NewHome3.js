import React from "react";

import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import Home from "./Home";
import Home2 from "./Home2";
import Projects from "./Projects2";
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
      <Parallax pages={4}>
        {/* <ParallaxLayer
          style={{
            backgroundImage: `url(${moon3})`,
            backgroundSize: "cover",
            // backgroundPosition: "center",
          }}
          offset={0}
          factor={3}
          speed={0}
        ></ParallaxLayer>

        <ParallaxLayer
          offset={2}
          speed={1}
          style={{ backgroundImage: `url(${sky4})`, backgroundSize: "cover" }}
          factor={3}
        ></ParallaxLayer> */}

        {/* <ParallaxLayer
          style={{
            backgroundImage: `url(${stars})`,
             backgroundSize: "cover",
            // backgroundPosition: "center",
          }}
          offset={0}
          factor={2}
          speed={0}
        ></ParallaxLayer>

        <ParallaxLayer
          offset={2}
          factor={.5}
          style={{ background: `linear-gradient(to bottom, black, #080A1E)` }}
        ></ParallaxLayer>

        <ParallaxLayer
          offset={2.5}
          speed={0}
          style={{ backgroundImage: `url(${sky4})`, backgroundSize: "cover" }}
          factor={3}
        ></ParallaxLayer> */}

        <ParallaxLayer
          style={{ backgroundImage: `url(${ai})`, backgroundSize: "cover" }}
          factor={3}
        ></ParallaxLayer>

        <ParallaxLayer
          offset={3}
          factor={1}
          style={{ backgroundColor: "black" }}
        ></ParallaxLayer>
        <ParallaxLayer
          sticky={{ start: 0.3, end: 4 }}
          speed={1}
          style={{ left: "-20vw" }}
        >
          <div style={{ backgroundColor: "black" }}>
            <span className="name-in-text-left">Patrick </span>
            <span>" "</span>
            <span className="name-in-text-right">Kilcullen</span>
          </div>
        </ParallaxLayer>
        {/* <ParallaxLayer
          sticky={{ start: 0.4, end: 0.1 }}
          speed={1}
          style={{ width: "30vw", left: "-20vw" }}
        >
          <div style={{ backgroundColor: "black" }}>
            <span className="name-in-text-left">Software Engineer</span>
            
            
          </div>
        </ParallaxLayer> */}

        {/* <ParallaxLayer
          sticky={{ start: 0.4, end: 0.1 }}
          speed={1}
          style={{ width: "0vw", left: "20vw" }}
        >
          <div style={{ backgroundColor: "black" }}>
            <img src={bmoon} />
          </div>
        </ParallaxLayer> */}

        <ParallaxLayer
          offset={0.9}
          speed={1.5}
          style={{ textAlign: "center", left: "25vw" }}
        >
          <Home2></Home2>
        </ParallaxLayer>

        <ParallaxLayer offset={1} speed={1.7} style={{ left: "10vw" }}>
          <Tech></Tech>
        </ParallaxLayer>

        <ParallaxLayer
          sticky={{ start: 1.4, end: 4 }}
          // style={{ textAlign: "center", left: "-300px" }}
        >
          <SideNav></SideNav>
        </ParallaxLayer>

        <ParallaxLayer
          offset={1.5}
          factor={2}
          speed={1}
          style={{ zIndex: 10 }}
          //  sticky={{ start: 1.4, end: 1.4 }}
        >
          <div style={{ zIndex: 100 }}>
            <Projects></Projects>
          </div>
        </ParallaxLayer>

        <ParallaxLayer offset={2} factor={1} speed={2}>
          <Experience2></Experience2>
        </ParallaxLayer>
      </Parallax>
    </div>
  );
};

export default NewHome2;
