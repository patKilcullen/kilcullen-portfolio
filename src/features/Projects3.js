import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { projects } from "./projectInfo";

import "../style/projects3.css";
import Button from "@mui/material/Button";

const Projects3 = () => {
  // useEffect(() => {
  //   window.scrollTo(0, 0); // Scroll to the top of the page when component renders
  // }, []);
  return (
    // <div id="main">
    //   <div id="projectsPage">
    //     <h1 className="projectsPageTitle">Projects</h1>

    //     {/* <div id="mainContent"> */}

    //     <div className="mainProjectContainer">
    //       {projects.map((project, idx) => {
    //         return (
    //           <div className="projectContainer" key={idx}>
    //             <div className="name">{project.name}</div>


    //             <div className="inner-project-container">
    //               <Link
    //                 to={project.demo}
    //                 target="_blank"
    //                 rel="noopener noreferrer"
    //               >
    //                 {" "}
    //                 <img
    //                   className="projectPic"
    //                   src={project.pic}
    //                   alt="screenshot of project"
    //                 />
    //               </Link>

    //               {/* <img className='projectPic' src={project.pic} alt="screenshot of project"/> */}

    //               <div className="projectAbout">
    //                 {" "}
    //                 {project.about}
    //                 <div className="description">{project.description}</div>
    //                 <div className="buttons">
    //                   <Link
    //                     to={project.demo}
    //                     target="_blank"
    //                     rel="noopener noreferrer"
    //                   >
    //                     {" "}
    //                     <Button
    //                       className="button"
    //                       variant="contained"
    //                       sx={{
    //                         color: "#3e497a",
    //                         backgroundColor: "#d8a2a2",
    //                         fontWeight: "bold",
    //                         fontSize: "23px",
    //                         boxShadow:
    //                           "4px 4px 8px 4px rgba(234, 238, 111, 0.5)",
    //                         borderRadius: "20px",
    //                         border: "2px solid white",
    //                         zIndex: 1000,
    //                       }}
    //                     >
    //                       {" "}
    //                       Demo
    //                     </Button>
    //                   </Link>
    //                   <Link
    //                     to={project.code}
    //                     target="_blank"
    //                     rel="noopener noreferrer"
    //                   >
    //                     {" "}
    //                     <Button
    //                       className="button"
    //                       variant="contained"
    //                       sx={{
    //                         color: "#3e497a",
    //                         backgroundColor: "#d8a2a2",
    //                         fontWeight: "bold",
    //                         fontSize: "23px",
    //                         boxShadow:
    //                           "4px 4px 8px 4px rgba(234, 238, 111, 0.5)",
    //                         borderRadius: "20px",
    //                         border: "2px solid white",
    //                         zIndex: 1000,
    //                       }}
    //                     >
    //                       {" "}
    //                       Code
    //                     </Button>
    //                   </Link>
    //                 </div>
    //               </div>
    //             </div>
    //           </div>
    //         );
    //       })}
    //     </div>
    //     {/* </div> */}
    //   </div>
    // </div>













     <div id="main-projects">
      <div id="projectsPage">
        <h1 className="projectsPageTitle">Projects</h1>

        {/* <div id="mainContent"> */}

        <div className="mainProjectContainer">
          {projects.map((project, idx)=>{
            return (
              <div
                style={{
                  backgroundColor: "rgba(10, 10, 110, 0.1)",
                  borderRadius: "25px",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <h1 className="project-name">{project.name}</h1>
                <div id="inner-project-container">
                  <Link
                    to={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      className="projectPic"
                      src={project.pic}
                      alt="screenshot of project"
                      style={{ float: project.align }}
                    />
                  </Link>

                  <div className="projectAbout">{project.about}</div>
                </div>
                <div id="tech-and-buttons">
                  <div id="project-tech" style={{ float: project.align, display: "flex", alignItems: "center", gap: "15px", marginTop: "15px" }}>
                    {/* Tech: {project.tech} */}
                    Tech Stack: {
                      project.tech2.map((proj)=>{
                        return (
                          <div
                            style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
                            // id="tech-list"
                          >
                            <img
                              alt="language-icon"
                              
                              className="node-icon"
                              src={proj.symbole}
                              style={{ filter: "saturate(30%)", height: "30px" }}
                            />
                            <h1 id="tech-text" style={{ color: "#d8a2a2", fontSize: "10px" }}>
                              {proj.name}
                            </h1>
                          </div>
                        );
                      })
                    }
                  </div>

                  <div className="buttons">
                    <Link
                      to={project.demo}
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
              </div>
            );
          })}
        </div>
        {/* </div> */}
      </div>
    </div>
  );
};

export default Projects3;
