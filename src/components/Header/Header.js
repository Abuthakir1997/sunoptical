import React from 'react';
import './Header.scss';

const header = (props) => {

    //shrinking navbar
    function onScroll() {
        const scrollOffset = window.pageYOffset;
        const menu = document.querySelector('.header__menu');
        const navbar = document.querySelector(".header__navbar");
        const logo = document.querySelector(".logo-name");
        const logoImage = document.querySelector(".header__logo");

        if (scrollOffset > 20) {
            menu.classList.add("move");
            logo.classList.add("d-none");
            navbar.style.backgroundImage = "linear-gradient(90deg, rgb(149 163 189) 0%, rgb(15, 15, 15) 50%)";
            logoImage.style.transform = "scale(0.8)";
        }
        else {
            menu.classList.remove("move");
            logo.classList.remove("d-none");
            navbar.style.backgroundImage = "linear-gradient(90deg, #0f0f0f 0%, #223c6c 50%)";
            logoImage.style.transform = "scale(1)";
        }
    }

    window.addEventListener("scroll", onScroll);
    return (
        <div className="header">
            <div className="header__navbar">
                <div className="header__logo">
                    <img src={require("../../asserts/sun-logo.png")} alt="header-logo"></img>
                </div>
                <div className="logo-name">Sun Optical</div>
                <div className="header__menu ml-auto d-none d-md-flex">
                    <div className="header__menu__items__home">Home</div>
                    <div className="header__menu__items__frames" onClick={props.clicked}>Frames</div>
                    <div className="header__menu__items__sunglasses" onClick={props.clicked}>Sunglasses</div>
                    <div className="header__menu__items__galleries" onClick={props.clicked}>Galleries</div>
                    <div className="header__menu__items"></div>
                </div>
                <div className="toggle ml-auto mr-3 p-4 d-sm-block d-md-none" onClick={props.showingsidedrawer}>
                    <span><i className="fa fa-bars"></i></span>
                </div>
            </div>
        </div>
    )
}

export default header;