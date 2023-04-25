import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { motion } from 'framer-motion';

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
          <motion.div 
            whileHover={{scale: 1.1}} whileTap={{scale: 0.9}} onClick={() => null}
          ><Link to="/">Forside</Link></motion.div>
          <motion.div
            whileHover={{scale: 1.1}} whileTap={{scale: 0.9}} onClick={() => null}
          ><Link to="/Markedsplass">Markedsplass</Link></motion.div>
          <motion.div
            whileHover={{scale: 1.1}} whileTap={{scale: 0.9}} onClick={() => null}
          ><Link to="/WireframeTool">Website designer</Link></motion.div>
          <motion.div
            whileHover={{scale: 1.1}} whileTap={{scale: 0.9}} onClick={() => null}
          ><Link to="/LoggInn">Logg inn</Link></motion.div>
          <motion.div
            whileHover={{scale: 1.1}} whileTap={{scale: 0.9}} onClick={() => null}
          ><Link to="/WFTest">Test</Link></motion.div>
          <motion.div
            whileHover={{scale: 1.1}} whileTap={{scale: 0.9}} onClick={() => null}
          ><Link to="/Test">Test2</Link></motion.div>
        </div>
       
        
      )}
    </div>
  );
}

export default HamburgerMenu;