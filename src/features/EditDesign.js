import React, {useState, useEffect} from 'react'


import {
  Button,
  Box,
  Typography,
  ToggleButton,
  ToggleButtonGroup,
  Modal
} from "@mui/material";



import ColorPicker from './ColorPicker'



// const style = {
//   // position: "absolute",
//   top: "50vh",
//   left: "50%",
//   transform: "translate(-50%, -50%)",
//   minWidth: "35vw",
//   //   width: '35vw',
//   maxHeight: "90vh",
//   overflowY: "auto",
//   bgcolor: "background.paper",
//   border: "2px solid #000",
//   boxShadow: 24,
//   p: 4,
//   display: "flex",
//   flexDirection: "column",
//   alignItems: "center",
//   borderRadius: "20px",
// };
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
const EditDesign = ({
  open,
  setShowEditDesign,
  handlePlainBackground,
  handleShowEdit,
  handleNightMode,
  handleColor,
  handleSaturation,
  handlegrayscale,
  handleContrast,
  handleBrightness,
  color,
  saturation,
  grayscale,
  contrast,
  brightness,
  plainColor1,
  setPlainColor1,
  setAddClouds,
  setAddMountains,
}) => {
  const [themeSection, setThemeSection] = useState("plainMode");

  const handleThemeChange = (theme) => {
    setThemeSection(theme);

    if (theme === "plainMode") {
      handlePlainBackground(true);
    } else {
      handlePlainBackground(false);
      handleNightMode(theme === "dayMode" ? false : true);
    }
  };

  //   CLOSE MODAL
  const handleClose = () => {
    setShowEditDesign(false);
  };

  // Enable scroll on body when modal is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "auto";
    } else {
      document.body.style.overflow = "hidden";
    }
  }, [open]);

  const handleAddClouds = () => {
    setAddClouds((prev) => !prev);
  };
  const handleAddMountains = () => {
    setAddMountains((prev) => !prev);
  };
  return (
    // <Modal open={open} onClose={handleClose} sx={{ overflow: "auto" }}>
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
      <ColorPicker plainColor1={plainColor1} setPlainColor1={setPlainColor1} />
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
      <Button variant="contained" onClick={handleAddClouds}>
        Add Clouds
      </Button>
      <Button variant="contained" onClick={handleAddMountains}>
        Add Mountains
      </Button>
      <Button
        variant="outlined"
        style={{ alignSelf: "flex-end" }}
        onClick={handleShowEdit}
      >
        close
      </Button>
    </div>
    // </Modal>
  );
};

export default EditDesign