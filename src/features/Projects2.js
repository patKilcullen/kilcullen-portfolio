import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { projects } from "./projectInfo";

import "../style/projects.css";
import Button from "@mui/material/Button";

const Projects2 = () => {
  // useEffect(() => {
  //   window.scrollTo(0, 0); // Scroll to the top of the page when component renders
  // }, []);
  return (
    <div id="main">
 
      <div id="projectsPage">
        <h1 className="projectsPageTitle">Projects</h1>

        {/* <div id="mainContent"> */}

        <div className="mainProjectContainer">
          {projects.map((project, idx) => {
            return (
              <div className="projectContainer" key={idx}>
                <div className="name">{project.name}</div>
                <div className="description">{project.description}</div>
                <Link
                  to={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  <img
                    className="projectPic"
                    src={project.pic}
                    alt="screenshot of project"
                  />
                </Link>
                {/* <img className='projectPic' src={project.pic} alt="screenshot of project"/> */}
                <div className="projectAbout"> {project.about}</div>
                <div className="buttons">
                  <Link
                    to={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {" "}
                    <Button
                      onClick={() => {
                        console.log("FAGGOTTTTTTTTTT");
                      }}
                      className="button"
                      variant="contained"
                      sx={{
                        color: "#3e497a",
                        backgroundColor: "#d8a2a2",
                        fontWeight: "bold",
                        fontSize: "23px",
                        boxShadow: "4px 4px 8px 4px rgba(234, 238, 111, 0.5)",
                        borderRadius: "20px",
                        border: "2px solid white",
                        zIndex: 1000,
                      }}
                    >
                      {" "}
                      Demo
                    </Button>
                  </Link>
                  <Link
                    to={project.code}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {" "}
                    <Button
                      className="button"
                      variant="contained"
                      sx={{
                        color: "#3e497a",
                        backgroundColor: "#d8a2a2",
                        fontWeight: "bold",
                        fontSize: "23px",
                        boxShadow: "4px 4px 8px 4px rgba(234, 238, 111, 0.5)",
                        borderRadius: "20px",
                        border: "2px solid white",
                        zIndex: 1000,
                      }}
                    >
                      {" "}
                      Code
                    </Button>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
        {/* </div> */}
      </div>
    </div>
  );
};

export default Projects2;
