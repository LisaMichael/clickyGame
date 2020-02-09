import React from "react";
import "../Header/style.css";

function Header() {
    return (
        <div>
            <header className="header">
                <h1>CLICKY GAME !</h1>
                <h2>Click on an image to earn points, but don't click on any more than once!</h2>
            </header>
        </div>
    );
}

export default Header;
