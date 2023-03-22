import React, { useState, useEffect } from "react";

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
          <div className="popup-content">
            <h2>Design your custom webpage!</h2>
            <p>Choose from the multiple options that are provided.</p>
            <button onClick={closePopup} className="popup-close-button">
              &#8594;
            </button>
          </div>
        </div>
      )}
      {hideNavbar && <style>{`.navbarRight { display: none; }`}</style>}
    </>
  );
}

export default Popup;
