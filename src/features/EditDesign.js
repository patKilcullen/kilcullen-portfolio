import React, {useState} from 'react'


import {
  Button,
  Box,
  Typography,
  ToggleButton,
  ToggleButtonGroup,
} from "@mui/material";

const EditDesign = ({handlePlainBackground, handleShowEdit, handleNightMode, handleColor, handleSaturation, handlegrayscale, handleContrast, handleBrightness, color, saturation, grayscale, contrast, brightness}) => {

 const [themeSection, setThemeSection] = useState('dayMode')

 const handleThemeChange = (theme) =>{
  setThemeSection(theme)
  
  if(theme === "plainMode"){
handlePlainBackground(true)
  }else{
  handlePlainBackground(false);  
handleNightMode(theme === "dayMode" ? false : true)
  }
 }
  return (
    <div
      style={{
        backgroundColor: "black",
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap",
        marginRight: "0px",
      }}
    >
      {" "}
      <Box>
        <Typography sx={{ color: "white" }}>Theme</Typography>
        <ToggleButtonGroup
          variant="contained"
          color="secondary"
          sx={{ backgroundColor: "#1976D2", border: "blue" }}
          value={themeSection}
          exclusive
          onChange={(e) => handleThemeChange(e.target.value)}
        >
          <ToggleButton value="dayMode" variant="outlined">
            Day Mode
          </ToggleButton>
          <ToggleButton value="nightMode">Night Mode</ToggleButton>
          <ToggleButton value="plainMode">Plain Mode</ToggleButton>
        </ToggleButtonGroup>
      </Box>
      {/* <Button variant="contained" onClick={handleNightMode}>
        Night Mode
      </Button> */}
      <label style={{ color: "white" }}>Color</label>
      <input
        type="range"
        min={-180}
        max={180}
        value={color}
        onChange={handleColor}
      />
      <label style={{ color: "white" }}>saturation</label>
      <input
        type="range"
        min={0}
        max={600}
        value={saturation}
        onChange={handleSaturation}
      />
      <label style={{ color: "white" }}>grayscale</label>
      <input
        type="range"
        min={20}
        max={120}
        value={grayscale}
        onChange={handlegrayscale}
      />
      <label style={{ color: "white" }}>contrast</label>
      <input
        type="range"
        min={30}
        max={300}
        value={contrast}
        onChange={handleContrast}
      />
      <label style={{ color: "white" }}>brightness</label>
      <input
        type="range"
        min={-30}
        max={200}
        value={brightness}
        onChange={handleBrightness}
      />
      <Button variant="contained" onClick={handlePlainBackground}>
        PLAIN
      </Button>
      <Button
        variant="outlined"
        style={{ alignSelf: "flex-end" }}
        onClick={handleShowEdit}
      >
        close
      </Button>
    </div>
  );
}

export default EditDesign