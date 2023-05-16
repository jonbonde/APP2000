import {React, useState } from 'react';
import { Link } from "react-router-dom";
import { motion } from 'framer-motion';
import { vAutoAnimate  } from '@formkit/auto-animate'


function HamburgerMenu() {
  const [isOpen, setIsOpen] = useState(false);

  function handleClick() {
    setIsOpen(!isOpen);
  }
  return (
    <div className={`hamburger-menu ${isOpen ? 'open' : ''}`} onClick={handleClick} enableAnimations>
      <div className="bar"></div>
      <div className="bar"></div>
      <div className="bar"></div>
      {isOpen && (
        <div className="menu-options">
          <ul >
            <li><motion.div 
              whileHover={{scale: 1.1}} whileTap={{scale: 0.9}} onClick={() => null}
              ><Link to="/">Home</Link></motion.div>
            </li>
            <li><motion.div
              whileHover={{scale: 1.1}} whileTap={{scale: 0.9}} onClick={() => null}
              ><Link to="/LoggInn">Log in</Link></motion.div>
            </li>
            <li><motion.div
              whileHover={{scale: 1.1}} whileTap={{scale: 0.9}} onClick={() => null}
              ><Link to="/Markedsplass">Marketplace</Link></motion.div>
            </li>
            {/* <li><motion.div
              whileHover={{scale: 1.1}} whileTap={{scale: 0.9}} onClick={() => null}
              ><Link to="/WireframeTool">Website designer</Link></motion.div>
            </li> */}
            <li><motion.div
              whileHover={{scale: 1.1}} whileTap={{scale: 0.9}} onClick={() => null}
              ><Link to="/Test">Wireframe Tool</Link></motion.div>
            </li>
            
            {/* <li><motion.div
              whileHover={{scale: 1.1}} whileTap={{scale: 0.9}} onClick={() => null}
              ><Link to="/WFTest">Test</Link></motion.div>
            </li> */}
          </ul>
        </div>
       
        
      )}

    </div>
  );
}

export default HamburgerMenu;