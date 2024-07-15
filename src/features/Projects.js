// import React, {useState} from "react";
// import { Link } from "react-router-dom";
// import { projects } from "./projectInfo";

// import "../style/projects.css";
// import Button from "@mui/material/Button";



// import ProjectModal from "./ProjectModal";


// const Projects3 = () => {

//   const [openModal, setOpenModal] = useState(false);
//   const [selectedProject, setSelectedProject] = useState(null);

//   const handleOpenModal = (project) => {
//     setSelectedProject(project);
//     setOpenModal(true);
//   };

//   const handleCloseModal = () => {
//     setOpenModal(false);
//     setSelectedProject(null);
//   };
// return (
//     <div id="main-projects">
//       <div id="projectsPage">
//         <h1 className="projectsPageTitle">Projects</h1>

//         <div className="mainProjectContainer">
//           {projects.map((project, idx) => {
//             return (
//               <div
//                 style={{
//                   backgroundColor: "rgba(10, 10, 110, 0.1)",
//                   borderRadius: "25px",
//                   display: "flex",
//                   flexDirection: "column",
//                 }}
//                 onClick={handleOpenModal}
//               >
//                 <h1 className="project-name">{project.name}</h1>
//                 <div id="inner-project-container">
//                   <Link
//                     to={project.demo}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     id={
//                       project.align === "right"
//                         ? "projectPic-link-right"
//                         : "projectPic-link-left"
//                     }
//                   >
//                     <img
//                       className="projectPic"
//                       src={project.pic}
//                       alt="screenshot of project"
//                       style={{ float: project.align }}
//                     />
//                   </Link>

//                   <div className="projectAbout">{project.about}</div>
//                 </div>
//                 <div id="tech-and-buttons">
//                   <div
//                     className="project-tech"
//                     style={{
//                       float: project.align,

//                       order: project.align === "right" ? 1 : -1,
//                     }}
//                   >
//                     Tech Stack:{" "}
//                     {project.tech2.map((proj) => {
//                       return (
//                         <div
//                           style={{
//                             display: "flex",
//                             flexDirection: "column",
//                             alignItems: "center",
//                           }}
//                         >
//                           <img
//                             alt="language-icon"
//                             className="node-icon"
//                             src={proj.symbole}
//                             style={{ filter: "saturate(30%)" }}
//                           />
//                           <h1
//                             id="tech-text"
//                             style={{ color: "#d8a2a2", fontSize: "10px" }}
//                           >
//                             {proj.name}
//                           </h1>
//                         </div>
//                       );
//                     })}
//                   </div>

//                   <div className="buttons">
//                     <Link
//                       to={project.demo}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                     >
//                       {" "}
//                       <Button
//                         className="button"
//                         variant="contained"
//                         sx={{
//                           color: "#3e497a",
//                           backgroundColor: "#d8a2a2",
//                           fontWeight: "bold",
//                           fontSize: "23px",
//                           boxShadow: "4px 4px 8px 4px rgba(234, 238, 111, 0.5)",
//                           borderRadius: "20px",
//                           border: "2px solid white",
//                           zIndex: 1000,
//                         }}
//                       >
//                         {" "}
//                         Demo
//                       </Button>
//                     </Link>
//                     <Link
//                       to={project.code}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                     >
//                       {" "}
//                       <Button
//                         className="button"
//                         variant="contained"
//                         sx={{
//                           color: "#3e497a",
//                           backgroundColor: "#d8a2a2",
//                           fontWeight: "bold",
//                           fontSize: "23px",
//                           boxShadow: "4px 4px 8px 4px rgba(234, 238, 111, 0.5)",
//                           borderRadius: "20px",
//                           border: "2px solid white",
//                           zIndex: 1000,
//                         }}
//                       >
//                         {" "}
//                         Code
//                       </Button>
//                     </Link>
//                   </div>
//                 </div>
//                 <ProjectModal
//                   project={project}
//                   open={openModal}
//                   setOpen={setOpenModal}
//                  close={handleCloseModal}
//                 />
//               </div>
//             );
//           })}
//         </div>
//         {/* </div> */}
//       </div>
//     </div>
//   );
// };

// export default Projects3;


import React, { useState } from "react";
import { Link } from "react-router-dom";
import { projects } from "./projectInfo";
import "../style/projects.css";
import Button from "@mui/material/Button";
import ProjectModal from "./ProjectModal";

const Projects3 = ({ color }) => {
  const [openModal, setOpenModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const handleOpenModal = (project) => {
    setSelectedProject(project);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
    // setSelectedProject(null);
  };

  return (
    <div id="main-projects">
      <div id="projectsPage">
        <h1 className="projectsPageTitle">Projects</h1>
        <div className="mainProjectContainer">
          {projects.map((project, idx) => {
            return (
              <div
                key={idx}
                style={{
                  backgroundColor: openModal ? color : "rgba(10, 10, 110, 0.1)",
                  borderRadius: "25px",
                  display: "flex",
                  flexDirection: "column",
                }}
                onClick={() => handleOpenModal(project)}
              >
                <h1 className="project-name">{project.name}</h1>
                <div id="inner-project-container">
                  <Link
                    to={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    id={
                      project.align === "right"
                        ? "projectPic-link-right"
                        : "projectPic-link-left"
                    }
                  >
                    <img
                      className="projectPic"
                      src={project.pic}
                      alt="screenshot of project"
                      style={{ float: project.align }}
                    />
                  </Link>

                  <div className="projectAbout">{project.about}</div>
                  {/* {project.about} */}
                </div>
                <div id="tech-and-buttons">
                  <div
                    className="project-tech"
                    style={{
                      float: project.align,
                      order: project.align === "right" ? 1 : -1,
                    }}
                  >
                    Tech Stack:{" "}
                    {project.tech2.map((proj, index) => {
                      return (
                        <div
                          key={index}
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                          }}
                        >
                          <img
                            alt="language-icon"
                            className="node-icon"
                            src={proj.symbole}
                            style={{ filter: "saturate(30%)" }}
                          />
                          <h1
                            id="tech-text"
                            style={{ color: "#d8a2a2", fontSize: "10px" }}
                          >
                            {proj.name}
                          </h1>
                        </div>
                      );
                    })}
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
          {selectedProject && (
            <ProjectModal
              project={selectedProject}
              open={openModal}
              close={handleCloseModal}
              color={color}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Projects3;
