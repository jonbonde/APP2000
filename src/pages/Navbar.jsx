import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <div>
            <nav>
                <Link to="/">Forside</Link> <br />
                <Link to="/RegistrerBruker">Registrer bruker</Link>
            </nav>
        </div>
    );
}

export default Navbar;