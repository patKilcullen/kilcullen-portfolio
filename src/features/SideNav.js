import React from 'react'
import { Email, GitHub, LinkedIn, Person } from '@material-ui/icons'
import "../style/sideBar.css"

const SideNav = () => {




  return (
    <div className="sideBar" style={{ zIndex: "1000000" }}>
      <div
        className="socialMedia"

      >
        <p style={{marginLeft: "10px"}}>Connect:</p>

        <a
          href="https://github.com/patKilcullen"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "red" }}
        >
          {" "}
          <GitHub style={{ color: "#d8a2a2" }} className="link-icon" />
          <span className="hover-text">GitHub</span>
        </a>
        <a
          href="https://www.linkedin.com/in/patrick-kilcullen-264ba61a4/"
          target="_blank"
          rel="noopener noreferrer"
        >
          {" "}
          <LinkedIn style={{ color: "#d8a2a2" }} />
          <span className="hover-text">LinkedIn</span>
        </a>
        <a href="mailto:patrickjkilcullen@gmail.com">
          <Email style={{ color: "#d8a2a2" }} />
          <span className="hover-text">Email</span>
        </a>
        <a
          href="/Patrick-Kilcullen_Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          {" "}
          {/* <Box> */}
          <Person style={{ color: "#d8a2a2" }} />
          <span className="hover-text">Resume</span>
          {/* </Box> */}
        </a>
      </div>
    </div>
  );
}

export default SideNav