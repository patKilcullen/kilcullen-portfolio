import React, { useState } from "react";
import {
  Sketch,
} from "@uiw/react-color";


import { Box, IconButton } from "@mui/material";

import CloseIcon from "@mui/icons-material/Close";

function ColorPicker({
  plainColor1,
  setPlainColor1,
  handleShowColorPicker,
  resetFilters,
}) {
  const [hex, setHex] = useState(plainColor1);

  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <IconButton
        style={{
          color: "white",
          position: "relative",
          top: "20px",
          right: "-50%",
        }}
        onClick={handleShowColorPicker}
      >
        <CloseIcon sx={{ background: "black", border: "2px solid white" }} />
      </IconButton>
      <Sketch
        color={hex}
        onChange={(color) => {
            resetFilters();
          setHex(color.hex);
          setPlainColor1(color.hex);
       
        }}
      />
    </Box>
  );
}
export default ColorPicker;
