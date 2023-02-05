import React from 'react';
import './Header.scss';
import { Link } from 'react-router-dom';
const Header = (props) => {
    const {
        handleSideDrawer
    } = props;
    return (
        <div className="header">
            <div className="header__navbar">
                <div className="header__logo">
                    <img src={require("../../asserts/sun-logo.png")} alt="header-logo"></img>
                </div>
                <div className="logo-name">Sun Optical</div>
                <div className="header__menu ml-auto d-none d-md-flex">
                    <div className="header__menu__items__home" onClick={props.clickedbackdrop}>Home</div>
                    <Link to="/frames">
                        <div className="header__menu__items__frames" onClick={props.clickedbackdrop}>Frames</div>
                    </Link>
                    <Link to="/sunglasses">
                        <div className="header__menu__items__sunglasses" onClick={props.clickedbackdrop}>Sunglasses</div>
                    </Link>

                    <div className="header__menu__items__galleries d-none" onClick={props.clickedbackdrop}>Galleries</div>
                    <div className="header__menu__items"></div>
                </div>
                <div className="toggle ml-auto mr-3 p-4 d-sm-block d-md-none" onClick={() => handleSideDrawer()}>
                    <span><i className="fa fa-bars"></i></span>
                </div>
            </div>
        </div>
    )
}

export default Header;