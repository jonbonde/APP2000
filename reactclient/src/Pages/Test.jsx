import { useEffect, useLayoutEffect, useRef, useState } from "react";
import rough from "roughjs/bundled/rough.esm";
import { getStroke } from "perfect-freehand";
import { motion } from "framer-motion";
import "./Test.css";
import Popup from "./Popup";

const generator = rough.generator();

// tools
const elementType = {
  selection: "selection",
  line: "line",
  rectangle: "rectangle",
  pencil: "pencil",
  text: "text",
};

// position
const positionType = {
  inside: "inside",
  tl: "tl",
  tr: "tr",
  bl: "bl",
  br: "br",
  start: "start",
  end: "end",
};

// actions
const actionType = {
  writing: "writing",
  drawing: "drawing",
  moving: "moving",
  resizing: "resizing",
  deleteIt: "deleteIt",
};

// Creates and returns element
function createElement(id, x1, y1, x2, y2, type) {
  switch (type) {
    case elementType.line:
      const roughElementForLine = generator.line(x1, y1, x2, y2);
      return { id, x1, y1, x2, y2, roughElement: roughElementForLine, type };
    case elementType.rectangle:
      const roughElementForRectangle = generator.rectangle(
        x1,
        y1,
        x2 - x1,
        y2 - y1
      );
      return {
        id,
        x1,
        y1,
        x2,
        y2,
        roughElement: roughElementForRectangle,
        type,
      };
    case elementType.pencil:
      return { id, type, points: [{ x: x1, y: y1 }] };
    case elementType.text:
      return { id, type, x1, y1, x2, y2, text: "" };
    default:
      throw new Error(`Type not recognised : ${type}`);
  }
}

const nearPoint = (x, y, x1, y1, name) => {
  const offset = 10;
  return Math.abs(x - x1) < offset && Math.abs(y - y1) < offset ? name : null;
};

// Check distance
function onLine(x1, y1, x2, y2, x, y, distanceOffset = 1) {
  const a = { x: x1, y: y1 };
  const b = { x: x2, y: y2 };
  const c = { x: x, y: y };
  const offset = distance(a, b) - (distance(a, c) + distance(b, c));
  const insideLine =
    Math.abs(offset) < distanceOffset ? positionType.inside : null;
  return insideLine;
}

// Checks the location of given point (x,y) with respect to element
const positionWithinElement = (x, y, element) => {
  const { x1, x2, y1, y2, type } = element;

  switch (type) {
    case elementType.rectangle:
      const minX = Math.min(x1, x2);
      const maxX = Math.max(x1, x2);
      const minY = Math.min(y1, y2);
      const maxY = Math.max(y1, y2);

      const topLeft = nearPoint(x, y, minX, minY, positionType.tl);
      const topRight = nearPoint(x, y, maxX, minY, positionType.tr);
      const bottomLeft = nearPoint(x, y, minX, maxY, positionType.bl);
      const bottomRight = nearPoint(x, y, maxX, maxY, positionType.br);
      const insideRect =
        x >= minX && x <= maxX && y >= minY && y <= maxY
          ? positionType.inside
          : null;

      return topLeft || topRight || bottomLeft || bottomRight || insideRect;
    case elementType.line:
      const insideLine = onLine(x1, y1, x2, y2, x, y, 5);
      const start = nearPoint(x, y, x1, y1, positionType.start);
      const end = nearPoint(x, y, x2, y2, positionType.end);
      return start || end || insideLine;
    case elementType.pencil:
      const betweenAnyPoint = element.points.some((point, index) => {
        const nextPoint = element.points[index + 1];
        if (!nextPoint) return false;
        return onLine(point.x, point.y, nextPoint.x, nextPoint.y, x, y) != null;
      });
      const onPath = betweenAnyPoint ? positionType.inside : null;

      return onPath;
    case elementType.text:
      return x >= x1 && x <= x2 && y >= y1 && y <= y2
        ? positionType.inside
        : null;
    default:
      throw new Error("Error");
  }
};

// math distance formula
function distance(a, b) {
  return Math.sqrt(Math.pow(a.x - b.x, 2) + Math.pow(a.y - b.y, 2));
}

// goes through elements and return 1 element on which we have out mouse pointer/(x,y)
function getElementAtPosition(x, y, elements) {
  return elements
    .map((element) => ({
      ...element,
      position: positionWithinElement(x, y, element),
    }))
    .find((element) => element.position !== null);
}

