import React from 'react';
import "../SideDrawer/sidedrawer.scss";
import SideBackDrop from "../Backdrop/SideBackDrop/sidebackdrop";
import Auxx from "../../hoc/Auxx";
import { Link } from 'react-router-dom';
const sidedrawer = (props) => {
    return (

        <Auxx>
            <SideBackDrop show={props.show} clickedbackdrop={props.clickedbackdrop}></SideBackDrop>
            <div className="side-drawer" style={{ transform: props.showingsidedrawer ? "translateX(0)" : "translateX(100%)" }}>
                <div className="side-drawer__menu ml-auto">
                    <div className="side-drawer__menu__items" onClick={props.clickedbackdrop} show={props.show}>Home</div>
                    <Link to="/frames">
                        <div className="side-drawer__menu__items" onClick={props.clickedbackdrop} show={props.show}>Frames</div>
                    </Link>
                    <Link to="/sunglasses">
                        <div className="side-drawer__menu__items" onClick={props.clickedbackdrop} show={props.show}>Sunglasses</div>
                    </Link>
                    <div className="side-drawer__menu__items d-none" onClick={props.clicked}>Galleries</div>
                    <div className="side-drawer__menu__items"></div>
                </div>
            </div>
        </Auxx>
    )


}


export default sidedrawer;
