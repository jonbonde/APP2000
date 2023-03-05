import React, { useState } from 'react';

function HamburgerMenu() {
  const [isOpen, setIsOpen] = useState(false);

  function handleClick() {
    setIsOpen(!isOpen);
  }

  return (
    <div className={`hamburger-menu ${isOpen ? 'open' : ''}`} onClick={handleClick}>
      <div className="bar"></div>
      <div className="bar"></div>
      <div className="bar"></div>
      {isOpen && (
        <div className="menu-options">
          <a href="#">Homepage</a>
          <a href="#">Marketplace</a>
          <a href="#">Profile</a>
        </div>
      )}
    </div>
  );
}

export default HamburgerMenu;