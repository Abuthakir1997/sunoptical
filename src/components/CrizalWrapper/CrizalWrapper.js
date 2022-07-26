import React from 'react';
import './CrizalWrapper.scss';

const crizalWrapper = (props) => {
    return (
        <div className="crizal-wrapper">
            <img src={require("./footer-image.jpg")} alt="header-logo" className="w-100"></img>
        </div>
    )
}

export default crizalWrapper;