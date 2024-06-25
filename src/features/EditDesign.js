// import React, { useState, useEffect } from "react";

// import {
//   Button,
//   Box,
//   Typography,
//   ToggleButton,
//   ToggleButtonGroup,
//   Modal,
//   IconButton,
// } from "@mui/material";

// import ColorPicker from "./ColorPicker";

// import CloseIcon from "@mui/icons-material/Close";

// // const style = {
// //   // position: "absolute",
// //   top: "50vh",
// //   left: "50%",
// //   transform: "translate(-50%, -50%)",
// //   minWidth: "35vw",
// //   //   width: '35vw',
// //   maxHeight: "90vh",
// //   overflowY: "auto",
// //   bgcolor: "background.paper",
// //   border: "2px solid #000",
// //   boxShadow: 24,
// //   p: 4,
// //   display: "flex",
// //   flexDirection: "column",
// //   alignItems: "center",
// //   borderRadius: "20px",
// // };
// const style = {
//   position: "absolute",
//   top: "50%",
//   left: "50%",
//   transform: "translate(-50%, -50%)",
//   width: 400,
//   bgcolor: "background.paper",
//   border: "2px solid #000",
//   boxShadow: 24,
//   p: 4,
// };
// const EditDesign = ({
//   open,
//   setShowEditDesign,
//   handlePlainBackground,
//   handleShowEdit,
//   handleNightMode,
//   handleColor,
//   handleSaturation,
//   handlegrayscale,
//   handleContrast,
//   handleBrightness,
//   color,
//   saturation,
//   grayscale,
//   contrast,
//   brightness,
//   plainColor1,
//   setPlainColor1,
//   addClouds,
//   setAddClouds,
//   addMountains,
//   setAddMountains,
// }) => {
//   const [themeSection, setThemeSection] = useState("plainMode");

//   const handleThemeChange = (theme) => {
//     setThemeSection(theme);

//     if (theme === "plainMode") {
//       handlePlainBackground(true);
//     } else {
//       handlePlainBackground(false);
//       handleNightMode(theme === "dayMode" ? false : true);
//     }
//   };

//   //   CLOSE MODAL
//   const handleClose = () => {
//     setShowEditDesign(false);
//   };

//   // Enable scroll on body when modal is open
//   useEffect(() => {
//     if (open) {
//       document.body.style.overflow = "auto";
//     } else {
//       document.body.style.overflow = "hidden";
//     }
//   }, [open]);

//   const handleAddClouds = () => {
//     setAddClouds((prev) => !prev);
//   };
//   const handleAddMountains = () => {
//     setAddMountains((prev) => !prev);
//   };

//    const [showColorPicker, setShowColorPicker] = useState(false);
//    const handleShowColorPicker = ()=>{
//     setShowColorPicker((prev) => !prev)
//    }

//   return (
//     // <Modal open={open} onClose={handleClose} sx={{ overflow: "auto" }}>
//     <div
//       style={{
//         backgroundColor: "black",
//         display: "flex",
//         justifyContent: "center",
//         flexWrap: "wrap",
//         marginRight: "0px",
//       }}
//     >
//       {" "}
//       <IconButton
//         style={{ position: "absolute", top: 8, right: 8, color: "white" }}
//         onClick={handleShowEdit}
//       >
//         <CloseIcon />
//       </IconButton>
//       <Box>
//         <Typography sx={{ color: "white" }}>Theme</Typography>
//         <ToggleButtonGroup
//           variant="contained"
//           color="secondary"
//           sx={{ backgroundColor: "#1976D2", border: "blue" }}
//           value={themeSection}
//           exclusive
//           onChange={(e) => handleThemeChange(e.target.value)}
//         >
//           <ToggleButton value="dayMode" variant="outlined">
//             Day Mode
//           </ToggleButton>
//           <ToggleButton value="nightMode">Night Mode</ToggleButton>
//           {/* <ToggleButton value="plainMode">Plain Mode</ToggleButton> */}
//         </ToggleButtonGroup>
//       </Box>
//       <Box sx={{ display: "flex", flexDirection: "column" }}>
//         {showColorPicker ? (
//           <ColorPicker
//             plainColor1={plainColor1}
//             setPlainColor1={setPlainColor1}
//             handleShowColorPicker={handleShowColorPicker}
//           />
//         ) : (
//           <Button variant="contained" onClick={handleShowColorPicker}>
//             Change Color
//           </Button>
//         )}
//       </Box>
//       {/* <Button variant="contained" onClick={handleNightMode}>
//         Night Mode
//       </Button> */}
//       <label style={{ color: "white" }}>Hue</label>
//       <input
//         type="range"
//         min={-180}
//         max={180}
//         value={color}
//         onChange={handleColor}
//       />
//       <label style={{ color: "white" }}>saturation</label>
//       <input
//         type="range"
//         min={0}
//         max={600}
//         value={saturation}
//         onChange={handleSaturation}
//       />
//       <label style={{ color: "white" }}>grayscale</label>
//       <input
//         type="range"
//         min={20}
//         max={120}
//         value={grayscale}
//         onChange={handlegrayscale}
//       />
//       <label style={{ color: "white" }}>contrast</label>
//       <input
//         type="range"
//         min={30}
//         max={300}
//         value={contrast}
//         onChange={handleContrast}
//       />
//       <label style={{ color: "white" }}>brightness</label>
//       <input
//         type="range"
//         min={-30}
//         max={200}
//         value={brightness}
//         onChange={handleBrightness}
//       />
//       {/* <Button variant="contained" onClick={handlePlainBackground}>
//         PLAIN
//       </Button> */}
//       <Button variant="contained" onClick={handleAddClouds}>
//         {!addClouds ? "Add Clouds" : "Remove Clouds"}
//       </Button>
//       <Button variant="contained" onClick={handleAddMountains}>
//         {!addMountains ? "Add Mountains" : "Remove Mountains"}
//       </Button>
//     </div>
//     // </Modal>
//   );
// };

// export default EditDesign;


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
  addClouds,
  setAddClouds,
  addMountains,
  setAddMountains,
}) => {
  const [themeSection, setThemeSection] = useState("plainMode");
  const [showColorPicker, setShowColorPicker] = useState(false);

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
        backgroundColor: "black",
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
        // marginRight: "0px",
        padding: "20px",

        alignSelf: "felx-end",
      }}
    >
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
        }}
      >
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
          <ColorPicker
            plainColor1={plainColor1}
            setPlainColor1={setPlainColor1}
            handleShowColorPicker={handleShowColorPicker}
          />
        ) : (
          <Button variant="contained" onClick={handleShowColorPicker}>
            Change Color
          </Button>
        )}
        {/* </Box> */}
      </Box>
      {/* </Box> */}
    </div>
  );
};

export default EditDesign;
