import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link to="/" className="nav-link mx-3">Forside</Link>
            <Link to="/Markedsplass" className="nav-link mx-3">Markedsplass</Link>
        </nav>
    );
}

export default Navbar;