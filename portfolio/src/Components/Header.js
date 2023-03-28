import React from "react";
import { Link } from "react-router-dom";

function Header() {
    return(
        <header className="nav">
            <div className="about">
                <Link to="/about">ABOUT</Link>
            </div>
            <div className="portfolio">
                <Link to="/portfolio">PORTFOLIO</Link>
            </div>
            
            <div className="contact">
                <Link to="/contact">CONTACT</Link>
            </div>
        </header> 
    )
}

export default Header;