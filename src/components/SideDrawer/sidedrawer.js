import React from 'react';
import "../SideDrawer/sidedrawer.scss";
import SideBackDrop from "../Backdrop/SideBackDrop/sidebackdrop";
import Auxx from "../../hoc/Auxx";
import { Link } from 'react-router-dom';
const Sidedrawer = (props) => {
    const { showSideDrawer, closeSideDrawer } = props;
    return (

        <Auxx>
            <SideBackDrop show={showSideDrawer} closeSideDrawer={closeSideDrawer}></SideBackDrop>
            <div className="side-drawer" style={{ transform: showSideDrawer ? "translateX(0)" : "translateX(100%)" }}>
                <div className="side-drawer__menu ml-auto">
                    <div className="side-drawer__menu__items" onClick={() => closeSideDrawer()} >Home</div>
                    <Link to="/frames">
                        <div className="side-drawer__menu__items" onClick={() => closeSideDrawer()}>Frames</div>
                    </Link>
                    <Link to="/sunglasses">
                        <div className="side-drawer__menu__items" onClick={() => closeSideDrawer()} >Sunglasses</div>
                    </Link>
                    <div className="side-drawer__menu__items d-none" onClick={props.clicked}>Galleries</div>
                    <div className="side-drawer__menu__items"></div>
                </div>
            </div>
        </Auxx>
    )


}


export default Sidedrawer;
