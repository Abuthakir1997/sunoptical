import React from "react";
import "./FramesLogosSection.scss";

const framesLogosSection = () => {
    return (
        <div className="frames-logos-section">
            <img src={require("../../asserts/frames-company-logos.jpg")} alt="framescompanylogos" />
        </div>
    );
}

export default framesLogosSection;