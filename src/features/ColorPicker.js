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

function ColorPicker({plainColor1, setPlainColor1}) {
  const [hex, setHex] = useState(plainColor1);

  
  return (
    <Sketch
      style={{ marginLeft: 20 }}
      color={hex}
      onChange={(color) => {
        setHex(color.hex);
        setPlainColor1(color.hex);
      }}
    />
  );
}
export default ColorPicker