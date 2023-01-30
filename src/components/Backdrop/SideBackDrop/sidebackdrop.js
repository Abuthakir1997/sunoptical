import React from 'react';
import "./sidebackdrop.scss";

const sidebackdrop = (props) => {
    const {
        show,
        closeSideDrawer
    } = props;
    return (
        show ?
            <div className="side-back-drop" onClick={() => closeSideDrawer()}>

            </div>
            : null
    )
}

export default sidebackdrop;