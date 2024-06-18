import React, { useEffect, useState } from "react";

const RandomColor = () => {
  const [typeOfColor, setTypeOfColor] = useState("hex");
  const [color, setColor] = useState("#000000");

  function randonColorUtility(lenght) {
    return Math.floor(Math.random() * lenght);
  }

  function handleCreateHexRandomColor() {
    const hex = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    let hexColor = "#";

    for (let i = 0; i < 6; i++) {
      hexColor += hex[randonColorUtility(hex.length)];
    }

    setColor(hexColor);
  }

  function handleCreateRgbRandomColor() {
    const r = randonColorUtility(256);
    const g = randonColorUtility(256);
    const b = randonColorUtility(256);

    setColor(`rgb(${r},${g},${b})`);
  }

  useEffect(() => {
    if (typeOfColor === "rgb") handleCreateRgbRandomColor();
    else handleCreateHexRandomColor();
  }, [typeOfColor]);

  return (
    <>
      <div
        style={{
          width: "100vw",
          height: "100vh",
          background: color,
        }}
      >
        <button onClick={() => setTypeOfColor("hex")}>Create HEX Color</button>
        <button onClick={() => setTypeOfColor("rgb")}>Create RGB Color</button>
        <button
          onClick={
            typeOfColor === "hex"
              ? handleCreateHexRandomColor
              : handleCreateRgbRandomColor
          }
        >
          Create Random Color
        </button>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "white",
            fontSize: "30px",
            marginTop: "50px",
            gap: "10px",
          }}
        >
          <h3>{typeOfColor === "rgb" ? "RGB Color" : "HEX Color"}</h3>
          <h3>{color}</h3>
        </div>
      </div>
    </>
  );
};

export default RandomColor;
