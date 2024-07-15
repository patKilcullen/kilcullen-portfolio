import React, { useEffect, useState } from "react";
import "../style/home.css";

import javascriptIcon from "../javascriptLogo.png";
import reactIcon from "../reactLogo.png";
import reduxIcon from "../reduxLogo.png";
import postgresIcon from "../postgreSQLLogo.png";
import htmlIcon from "../htmlLogo.png";
import cssIcon from "../cssLogo.png";
import nodeSVG from "../node-js.svg";
import materialIcon from "../materialUILogo.png";
import sequelizeIcon from "../sequelize.svg";
import expressIcon from "../expressLogo.png";
import mongoDCIcon from "../mongodb-svgrepo-com.svg"
// import jwtIcon from "../jwtLogo.png";

import { useInView } from "react-intersection-observer";

const Tech = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });

  let symbols = [
    { symbole: javascriptIcon, name: "JavaScript" },
    { symbole: reactIcon, name: "React" },
    { symbole: reduxIcon, name: "Redux" },
    { symbole: postgresIcon, name: "PostgreSQL" },
    { symbole: htmlIcon, name: "HTML" },
    { symbole: cssIcon, name: "CSS" },
    { symbole: nodeSVG, name: "Node" },
    { symbole: materialIcon, name: "Material UI" },
    { symbole: sequelizeIcon, name: "Sequelize" },
    { symbole: expressIcon, name: "Express" },
    { symbole: mongoDCIcon, name: "MongoDB" },
  ];

  const [slide, setSlide] = useState(false);

  useEffect(() => {
    if (inView) {
      console.log("IN VIEWWW");
      setSlide(true);
    }
  }, [inView]);

  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <h1
        ref={ref}
        className="tech-text"
        style={{
          animation: slide ? "slideInAnimationLeft 1s forwards" : null,
          visibility: !inView ? "hidden" : null,
        }}
      >
        {" "}
        I have experience working with a range of technologies and an tools,
        including...
      </h1>
      <div className="tech">
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
          }}
        >
          {symbols.map((symbol) => {
            return (
              <div
                style={{ display: "flex", alignItems: "center" }}
                id="tech-list"
              >
                <img
                  alt="language-icon"
                  className="node-icon"
                  src={symbol.symbole}
                  style={{ filter: "saturate(30%)" }}
                />
                <h1 id="tech-text" style={{ color: "#d8a2a2" }}>
                  {symbol.name}
                </h1>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Tech;
