import { useState } from "react";
import "./styles.css";

export default function GenerateRandomColor() {
  const [rgbColor, setRgbColor] = useState({ red: 0, green: 0, blue: 0 });
  const [hexColor, setHexColor] = useState({ red: 0, green: 0, blue: 0 });
  const [colorForm, setColorForm] = useState("rgb");

  function GenerateRandomColor() {
    if (colorForm === "rgb") {
      setRgbColor((prevRgb) => {
        const newRGB = { ...prevRgb };
        newRGB.red = Math.floor(Math.random() * 250);
        newRGB.green = Math.floor(Math.random() * 250);
        newRGB.blue = Math.floor(Math.random() * 250);

        return newRGB;
      });
    } else {
      const randomValues = [
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        "a",
        "b",
        "c",
        "d",
        "e",
        "f",
      ];
      setHexColor((prevHEX) => {
        const newHEX = { ...prevHEX };
        newHEX.red = `${
          randomValues[Math.floor(Math.random() * randomValues.length)]
        }${randomValues[Math.floor(Math.random() * randomValues.length)]}`;
        newHEX.green = `${
          randomValues[Math.floor(Math.random() * randomValues.length)]
        }${randomValues[Math.floor(Math.random() * randomValues.length)]}`;
        newHEX.blue = `${
          randomValues[Math.floor(Math.random() * randomValues.length)]
        }${randomValues[Math.floor(Math.random() * randomValues.length)]}`;

        return newHEX;
      });
    }
  }

  document.body.style.backgroundColor =
    colorForm === "rgb"
      ? `rgb(${rgbColor.red}, ${rgbColor.green}, ${rgbColor.blue})`
      : `#${hexColor.red}${hexColor.green}${hexColor.blue}`;
  return (
    <div className="container">
      <button onClick={() => setColorForm("hex")}>
        Generate HEX Color
        {colorForm === "hex" && (
          <span>
            {" "}
            #{hexColor.red}
            {hexColor.green}
            {hexColor.blue}
          </span>
        )}
      </button>
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
