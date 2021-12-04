import React from 'react';
import './Footer.scss';

const footer = (props) => {
    return (
        <div className="footer">
            <img src={require("./footer-image.jpg")} alt="header-logo" className="w-100"></img>
        </div>
    )
}

export default footer;