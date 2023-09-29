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



const Tech = () => {



 



  return (
    <div  style={{ width: "20vw" }}>
    

        {/* <hr className="divider" /> */}
        <div className="tech" style={{left: "100vw", width: "50vw" }}>
          <h2 className="techIntro">
            I've build applications using a variety of technologies,
            inclucing...
            <h3
              style={{
                display: "flex",
                flexDirection: "row",
                flexWrap: "wrap",
                alignItems: "flex-end",
              }}
            >
              <div>
                <img
                  alt="language-icon"
                  className="language-icon"
                  src={javascriptIcon}
                  style={{ height: "60px" }}
                />
                Javascript,{" "}
              </div>
              <div>
                {" "}
                <img
                  alt="language-icon"
                  className="node-icon"
                  src={nodeSVG}
                  style={{ height: "60px" }}
                />
                Node.js,{" "}
              </div>
              <div>
                <img
                  alt="language-icon"
                  className="node-icon"
                  src={reactIcon}
                  style={{ height: "60px" }}
                />
                React,{" "}
              </div>
              <div>
                {" "}
                <img
                  alt="language-icon"
                  className="node-icon"
                  src={reduxIcon}
                  style={{ height: "60px" }}
                />
                Redux,{" "}
              </div>
              <div>
                {" "}
                <img
                  alt="language-icon"
                  className="node-icon"
                  src={postgresIcon}
                  style={{ height: "60px" }}
                />
                PostgreSQL,{" "}
              </div>
              <div>
                <img
                  alt="language-icon"
                  className="node-icon"
                  src={sequelizeIcon}
                  style={{ height: "60px" }}
                />
                Sequelize,{" "}
              </div>
              <div>
                <img
                  alt="language-icon"
                  className="node-icon"
                  src={expressIcon}
                  style={{ height: "60px" }}
                />
                Express,{" "}
              </div>
              <div>
                <img
                  alt="language-icon"
                  className="node-icon"
                  src={materialIcon}
                  style={{ height: "60px" }}
                />
                MaterialUI,{" "}
              </div>
              <div>
                {" "}
                <img
                  alt="language-icon"
                  className="node-icon"
                  src={htmlIcon}
                  style={{ height: "60px" }}
                />
                HTML,{" "}
              </div>
              <div>
                <img
                  alt="language-icon"
                  className="node-icon"
                  src={cssIcon}
                  style={{ height: "60px" }}
                />{" "}
                CSS{" "}
              </div>
            </h3>
          </h2>
        </div>

   
      </div>

  );
};




export default Tech;
