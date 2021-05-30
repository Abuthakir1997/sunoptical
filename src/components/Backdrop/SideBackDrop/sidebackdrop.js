import React from 'react';
import "./sidebackdrop.scss";

const sidebackdrop = (props) => {
    return (
        props.show ?
            <div className="side-back-drop" onClick={props.clickedbackdrop}>

            </div>
            : null
    )
}

export default sidebackdrop;