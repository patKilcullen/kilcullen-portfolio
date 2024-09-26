import React, { useState, useEffect } from "react";
import {
  Button,
  Box,
  Typography,
  ToggleButton,
  ToggleButtonGroup,
  IconButton,

} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import ColorPicker from "./ColorPicker";


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
  addClouds,
  setAddClouds,
  addMountains,
  setAddMountains,
  resetFilters,
  handleResetAll,
  setTextColor,
}) => {
  const [themeSection, setThemeSection] = useState("dayMode");
  const [showColorPicker, setShowColorPicker] = useState(false);

   const [styleType, setStyleType] = useState("background");

  const handleThemeChange = (theme) => {
    setThemeSection(theme);
    if (theme === "plainMode") {
      handlePlainBackground(true);
    } else {
      handlePlainBackground(false);
      handleNightMode(theme === "dayMode" ? false : true);
    }
  };

  const handleClose = () => {
    setShowEditDesign(false);
  };

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

  const handleShowColorPicker = () => {
    setShowColorPicker((prev) => !prev);
  };

  return (
    <div
      style={{
        backgroundColor: "#404146",
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
        // marginRight: "0px",
        padding: "10px",

        alignSelf: "felx-end",
        borderRadius: "20px",
        border: "2px solid white",
      }}
    >
      <Typography
        sx={{
          color: "white",
          fontSize: "20px",
          fontWeight: "bold",
          textDecoration: "underline",
        }}
      >
        Editor
      </Typography>
      <IconButton
        style={{ position: "absolute", top: 8, right: 8, color: "white" }}
        onClick={handleClose}
      >
        <CloseIcon />
      </IconButton>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          mb: 2,
          mt: 1,
        }}
      >
        {/* <Typography sx={{ color: "white" }}>Theme</Typography> */}
        <ToggleButtonGroup
          variant="contained"
          color="secondary"
          sx={{ backgroundColor: "#1976D2", border: "blue" }}
          value={themeSection}
          exclusive
          onChange={(e) => handleThemeChange(e.target.value)}
        >
          <ToggleButton
            sx={{
              backgroundColor: "#1976D2",
              border: "blue",
              color: "white", // Default color
              "&.Mui-selected": {
                color: "white", // Selected color
                backgroundColor: "rgba(255, 255, 255, 0.2)", // Optional: Add a background to indicate selection
                borderBottom: "2px solid white",
              },
            }}
            value="dayMode"
            variant="outlined"
          >
            Day Mode
          </ToggleButton>
          <ToggleButton
            sx={{
              backgroundColor: "#1976D2",
              border: "blue",
              color: "white", // Default color
              "&.Mui-selected": {
                color: "white", // Selected color
                backgroundColor: "rgba(255, 255, 255, 0.2)", // Optional: Add a background to indicate selection
                borderBottom: "2px solid white",
              },
            }}
            value="nightMode"
          >
            Night Mode
          </ToggleButton>
        </ToggleButtonGroup>
      </Box>
      {/* <Box
        sx={{ display: "flex", justifyContent: "space-between", width: "100%" }}
      > */}
      {/* <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: "50%",
            mt: 2,
          }}
        > */}
      <Box sx={{ display: "flex", gap: "5px" }}>
        <Button variant="contained" onClick={handleAddClouds} sx={{ mb: 2 }}>
          {!addClouds ? "Add Clouds" : "Remove Clouds"}
        </Button>
        <Button variant="contained" onClick={handleAddMountains} sx={{ mb: 2 }}>
          {!addMountains ? "Add Mountains" : "Remove Mountains"}
        </Button>
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          width: "75%",
        }}
      >
        <Box sx={{ display: "flex", gap: "5px" }}>
          <Typography sx={{ color: "white" }}>Hue: </Typography>

          <input
            type="range"
            min={-180}
            max={180}
            value={color}
            onChange={handleColor}
            style={{ width: "80%" }}
          />
        </Box>
        <Box sx={{ display: "flex", gap: "5px" }}>
          <Typography sx={{ color: "white" }}>Saturation: </Typography>
          <input
            type="range"
            min={0}
            max={600}
            value={saturation}
            onChange={handleSaturation}
            style={{ width: "80%" }}
          />
        </Box>

        <Box sx={{ display: "flex", gap: "5px" }}>
          <Typography sx={{ color: "white" }}>Grayscale: </Typography>
          <input
            type="range"
            min={20}
            max={120}
            value={grayscale}
            onChange={handlegrayscale}
            style={{ width: "80%" }}
          />
        </Box>

        <Box sx={{ display: "flex", gap: "5px" }}>
          <Typography sx={{ color: "white" }}>Contrast: </Typography>
          <input
            type="range"
            min={30}
            max={300}
            value={contrast}
            onChange={handleContrast}
            style={{ width: "80%" }}
          />
        </Box>

        <Box sx={{ display: "flex", gap: "5px" }}>
          <Typography sx={{ color: "white" }}>Brightness: </Typography>
          <input
            type="range"
            min={-30}
            max={200}
            value={brightness}
            onChange={handleBrightness}
            style={{ width: "80%" }}
          />
        </Box>
      </Box>
      <Box sx={{ mt: 2 }}>
        {showColorPicker ? (
          <>
            <ToggleButtonGroup
              variant="outline"
              // color="secondary"

              sx={{
                backgroundColor: "#1976D2",
                border: "blue",
                height: "20px",
                color: "white",
              }}
              value={styleType}
              exclusive
              onChange={(e) => setStyleType(e.target.value)}
            >
              <ToggleButton
                sx={{
                  color: "white", // Default color
                  "&.Mui-selected": {
                    color: "white", // Selected color
                    backgroundColor: "rgba(255, 255, 255, 0.2)", // Optional: Add a background to indicate selection\
                    borderBottom: "2px solid white",
                  },
                }}
                value="background"
                variant="outlined"
              >
                Background
              </ToggleButton>
              <ToggleButton
                sx={{
                  color: "white", // Default color
                  "&.Mui-selected": {
                    color: "white", // Selected color
                    backgroundColor: "rgba(255, 255, 255, 0.2)", // Optional: Add a background to indicate selection
                    borderBottom: "2px solid white",
                  },
                }}
                value="text"
              >
                Text
              </ToggleButton>
            </ToggleButtonGroup>
            <ColorPicker
              plainColor1={plainColor1}
              setPlainColor1={setPlainColor1}
              handleShowColorPicker={handleShowColorPicker}
              resetFilters={resetFilters}
              setTextColor={setTextColor}
              styleType={styleType}
            />
          </>
        ) : (
          <Button variant="contained" onClick={handleShowColorPicker}>
            Change Color
          </Button>
        )}
        {/* </Box> */}
      </Box>
      <Button onClick={handleResetAll}>Reset</Button>
      {/* </Box> */}
    </div>
  );
};

export default EditDesign;
