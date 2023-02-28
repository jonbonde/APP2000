import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link to="/" className="nav-link p-2">Forside</Link> <br />
            <Link to="/Markedsplass" className="nav-link p-2">Markedsplass</Link> <br />
        </nav>
    );
}

export default Navbar;