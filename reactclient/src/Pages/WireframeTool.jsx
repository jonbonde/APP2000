import "../Utilities/Stylesheet.css";
import HamburgerMenu from "./HamburgerMenu";
import Popup from "./Popup";
import Backdrop from "./WireframeTuto";
import { motion } from "framer-motion";
import React, { useRef, useEffect } from "react";

function WireframeTool() {
  return (
    <div className="background">
      {" "}
      {/* kommentar */}
      <div className="customWebpage"></div>
      <motion.div
        className="balls"
        initial={{
          scale: 0,
          opacity: 0,
          translateY: "50vh",
        }}
        whileInView={{
          scale: 1,
          opacity: 1,
          translate: 0,
        }}
      >
        <Popup />
        <Backdrop />
      </motion.div>
      <div className="header-container">
        <h1 className="header-title">Nettside AS</h1>
      </div>
      {/* Tegnebrettet i midten */}
      <section class="drawing-board">
        <canvas id="canvas"></canvas>
      </section>
      {/* Navbar høyre side */}
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
          <li>
            <motion.button
              whileHover={{
                scale: 1.05,
              }}
              whileTap={{
                scale: 0.9,
              }}
              onClick={handleTitlesButtonClick}
            >
              Titles
            </motion.button>
          </li>
          <li>
            <motion.button
              whileHover={{
                scale: 1.05,
              }}
              whileTap={{
                scale: 0.9,
              }}
              onClick={handlePicturesButtonClick}
            >
              Pictures
            </motion.button>
          </li>
          <li>
            <motion.button
              whileHover={{
                scale: 1.05,
              }}
              whileTap={{
                scale: 0.9,
              }}
              onClick={handleNavbarButtonClick}
            >
              Navbar
            </motion.button>
          </li>
          <li>
            <motion.button
              whileHover={{
                scale: 1.05,
              }}
              whileTap={{
                scale: 0.9,
              }}
            >
              Textbox
            </motion.button>
          </li>
          <motion.button
            whileHover={{
              scale: 1.05,
            }}
            whileTap={{
              scale: 0.9,
            }}
            onClick={handleResetButtonClick}
          >
            Reset
          </motion.button>
        </ul>
      </nav>
      {/* Navbar venstre side */}
      <nav className="navbarLeft">
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
          Options
        </h2>
        <ul>
          <li>
            <motion.button
              whileHover={{
                scale: 1.05,
              }}
              whileTap={{
                scale: 0.9,
              }}
              onClick={handleFontsButtonClick}
            >
              Change Font
            </motion.button>
          </li>

          <li>
            <section className="tools-board">
              <div className="rad">
                <ul className="options"></ul>
              </div>

              <div className="rad">
                <ul className="options">
                  <li className="option active tool" id="pensel">
                    <motion.button
                      whileHover={{
                        scale: 1.05,
                      }}
                      whileTap={{
                        scale: 0.9,
                      }}
                      id="brushButton"
                    >
                      Brush
                    </motion.button>
                  </li>

                  <li className="option tool" id="viskel">
                    <motion.button
                      whileHover={{
                        scale: 1.05,
                      }}
                      whileTap={{
                        scale: 0.9,
                      }}
                    >
                      Eraser
                    </motion.button>
                  </li>

                  <li className="option tool" id="Tykkelse">
                    <span>Thickness</span>
                  </li>

                  <li className="option">
                    <input
                      type="range"
                      id="size-slider"
                      alt="bilde av skaleringslinje"
                      min="1"
                      max="30"
                      value="10"
                    />
                  </li>
                </ul>
              </div>

              <div className="rad farge">
                <label className="title">Colours</label>
                <ul className="options">
                  <motion.li
                    whileHover={{
                      scale: 1.05,
                    }}
                    whileTap={{
                      scale: 0.9,
                    }}
                    className="option"
                  ></motion.li>
                  <motion.li
                    whileHover={{
                      scale: 1.05,
                    }}
                    whileTap={{
                      scale: 0.9,
                    }}
                    className="option selected"
                  ></motion.li>
                  <motion.li
                    whileHover={{
                      scale: 1.05,
                    }}
                    whileTap={{
                      scale: 0.9,
                    }}
                    className="option"
                  ></motion.li>
                  <motion.li
                    whileHover={{
                      scale: 1.05,
                    }}
                    whileTap={{
                      scale: 0.9,
                    }}
                    className="option"
                  ></motion.li>
                  <motion.li
                    whileHover={{
                      scale: 1.05,
                    }}
                    whileTap={{
                      scale: 0.9,
                    }}
                    className="option"
                  ></motion.li>
                  <motion.li
                    whileHover={{
                      scale: 1.05,
                    }}
                    whileTap={{
                      scale: 0.9,
                    }}
                    className="option"
                  ></motion.li>
                  <motion.li
                    whileHover={{
                      scale: 1.05,
                    }}
                    whileTap={{
                      scale: 0.9,
                    }}
                    className="option"
                  >
                    <input type="color" id="farge-velger" value="#4A98F7" />
                  </motion.li>
                </ul>
              </div>

              <div className="row buttons">
                <motion.button
                  whileHover={{
                    scale: 1.05,
                  }}
                  whileTap={{
                    scale: 0.9,
                  }}
                  className="clear-canvas"
                >
                  Delete
                </motion.button>
                <motion.button
                  whileHover={{
                    scale: 1.05,
                  }}
                  whileTap={{
                    scale: 0.9,
                  }}
                  className="save-img"
                >
                  Save Wireframe
                </motion.button>
              </div>
            </section>
          </li>
        </ul>
      </nav>
      <HamburgerMenu></HamburgerMenu>
      <footer>
        <div className="footer-containerWFT">
          <a href="#">Link 1</a>
          <a href="#">Link 2</a>
          <a href="#">Link 3</a>
        </div>
      </footer>
    </div>
  );
}

