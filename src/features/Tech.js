import React from "react";
import '../style/home.css'

// import nodeIcon from '../icons8-nodejs-48.png'
 import javascriptIcon from "../icons8-javascript-48.png"
import reactIcon from "../logo192.png"
import reduxIcon from '../icons8-redux-an-open-source-javascript-library-for-managing-application-state-24.png'
import postgresIcon from '../icons8-postgresql-48.png'
import htmlIcon from"../icons8-html5-48.png"
import cssIcon from '../icons8-css-48.png'
import nodeSVG from '../node-js.svg'
import materialIcon from  '../icons8-material-ui-48.png'
import sequelizeIcon from '../sequelize.svg'
import expressIcon from '../icons8-express-js-64.png'



import JavascriptIcon from "@mui/icons-material/Javascript";


const Tech = () => {



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

    { symbole: javascriptIcon, name: "JavaScript" },
  ];

 



  return (
    // <div style={{ width: "20vw" }}>
    //   {/* <hr className="divider" /> */}
    //   <div style={{ width: "500px" }}></div>
    //   <div className="tech" style={{ left: "100vw", width: "50vw" }}>
    //     <div style={{display: "flex", flexWrap: "wrap"}}>
    //       {symbols.map((symbol) => {
    //         return (
    //           <div style={{ display: "flex", alignItems: "center" }}>
    //             <img
    //               alt="language-icon"
    //               className="node-icon"
    //               src={symbol.symbole}
    //               style={{ height: "60px", color: "#d8a2a2" }}
    //             />
    //             <h1 style={{ color: "#d8a2a2" }}>{symbol.name}</h1>
    //           </div>
    //         );
    //       })}
    //     </div>
    //   </div>
    // </div>

    <div style={{ width: "20vw" }}>
      {/* <hr className="divider" /> */}
      <div style={{ width: "500px" }}></div>
      <div className="tech" style={{ left: "100vw", width: "50vw" }}>
        <div style={{ display: "flex", flexDirection: "column" }}>
          {symbols.map((symbol) => {
            return (
              <div style={{ display: "flex", alignItems: "center" }}>
                <img
                  alt="language-icon"
                  className="node-icon"
                  src={symbol.symbole}
                  style={{ height: "80px",   filter: "saturate(30%)" }}
                />
                <h1 style={{ color: "#d8a2a2", fontSize: "40px" }}>{symbol.name}</h1>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};




export default Tech;
