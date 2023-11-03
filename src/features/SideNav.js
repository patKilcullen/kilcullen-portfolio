import React from 'react'
import { Email, GitHub, LinkedIn, Person } from '@material-ui/icons'
import "../style/sideBar.css"

const SideNav = () => {


 const handleDownload = async () => {
   try {
     const response = await fetch("/Patrick-Kilcullen_Resume.pdf");
     const blob = await response.blob();
     const blobUrl = URL.createObjectURL(blob);

     const link = document.createElement("a");
     link.href = blobUrl;
     link.download = "Patrick-Kilcullen_Resume.pdf"; // Change the desired file name.

     document.body.appendChild(link);
     link.click();

     URL.revokeObjectURL(blobUrl);
     document.body.removeChild(link);
   } catch (error) {
     console.error("Error downloading the file:", error);
   }
 };




  return (
    // <div id="sideBar">
    <div className="sideBar" style={{ zIndex: "1000000" }}>
      <div className="socialMedia">
        <p>Connect with me:</p>
        <hr className="divider" />
        <a
          href="https://github.com/patKilcullen?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "red" }}
        >
          {" "}
          <GitHub style={{ color: "#d8a2a2" }} className="link-icon" />
        </a>
        <a
          href="https://www.linkedin.com/in/patrick-kilcullen-264ba61a4/"
          target="_blank"
          rel="noopener noreferrer"
        >
          {" "}
          <LinkedIn style={{ color: "#d8a2a2" }} />
        </a>
        <a href="mailto:patrickjkilcullen@gmail.com">
          <Email style={{ color: "#d8a2a2" }} />
        </a>
        <a href="/Patrick-Kilcullen_Resume.pdf" target="_blank" rel="noopener noreferrer">
          {" "}
          <Person style={{ color: "#d8a2a2" }} />
        </a>
      </div>
    </div>
  );
}

export default SideNav