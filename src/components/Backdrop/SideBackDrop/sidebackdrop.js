import React from 'react';
import "./sidebackdrop.scss";

const sidebackdrop = (props) => {
    console.log(",,,,,,,,,,,,,,,,", props.show);
    return (
        props.show ?
            <div className="side-back-drop" onClick={props.clickedbackdrop}>

            </div>
            : null
    )
}

export default sidebackdrop;