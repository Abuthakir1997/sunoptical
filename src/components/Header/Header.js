import React from 'react';
import './Header.scss';

const header = () => {

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
            navbar.style.padding = "0";
            navbar.style.backgroundImage = "linear-gradient(90deg, rgb(149 163 189) 0%, rgb(15, 15, 15) 50%)";
            logoImage.style.transform = "scale(0.8)";
        }
        else {
            menu.classList.remove("move");
            logo.classList.remove("d-none");
            navbar.style.padding = "20px";
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
                <div className="header__menu ml-auto">
                    <div className="header__menu__items">Home</div>
                    <div className="header__menu__items">Frames</div>
                    <div className="header__menu__items">Sunglasses</div>
                    <div className="header__menu__items"></div>
                </div>
            </div>
        </div>
    )
}

export default header;