import React, { useRef, useEffect, useState } from 'react';
import HamburgerMenu from "./HamburgerMenu";
import "./Canvas.css";

function Canvas() {
  const canvasRef = useRef(null);
  const [color, setColor] = useState('black');
  const [brushSize, setBrushSize] = useState(5);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');

    // Set the canvas size
    canvas.width = 800;
    canvas.height = 600;

    let isDrawing = false;

    function startDrawing(e) {
      isDrawing = true;
      context.beginPath();
      context.moveTo(e.clientX, e.clientY);
    }

    function draw(e) {
      if (!isDrawing) return;
      context.lineTo(e.clientX, e.clientY);
      context.stroke();
    }

    function stopDrawing() {
      isDrawing = false;
    }

    // Add event listeners to the canvas element
    canvas.addEventListener('mousedown', startDrawing);
    canvas.addEventListener('mousemove', draw);
    canvas.addEventListener('mouseup', stopDrawing);
    canvas.addEventListener('mouseout', stopDrawing);

    // Remove event listeners on cleanup
    return () => {
      canvas.removeEventListener('mousedown', startDrawing);
      canvas.removeEventListener('mousemove', draw);
      canvas.removeEventListener('mouseup', stopDrawing);
      canvas.removeEventListener('mouseout', stopDrawing);
    };
  }, []);

  useEffect(() => {

    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');

    context.strokeStyle = color;
    context.lineWidth = brushSize;
  }, [color, brushSize]);

  // Velger farge

  function handleColorChange(e) {
    setColor(e.target.value);
  }

  // Velger størrelse på pensel

  function handleBrushSizeChange(e) {
    setBrushSize(e.target.value);
  }

  // Sletter bilde

  function handleClearCanvas() {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    context.clearRect(0, 0, canvas.width, canvas.height);
  }

  // Lagrer bilde

  function handleSaveImage() {
    const canvas = canvasRef.current;
    const link = document.createElement('a');
    link.download = 'drawing.png';
    link.href = canvas.toDataURL();
    link.click();
  }

  return (
    <div className="canvas">
      <canvas
        ref={canvasRef}
        style={{ border: '1px solid black' }}
      />
      <div>
        <label>
          Color:
          <input type="color" value={color} onChange={handleColorChange} />
        </label>
        <label>
          Brush size:
          <input type="range" min="1" max="50" value={brushSize} onChange={handleBrushSizeChange} />
        </label>
        <button onClick={handleClearCanvas}>Clear canvas</button>
        <button onClick={handleSaveImage}>Save</button>
      </div>
      <HamburgerMenu />
    </div>
  );
}

export default Canvas;