// Reset button, fjerner titler, bilder og navbar.

function handleResetButtonClick() {
  const textElement = document.querySelector("pTitles");
  if (textElement) {
    textElement.remove();
  }
  const textBoxElement = document.querySelector("textBox");
  if (textBoxElement) {
    textBoxElement.remove();
  }
  const pictureElement = document.querySelector("divPicture");
  if (pictureElement) {
    pictureElement.remove();
  }
  const navbarElement = document.querySelector("divNavbar");
  if (navbarElement) {
    navbarElement.remove();
  }
}

//

function handleTitlesButtonClick() {
  const titleText = "Hello, world!";
  const textElement = document.createElement("pTitles");
  textElement.innerText = titleText;
  textElement.style.position = "absolute";
  textElement.style.top = "32%";
  textElement.style.left = "42%";
  textElement.style.transform = "translate(-50%, -50%)";
  const containerElement = document.getElementById("text-container");
  document.body.appendChild(textElement);
}

// Fonts knapp, endrer fonten til titlen.

function handleFontsButtonClick() {
  const textElement = document.querySelector("pTitles");
  if (textElement) {
    const fonts = [
      "Arial, sans-serif",
      "Georgia, serif",
      "Impact, Charcoal, sans-serif",
      "Times New Roman, Times, serif",
      "Courier New, Courier, monospace",
      /*"Comic Sans MS, Comic Sans, cursive",
      "OCR A Std, monospace",
      "New Century Schoolbook, TeX Gyre Schola, serif",
      "Optima, sans-serif" */
    ];

    const currentFontIndex = fonts.indexOf(textElement.style.fontFamily);
    const nextFontIndex = (currentFontIndex + 1) % fonts.length;
    textElement.style.fontFamily = fonts[nextFontIndex];
  }
}

// Picture knapp, lager en firkant som kan dras og som kan endre størrelse.

