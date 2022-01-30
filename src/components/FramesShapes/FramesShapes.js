import React from "react";
import "./FramesShapes.scss";

const framesShapes = (props) => {
    return (
        <div className={`frames-stories ${props.show ? "d-none" : ""}`}>
            <div className="bg-video">
                <video className="bg-video__content" autoPlay muted loop>
                    <source src={require("./videos/framesshapes-1.mp4")} type="video/mp4" />
                    {/* <source src="./videos/videoplayback.webm" type="video/webm" /> */}
                    your browser does not support video
                </video>
            </div>

        </div>
    )
}

export default framesShapes;