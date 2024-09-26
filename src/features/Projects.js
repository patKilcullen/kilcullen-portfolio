import React, { useState } from "react";
import { Link } from "react-router-dom";
import { projects } from "./projectInfo";
import "../style/projects.css";
import Button from "@mui/material/Button";
import ProjectModal from "./ProjectModal";

const Projects3 = ({ color, setHideNav, textColor }) => {
  const [openModal, setOpenModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const handleOpenModal = (project) => {
    setSelectedProject(project);
    setOpenModal(true);
    setHideNav(true)
  };

  const handleCloseModal = () => {
    setOpenModal(false);
    setSelectedProject(null);
     setHideNav(false);
  };

  return (
    <div id="main-projects">
      <div id="projectsPage">
        <h1 className="projectsPageTitle" style={{color: textColor}}>
          Projects
        </h1>
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
                // onClick={() => handleOpenModal(project)}
              >
                <h1 className="project-name" style={{ color: textColor }}>
                  {project.name}
                </h1>
                <div style={{ color: textColor }} id="inner-project-container">
                  <Link
                    to={project.liveSite ? project.liveSite : project.demo}
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

                  <div className="projectAbout" style={{ color: textColor }}>
                    {project.about}
                  </div>
                  {/* {project.about} */}
                </div>
                <div id="tech-and-buttons">
                  <div
                    className="project-tech"
                    style={{
                      float: project.align,
                      order: project.align === "right" ? 1 : -1,
                      color: textColor,
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
                            style={{ color: textColor, fontSize: "10px" }}
                          >
                            {proj.name}
                          </h1>
                        </div>
                      );
                    })}
                  </div>

                  <div>
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
                          backgroundColor: textColor,
                          fontWeight: "bold",
                          fontSize: "23px",
                          boxShadow: "4px 4px 8px 4px rgba(234, 238, 111, 0.5)",
                          borderRadius: "20px",
                          border: "2px solid white",
                          zIndex: 1000,
                        }}
                        disabled={project.name === "ProposalAI"}
                      >
                        {" "}
                        Demo
                      </Button>
                    </Link>
                    <Link
                      to={project.liveSite ? project.liveSite : project.code}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {" "}
                      <Button
                        className="button"
                        variant="contained"
                        sx={{
                          color: "#3e497a",
                          // backgroundColor: "#d8a2a2",
                          backgroundColor: textColor,
                          fontWeight: "bold",
                          fontSize: "23px",
                          boxShadow: "4px 4px 8px 4px rgba(234, 238, 111, 0.5)",
                          borderRadius: "20px",
                          border: "2px solid white",
                          zIndex: 1000,
                        }}
                      >
                        {" "}
                        {/*  */}
                        {project.liveSite ? "Link" : "Code"}
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
