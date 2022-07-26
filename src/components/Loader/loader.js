import React from "react";
import "./loader.scss";

const loader = (props) => {
    return (
        <div className={`loader ${props.showingloader ? "d-block" : "d-none"}`}>

        </div>
    )
}

export default loader;
