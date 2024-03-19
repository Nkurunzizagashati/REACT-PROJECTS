import { useState } from "react";
import "./styles.css";

export default function GenerateRandomColor() {
  const [rgbColor, setRgbColor] = useState({ red: 0, green: 0, blue: 0 });
  const [colorForm, setColorForm] = useState("rgb");

  function GenerateRandomColor() {
    setRgbColor((prevRgb) => {
      const newRGB = { ...prevRgb };
      newRGB.red = Math.floor(Math.random() * 250);
      newRGB.green = Math.floor(Math.random() * 250);
      newRGB.blue = Math.floor(Math.random() * 250);

      return newRGB;
    });
  }

  document.body.style.backgroundColor =
    colorForm === "rgb"
      ? `rgb(${rgbColor.red}, ${rgbColor.green}, ${rgbColor.blue})`
      : "#00FF00";
  return (
    <div className="container">
      <button onClick={() => setColorForm("hex")}>Generate HEX Color</button>
      <button onClick={() => setColorForm("rgb")}>
        Generate RGB Color
        {colorForm === "rgb" && (
          <span>
            {" "}
            rgb({rgbColor.red}, {rgbColor.green}, {rgbColor.blue})
          </span>
        )}
      </button>

      <button onClick={GenerateRandomColor}>Generate Random color</button>
    </div>
  );
}
