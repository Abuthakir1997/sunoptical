import React from "react";
import "./discount-component.styles.scss";


const DiscountPage = (props) => {
    return (
        <div className={`discount-page`}>
            <video className="bg-video__content" autoPlay muted loop>
                <source src={require("../../asserts/Clip-On Sunglasses + Blue Light Glasses _ Waykins by Trendhim.mp4")} type="video/mp4" />
                your browser does not support video
            </video>


        </div>
    )

}

export default DiscountPage;