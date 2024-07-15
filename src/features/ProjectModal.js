// import React from "react";
// import {Modal, Box  }from "@mui/material";

// const style = {
//   position: "absolute",
//   top: "50vh",
//   left: "50%",
//   transform: "translate(-50%, -50%)",
//   width: "75vw",
//   maxHeight: "90vh",
//   overflowY: "auto",
//   bgcolor: "background.paper",
//   border: "2px solid #000",
//   boxShadow: 24,
//   p: 4,
//   display: "flex",
//   flexDirection: "column",
//   alignItems: "center",
// };

// const ProjectModal = ({ project, open, setOpen, close }) => {

//   return (

//     <Modal open={open} onClose={close}>
//       <Box sx={style}>
//         <h1>{project.name}</h1>
//       </Box>
//     </Modal>

//   );
// };

// export default ProjectModal;

import React from "react";
import { Modal, Box, Button, IconButton } from "@mui/material";
import { Link } from "react-router-dom";
import CloseIcon from "@mui/icons-material/Close";

import YouTube from "react-youtube";
// const style = {
//   position: "absolute",
//   top: "50%",
//   left: "50%",
//   transform: "translate(-50%, -50%)",
//   width: "75vw",
//   maxHeight: "90vh",
//   overflowY: "auto",
// //   bgcolor: "background.paper",
//   border: "2px solid #000",
//   boxShadow: 24,
//   p: 4,
//   display: "flex",
//   flexDirection: "column",
//   alignItems: "center",
//   backgroundColor: "rgba(10, 10, 110)",
//   borderRadius: "25px",
//   display: "flex",
//   flexDirection: "column",
// };

const ProjectModal = ({ open, close, project, color }) => {
  const opts = {
    //   height: "390",
    //   width: "640",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "75vw",
    maxHeight: "90vh",
    overflowY: "auto",
    //   bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: color,
    borderRadius: "25px",
    display: "flex",
    flexDirection: "column",
    backgroundColor: "blue",
  };
  //  STLYE FOR CLOSE BUTTON
  const closeButtonStyle = {
    position: "sticky",
    height: "10px",
    top: "0px",
    left: "100%",
    zIndex: "9999",
  };

  console.log("color: ", color);
  return (
    <Modal open={open} onClose={close}>
      <Box sx={{ ...style, backgroundColor: color }}>
        
        <Box sx={closeButtonStyle}>
          <IconButton onClick={close}>
            <CloseIcon
              sx={{
                color: "black",
                backgroundColor: "white",
                borderRadius: "25px",
              }}
            />
          </IconButton>
        </Box>
        <h1 className="project-name">{project.name}</h1>
        {/* <div id="inner-project-container"> */}
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
            {/* <img
                className="projectPic"
                src={project.pic}
                alt="screenshot of project"
                style={{ float: project.align }}
              /> */}
            <YouTube
              // videoId="CF5TT-MY4oY"
              videoId={project.youTubeCode}
              opts={opts}
            ></YouTube>
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
            <Link to={project.demo} target="_blank" rel="noopener noreferrer">
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
            <Link to={project.code} target="_blank" rel="noopener noreferrer">
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
        {/* </div> */}
      </Box>
    </Modal>
  );
};

export default ProjectModal;
