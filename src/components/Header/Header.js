import React from 'react';
import './Header.scss';

const header = () => {
    return (
        <div className="Header">
            <div className="left-section">
                <div className="logo">
                    <img src={require("../../asserts/sun-logo.png")} alt="header-logo"></img>
                </div>
                <h1><span>Sun</span> Optical</h1>
            </div>

            <div className="right-section ml-auto">
                <nav>
                    <ul className="nav justify-content-end underline">
                        <li><a href="home">Home</a></li>
                        <li><a href="frames">frames</a></li>
                        <li><a href="sunglasses">sunglasses</a></li>
                    </ul>
                </nav>

            </div>
        </div>
    )
}

export default header;