function handlePicturesButtonClick() {
  const pictureElement = document.createElement("divPicture");
  pictureElement.style.width = "100px";
  pictureElement.style.height = "100px";
  pictureElement.style.backgroundColor = "white";
  pictureElement.style.border = "2px solid black";
  pictureElement.style.position = "absolute";
  pictureElement.style.top = "40%";
  pictureElement.style.left = "40%";
  pictureElement.style.transform = "translate(-50%, -50%)";
  pictureElement.draggable = true;
  pictureElement.addEventListener("dragstart", dragStart);
  pictureElement.addEventListener("dragend", dragEnd);
  pictureElement.addEventListener("mousedown", mouseDown);
  document.body.appendChild(pictureElement);

  function dragStart(event) {
    event.dataTransfer.setData("text/plain", event.target.id);
    event.currentTarget.style.backgroundColor = "gray";
  }

  function dragEnd(event) {
    event.currentTarget.style.backgroundColor = "white";
  }

  function mouseDown(event) {
    event.preventDefault();
    const startX = event.clientX;
    const startY = event.clientY;
    const startWidth = parseInt(
      document.defaultView.getComputedStyle(pictureElement).width,
      10
    );
    const startHeight = parseInt(
      document.defaultView.getComputedStyle(pictureElement).height,
      10
    );
    const rect = pictureElement.getBoundingClientRect();
    const elemTop = rect.top;
    const elemLeft = rect.left;
    const elemRight = rect.right;
    const elemBottom = rect.bottom;
    const border = 10;
    let isDragging = false;
    let isResizing = false;
    if (event.clientX - elemLeft < border && event.clientY - elemTop < border) {
      isResizing = true;
    } else if (
      elemRight - event.clientX < border &&
      elemBottom - event.clientY < border
    ) {
      isResizing = true;
    } else if (event.clientX - elemLeft < border) {
      isDragging = true;
      pictureElement.style.cursor = "w-resize";
    } else if (elemRight - event.clientX < border) {
      isDragging = true;
      pictureElement.style.cursor = "e-resize";
    } else if (event.clientY - elemTop < border) {
      isDragging = true;
      pictureElement.style.cursor = "n-resize";
    } else if (elemBottom - event.clientY < border) {
      isDragging = true;
      pictureElement.style.cursor = "s-resize";
    } else {
      isDragging = true;
      pictureElement.style.cursor = "move";
    }
    if (isDragging) {
      document.documentElement.addEventListener("mousemove", dragMove);
      document.documentElement.addEventListener("mouseup", dragEnd);
    }
    if (isResizing) {
      document.documentElement.addEventListener("mousemove", resizeMove);
      document.documentElement.addEventListener("mouseup", resizeEnd);
    }

    function dragMove(event) {
      const newX = elemLeft + event.clientX - startX;
      const newY = elemTop + event.clientY - startY;
      pictureElement.style.left = `${newX}px`;
      pictureElement.style.top = `${newY}px`;
    }

    function resizeMove(event) {
      const newWidth = startWidth + event.clientX - startX;
      const newHeight = startHeight + event.clientY - startY;
      pictureElement.style.width = `${newWidth}px`;
      pictureElement.style.height = `${newHeight}px`;
      if (
        event.clientX - elemLeft < border &&
        event.clientY - elemTop < border
      ) {
        pictureElement.style.cursor = "nw-resize";
      } else if (
        elemRight - event.clientX < border &&
        elemBottom - event.clientY < border
      ) {
        pictureElement.style.cursor = "se-resize";
      } else if (event.clientX - elemLeft < border) {
        pictureElement.style.cursor = "w-resize";
      } else if (elemRight - event.clientX < border) {
        pictureElement.style.cursor = "e-resize";
      } else if (event.clientY - elemTop < border) {
        pictureElement.style.cursor = "n-resize";
      } else if (elemBottom - event.clientY < border) {
        pictureElement.style.cursor = "s-resize";
      } else {
        pictureElement.style.cursor = "nwse-resize";
      }
    }

    function dragEnd(event) {
      document.documentElement.removeEventListener("mousemove", dragMove);
      document.documentElement.removeEventListener("mouseup", dragEnd);
      pictureElement.style.cursor = "default";
    }

    function resizeEnd(event) {
      document.documentElement.removeEventListener("mousemove", resizeMove);
      document.documentElement.removeEventListener("mouseup", resizeEnd);
      pictureElement.style.cursor = "default";
    }
  }
}

// Navbar knapp, lager en navbar på skjermen.

function handleNavbarButtonClick() {
  const navbarElement = document.createElement("divNavbar");
  navbarElement.style.width = "200px";
  navbarElement.style.height = "50px";
  navbarElement.style.backgroundColor = "white";
  navbarElement.style.border = "2px solid black";
  navbarElement.style.position = "absolute";
  navbarElement.style.top = "50%";
  navbarElement.style.left = "50%";
  navbarElement.style.transform = "translate(-50%, -50%)";
  document.body.appendChild(navbarElement);
}

/* Javascript for canvas og funksjonalitet ----------------- */

export default WireframeTool;
