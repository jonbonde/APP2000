import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <div>
            <nav>
                <Link to="/">Forside</Link> <br />
                <Link to="/Markedsplass">Markedsplass</Link> <br />
            </nav>
        </div>
    );
}

export default Navbar;