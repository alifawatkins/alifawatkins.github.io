import React from "react";
import { Link } from "react-router-dom";

function Header() {
    return(
        <header className="nav">
            <div className="home">
                <Link to="/stocks">HOME</Link>
            </div>
            <div className="about">
                <Link to="/about">ABOUT</Link>
            </div>
        </header> 
    )
}

export default Header;