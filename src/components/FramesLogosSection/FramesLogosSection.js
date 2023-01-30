import React from "react";
import "./FramesLogosSection.scss";

const FramesLogosSection = () => {
    return (
        <div className="frames-logos-section">
            <img src={require("../../asserts/frames-company-logos.jpg")} alt="framescompanylogos" />
        </div>
    );
}

export default FramesLogosSection;