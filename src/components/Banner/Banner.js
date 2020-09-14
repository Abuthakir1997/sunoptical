import React from 'react';
import './Banner.css';

const Banner = () => {
    return (
        <div className="Banner">
            <img src={require("../../asserts/frame-logo.png")} alt="banner-logo"></img>
        </div>
    )
}


export default Banner;