import React from 'react';
import './Footer.scss';

const footer = (props) => {
    return (
        <div className={`footer ${props.show ? "no-backdrop" : "has-backdrop"}`}>
            <img src={require("./footer-image.jpg")} alt="header-logo" className="w-100"></img>
        </div>
    )
}

export default footer;