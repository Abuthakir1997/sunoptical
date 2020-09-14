import React from 'react';
import './Header.css';

const header = () => {
    return (
        <div className="Header">
            <div className="logo">
                <img src={require("../../asserts/sun-logo.png")} alt="header-logo"></img>
            </div>
            <h1><span>Sun</span> Optical</h1>

        </div>
    )
}

export default header;