function adjustElementCoordinates(element) {
  const { type, x1, y1, x2, y2 } = element;
  switch (type) {
    case elementType.rectangle:
      const minX = Math.min(x1, x2);
      const maxX = Math.max(x1, x2);
      const minY = Math.min(y1, y2);
      const maxY = Math.max(y1, y2);
      return { x1: minX, y1: minY, x2: maxX, y2: maxY };
    case elementType.line:
      if ((x1 < x2 || x1 === x2) && y1 < y2) {
        return { x1, y1, x2, y2 };
      }
      return { x1: x2, y1: y2, x2: x1, y2: y1 };
    default:
      throw new Error(`Type not recognised : ${element.type}`);
  }
}

function cursorForPosition(position) {
  switch (position) {
    case positionType.tl:
    case positionType.br:
    case positionType.start:
    case positionType.end:
      return "nwse-resize";
    case positionType.tr:
    case positionType.bl:
      return "nesw-resize";
    default:
      return "move";
  }
}

function resizedCoordinates(clientX, clientY, position, coordinates) {
  const { x1, y1, x2, y2 } = coordinates;
  switch (position) {
    case positionType.tl:
    case positionType.start:
      return { x1: clientX, y1: clientY, x2, y2 };
    case positionType.tr:
      return { x1, y1: clientY, x2: clientX, y2 };
    case positionType.bl:
      return { x1: clientX, y1, x2, y2: clientY };
    case positionType.br:
    case positionType.end:
      return { x1, y1, x2: clientX, y2: clientY };
    default:
      return null;
  }
}

// custom hook that manages history
const useHistory = (initialState) => {
  const [index, setIndex] = useState(0);
  const [history, setHistory] = useState([initialState]);

  const setState = (action, override = false) => {
    const newState =
      typeof action === "function" ? action(history[index]) : action;
    if (override) {
      const historyCopy = [...history];
      historyCopy[index] = newState;
      setHistory(historyCopy);
    } else {
      const updatedState = [...history].splice(0, index + 1);
      setHistory([...updatedState, newState]);
      setIndex((prevState) => prevState + 1);
    }
  };

  const undo = () => index > 0 && setIndex((prevState) => prevState - 1);
  const redo = () =>
    index < history.length - 1 && setIndex((prevState) => prevState + 1);

  return [history[index], setState, undo, redo];
};

// function from library
function getSvgPathFromStroke(stroke) {
  if (!stroke.length) return "";

  const d = stroke.reduce(
    (acc, [x0, y0], i, arr) => {
      const [x1, y1] = arr[(i + 1) % arr.length];
      acc.push(x0, y0, (x0 + x1) / 2, (y0 + y1) / 2);
      return acc;
    },
    ["M", ...stroke[0], "Q"]
  );

  d.push("Z");
  return d.join(" ");
}

const drawElement = (roughCanvas, context, element) => {
  switch (element.type) {
    case elementType.line:
    case elementType.rectangle:
      roughCanvas.draw(element.roughElement);
      break;
    case elementType.pencil:
      const stroke = getStroke(element.points, {
        size: 10,
      });
      const pathData = getSvgPathFromStroke(stroke);
      const myPath = new Path2D(pathData);
      context.fill(myPath);
      break;
    case elementType.text:
      context.textBaseline = "top";
      context.font = "24px sans-serif";
      context.fillText(element.text, element.x1, element.y1);
      break;
    default:
      throw new Error(`Type not recognised : ${element.type}`);
  }
};

function adjustmentRequired(type) {
  if (type in [elementType.line, elementType.rectangle]) {
    return true;
  }
  return false;
}

