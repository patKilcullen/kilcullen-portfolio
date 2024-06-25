import React, { useState } from "react";
import {
  Slider,
  Sketch,
  Material,
  Colorful,
  Compact,
  Circle,
  Wheel,
  Block,
  Github,
  Chrome,
} from "@uiw/react-color";
import {
  Alpha,
  Hue,
  ShadeSlider,
  Saturation,
  Interactive,
  hsvaToHslaString,
} from "@uiw/react-color";
import {
  EditableInput,
  EditableInputRGBA,
  EditableInputHSLA,
} from "@uiw/react-color";

import { Box, IconButton } from "@mui/material";

import CloseIcon from "@mui/icons-material/Close";

function ColorPicker({ plainColor1, setPlainColor1, handleShowColorPicker }) {
  const [hex, setHex] = useState(plainColor1);

  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <IconButton
        // style={{ alignSelf: "flex-end", color: "white" }}
        style={{ color: "white", position: "relative", top: "20px", right: "-50%", }}
        onClick={handleShowColorPicker}
      >
        <CloseIcon sx={{background: "black", border: "2px solid white" }}/>
      </IconButton>
      <Sketch
        // style={{ marginLeft: 20 }}
        color={hex}
        onChange={(color) => {
          setHex(color.hex);
          setPlainColor1(color.hex);
        }}
      />
    </Box>
  );
}
export default ColorPicker;
