import React, { useRef, useEffect, useState } from "react";
import HamburgerMenu from "./HamburgerMenu";
import "./Canvas.css";
import { motion } from "framer-motion";

function Canvas() {
  const canvasRef = useRef(null);
  const [color, setColor] = useState("black");
  const [brushSize, setBrushSize] = useState(5);
  const [showSquare, setShowSquare] = useState(false);
  const [squarePos, setSquarePos] = useState({ x: 0, y: 0 });
  const showSquareRef = useRef(showSquare);
  

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");

    // Set the canvas size
    canvas.width = 600;
    canvas.height = 800;

    let isDrawing = false;

    function startDrawing(e) {
      const canvas = canvasRef.current;
      const rect = canvas.getBoundingClientRect();
      isDrawing = true;
      context.beginPath();
      context.moveTo(e.clientX - rect.left, e.clientY - rect.top);
    }
    
    function draw(e) {
      const canvas = canvasRef.current;
      const rect = canvas.getBoundingClientRect();
      if (!isDrawing) return;
      context.lineTo(e.clientX - rect.left, e.clientY - rect.top);
      context.stroke();
    }

    function stopDrawing() {
      isDrawing = false;
      setShowSquare(false);
    }

    // Add event listeners to the canvas element
    canvas.addEventListener("mousedown", startDrawing);
    canvas.addEventListener("mousemove", draw);
    canvas.addEventListener("mouseup", stopDrawing);
    canvas.addEventListener("mouseout", stopDrawing);

    // Remove event listeners on cleanup
    return () => {
      canvas.removeEventListener("mousedown", startDrawing);
      canvas.removeEventListener("mousemove", draw);
      canvas.removeEventListener("mouseup", stopDrawing);
      canvas.removeEventListener("mouseout", stopDrawing);
    };
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");

    context.strokeStyle = color;
    context.lineWidth = brushSize;

    if (showSquare) {
      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;
      const squareSize = 100;
      const squareX = centerX - squareSize / 2;
      const squareY = centerY - squareSize / 2;

      // draw black square border
      context.fillStyle = "black";
      context.fillRect(squareX, squareY, squareSize, squareSize);

      // draw white square inside
      context.fillStyle = "white";
      context.fillRect(
        squareX + 2,
        squareY + 2,
        squareSize - 4,
        squareSize - 4
      );
    }
  }, [color, brushSize, showSquare]);

  function handleColorChange(e) {
    setColor(e.target.value);
  }

  function handleBrushSizeChange(e) {
    setBrushSize(e.target.value);
  }

  function handleClearCanvas() {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    context.clearRect(0, 0, canvas.width, canvas.height);
  }

  function handleSaveImage() {
    const canvas = canvasRef.current;

    // create a new canvas with a white background
    const newCanvas = document.createElement("canvas");
    newCanvas.width = canvas.width;
    newCanvas.height = canvas.height;
    const context = newCanvas.getContext("2d");
    context.fillStyle = "white";
    context.fillRect(0, 0, newCanvas.width, newCanvas.height);

    // draw the contents of the original canvas onto the new canvas
    context.drawImage(canvas, 0, 0);

    // save the image from the new canvas
    const link = document.createElement("a");
    link.download = "drawing.png";
    link.href = newCanvas.toDataURL();
    link.click();
  }

  function handleDrawSquare() {
    setShowSquare((show) => !show);
  }

  function handleAddText() {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");

    context.font = `24px arial`;
    context.fillStyle = "black";
    context.textAlign = "center";
    context.fillText("Hello, world!", canvas.width / 2, 30);
  }

  
  

  return (

    <div>

      <div className="headerContainer">
        <h1 className="headerTitle">Nettside AS</h1>
      </div>

      <div className="canvas">
        <canvas ref={canvasRef} style={{ border: "5px solid black" }} />
      <div>

      <nav class="navbarRight">
        <h2
          style={{
            margin: "10px auto",
            textAlign: "center",
            borderBottom: "2px solid white",
            paddingBottom: "10px",
            width: "100%",
            color: "white",
          }}>Elements</h2>

      <ul>
        <li>
          <motion.button whileHover={{scale:1.05,}}whileTap={{scale:0.9}}
          onClick={handleAddText}>Titles</motion.button>
        </li>

        <li>
          <motion.button whileHover={{scale:1.05,}}whileTap={{scale:0.9}} onClick={handleDrawSquare}>Pictures</motion.button>
        </li>
      </ul>

      </nav>


      <nav className="navbarLeft">
        <h2 style={{
            margin: "10px auto",
            textAlign: "center",
            borderBottom: "2px solid white",
            paddingBottom: "10px",
            width: "100%",
            color: "white",
          }}>Options</h2>

        <ul>
{/* 
         <li>
          <motion.button whileHover={{scale:1.05,}}whileTap={{scale:0.9}}
          onClick={handleFontsButtonClick}>Change Font</motion.button>
          </li>

*/}
           





        </ul>
      </nav>
































        <div className="options">
        <label>
          Color:
          <input type="color" value={color} onChange={handleColorChange} />
        </label>
        <label>
          Brush size:
          <input
            type="range"
            min="1"
            max="50"
            value={brushSize}
            onChange={handleBrushSizeChange}
          />
        </label>
        <button onClick={handleClearCanvas}>Clear canvas</button>
        <button onClick={handleSaveImage}>Save</button>
        </div>

        

      </div>
      <HamburgerMenu />
    </div>


    </div>

  );
}

export default Canvas;