function Test() {
  const [elements, setElements, undo, redo] = useHistory([]);
  const [action, setAction] = useState("none");
  const [tool, setTool] = useState(elementType.rectangle);
  const [selectedElement, setSelectedElement] = useState(null);
  const textAreaRef = useRef();

  useLayoutEffect(() => {
    const canvas = document.getElementById("canvas");
    const context = canvas.getContext("2d");
    context.clearRect(0, 0, canvas.width, canvas.height);

    const roughCanvas = rough.canvas(canvas);
    elements.forEach((element) => {
      if (action === actionType.writing && selectedElement.id === element.id)
        return;
      drawElement(roughCanvas, context, element);
    });
  }, [elements, action, selectedElement]);

  useEffect(() => {
    const undoRedoFunction = (event) => {
      if (event.ctrlKey && event.key === "z") {
        undo();
      }
      if (event.ctrlKey && event.key === "y") {
        redo();
      }
    };

    document.addEventListener("keydown", undoRedoFunction);

    return () => {
      document.removeEventListener("keydown", undoRedoFunction);
    };
  }, [undo, redo]);

  useEffect(() => {
    const textArea = textAreaRef.current;

    if (action === actionType.writing) {
      textArea.focus();
      textArea.value = selectedElement.text;
    }
  }, [action, selectedElement]);

  const clearScreen = () => {
    setElements([]);
  };

  const handleMouseDown = (event) => {
    if (action === actionType.writing) return;

    const { clientX, clientY } = event;

    if (tool === elementType.selection) {
      const element = getElementAtPosition(clientX, clientY, elements);

      if (element) {
        if (element.type === elementType.pencil) {
          const xoffsets = element.points.map((point) => clientX - point.x);
          const yoffsets = element.points.map((point) => clientY - point.y);
          setSelectedElement({ ...element, xoffsets, yoffsets });
        } else {
          const offsetX = clientX - element.x1;
          const offsetY = clientY - element.y1;
          setSelectedElement({ ...element, offsetX, offsetY });
        }

        setElements((prevState) => prevState);

        if (element.position === positionType.inside) {
          setAction(actionType.moving);
        } else {
          setAction(actionType.resizing);
        }
      }
    } else if (
      tool === elementType.rectangle ||
      tool === elementType.line ||
      tool === elementType.pencil ||
      tool === elementType.text
    ) {
      const id = elements.length;
      const element = createElement(
        id,
        clientX,
        clientY,
        clientX,
        clientY,
        tool
      );
      setElements((prevState) => [...prevState, element]);
      setAction(
        tool === elementType.text ? actionType.writing : actionType.drawing
      );
      setSelectedElement(element);
    } else if (tool === actionType.deleteIt) {
      const element = getElementAtPosition(clientX, clientY, elements);
      if (element) {
        setElements((prevState) =>
          prevState.filter((ele) => element.id !== ele.id)
        );
      }
    }
  };

  const updateElement = (id, x1, y1, x2, y2, type, options) => {
    const elementsCopy = [...elements];

    switch (type) {
      case elementType.line:
      case elementType.rectangle:
        elementsCopy[id] = createElement(id, x1, y1, x2, y2, type);
        break;
      case elementType.pencil:
        elementsCopy[id].points = [
          ...elementsCopy[id].points,
          { x: x2, y: y2 },
        ];
        break;
      case elementType.text:
        const textWidth = document
          .getElementById("canvas")
          .getContext("2d")
          .measureText(options.text).width;
        const textHeight = 24;
        elementsCopy[id] = {
          ...createElement(id, x1, y1, x1 + textWidth, y1 + textHeight, type),
          text: options.text,
        };
        break;
      default:
        throw new Error(`Type not recognized ${type}`);
    }

    setElements(elementsCopy, true);
  };

  const handleMouseMove = (event) => {
    const { clientX, clientY } = event;

    if (tool === elementType.selection) {
      const element = getElementAtPosition(clientX, clientY, elements);
      event.target.style.cursor = element
        ? cursorForPosition(element.position)
        : "default";
    } else if (tool === actionType.deleteIt) {
      const element = getElementAtPosition(clientX, clientY, elements);
      event.target.style.cursor = element ? "not-allowed" : "default";
    }

    if (action === actionType.drawing) {
      const index = elements.length - 1;
      const { x1, y1, type } = elements[index];
      updateElement(index, x1, y1, clientX, clientY, type);
    } else if (action === actionType.moving) {
      console.log("lets move");
      console.log(selectedElement);

      if (selectedElement.type === elementType.pencil) {
        const newPoints = selectedElement.points.map((_, index) => {
          return {
            x: clientX - selectedElement.xoffsets[index],
            y: clientY - selectedElement.yoffsets[index],
          };
        });
        const elementsCopy = [...elements];
        elementsCopy[selectedElement.id] = {
          ...elementsCopy[selectedElement.id],
          points: newPoints,
        };
        setElements(elementsCopy, true);
      } else {
        const { id, x1, y1, x2, y2, type, offsetX, offsetY } = selectedElement;
        const width = x2 - x1;
        const height = y2 - y1;
        const newX1 = clientX - offsetX;
        const newY1 = clientY - offsetY;
        const options =
          type === elementType.text ? { text: selectedElement.text } : {};
        updateElement(
          id,
          newX1,
          newY1,
          newX1 + width,
          newY1 + height,
          type,
          options
        );
      }
    } else if (action === actionType.resizing) {
      console.log("action resizing, selectedElement:");
      console.log(selectedElement);
      const { id, type, position, ...coordinates } = selectedElement;
      const { x1, y1, x2, y2 } = resizedCoordinates(
        clientX,
        clientY,
        position,
        coordinates
      );
      updateElement(id, x1, y1, x2, y2, type);
    }
  };

  const handleMouseUp = (event) => {
    const { clientX, clientY } = event;

    if (selectedElement) {
      if (
        selectedElement.type === elementType.text &&
        clientX - selectedElement.offsetX === selectedElement.x1 &&
        clientY - selectedElement.offsetY === selectedElement.y1
      ) {
        setAction(actionType.writing);
        return;
      }

      const index = selectedElement.id;
      const { id, type } = elements[index];

      if (
        (action === actionType.drawing || action === actionType.resizing) &&
        adjustmentRequired(type)
      ) {
        const { x1, y1, x2, y2 } = adjustElementCoordinates(elements[index]);
        updateElement(id, x1, y1, x2, y2, type);
      }
    }

    // when writing, we dont want to reset action to none
    // set action to none by using onblur function
    if (action === actionType.writing) return;

    setAction("none");
    setSelectedElement(null);
  };

  const handleBlur = (event) => {
    const { id, x1, y1, type } = selectedElement;
    setAction("none");
    setSelectedElement(null);
    updateElement(id, x1, y1, null, null, type, { text: event.target.value });
  };

  function handleSaveImage() {
    const canvas = document.getElementById("canvas");

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
    link.download = "wireframe.png";
    link.href = newCanvas.toDataURL();
    link.click();
  }


  // html and canvas

  return (

    <div>

    <Popup />

      <nav class="navbarRight">
        <h2
          style={{
            margin: "10px auto",
            textAlign: "center",
            borderBottom: "2px solid white",
            paddingBottom: "10px",
            width: "100%",
            color: "white",
          }}
        >
          Elements
        </h2>

        <ul>
          <li className="input">
            <input
              type="radio"
              id="selection"
              checked={tool === "selection"}
              onChange={() => setTool("selection")}
            />
            <label htmlFor="selection">Selection</label>
          </li>

          <li className="input">
            <input
              type="radio"
              id="line"
              checked={tool === "line"}
              onChange={() => setTool("line")}
            />
            <label htmlFor="line">Line</label>
          </li>

          <li className="input">
            <input
              type="radio"
              id="rectangle"
              checked={tool === "rectangle"}
              onChange={() => setTool("rectangle")}
            />
            <label htmlFor="rectangle">Rectangle</label>
          </li>

          <li className="input">
            <input
              type="radio"
              id="pencil"
              checked={tool === "pencil"}
              onChange={() => setTool("pencil")}
            />
            <label htmlFor="pencil">Pencil</label>
          </li>

          <li className="input">
            <input
              type="radio"
              id="deleteIt"
              checked={tool === "deleteIt"}
              onChange={() => setTool("deleteIt")}
            />
            <label htmlFor="deleteIt">Delete</label>
          </li>
          
        </ul>

      </nav>


      <div>
        <nav className="navbarBottom">
        <h2
          style={{
            margin: "10px auto",
            textAlign: "center",
            borderBottom: "2px solid white",
            paddingBottom: "10px",
            width: "100%",
            color: "white",
          }}
        >Options</h2>


        <ul>

          <li>
            <button className="redoUndoButton" onClick={() => redo()}>Redo (Ctrl + Y)
            </button>
          </li>

          <li>
            <button className="redoUndoButton" onClick={() => undo()}>Undo (Ctrl + Z)
            </button>
          </li>

          <li>
            <button className="clearButton" onClick={clearScreen}>Clear Screen
            </button>
          </li>

          <li>
            <button className="saveButton" onClick={handleSaveImage}>Save
            </button>
          </li>

        </ul>

        </nav>
      </div>


      <canvas className=""
        id="canvas"
        width={1500}
        height={700}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        style={{ border: "5px solid black" }}
      >
        Canvas
      </canvas>
    </div>
  );
}

export default Test;
