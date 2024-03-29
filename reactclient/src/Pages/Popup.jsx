import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

function Popup() {
  const [showPopup, setShowPopup] = useState(false);
  const [hideNavbar, setHideNavbar] = useState(false);

  useEffect(() => {
    setShowPopup(true);
    setHideNavbar(true);
  }, []);

  const closePopup = () => {
    setShowPopup(false);
    setHideNavbar(false);
  };

  return (
    <>
      {showPopup && (
        <div className="popup">
          <div 
          className="popup-content">
            <h2>Design your custom webpage!</h2>
            <p>Choose from the multiple options that are provided.</p>
            <a onClick={closePopup} className="popup-close-button">
             Got it!
            </a>
          </div>
        </div>
      )}
      {hideNavbar && <style>{`.navbarRight, .navbarBottom { display: none; }`}</style>}
    </>
  );
}

export default Popup;
