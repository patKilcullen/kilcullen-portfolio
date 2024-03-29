import React from 'react'


import Button from "@mui/material/Button";

const EditDesign = ({handlePlainBackground, handleShowEdit, handleNightMode, handleColor, handleSaturation, handlegrayscale, handleContrast, handleBrightness, color, saturation, grayscale, contrast, brightness}) => {
  return (
    <div style={{ backgroundColor: "black", display: "flex", justifyContent:"center", flexWrap: "wrap", marginRight: "0px"}}>
      {" "}
      <Button variant="contained" onClick={handleNightMode}>
        Night Mode
      </Button>
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