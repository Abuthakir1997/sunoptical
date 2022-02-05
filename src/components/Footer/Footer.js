import React from "react";
import "./Footer.scss";

const footer = () => {
    return (
        <div className="footer">
            <div className="row m-0">
                <div className="col-12 col-md-4 instagram">
                    <div className="p-3">
                        <span className="d-block">
                            <i class="fa fa-instagram"></i>
                        </span>
                        <span className="reference"><i style={{ textDecoration: "underline" }}><a href="https://www.instagram.com/sunopticalssivakasi/" target="_blank">sunopticalssivakasi</a></i></span>
                    </div>
                </div>
                <div className="col-12 col-md-4 facebook">
                    <div className="p-3">
                        <span className="d-block">
                            <i class="fa fa-facebook-f"></i>
                        </span>
                        <span className="reference"><i style={{ textDecoration: "underline" }}><a href="https://www.facebook.com/pages/category/Sunglasses---Eyewear-Store/Sun-Optical-Sivakasi-358552978187146/" target="_blank">Sun Optical</a></i></span>
                    </div>
                </div>
                <div className="col-12 col-md-4 location">
                    <div className="p-3">
                        <span className="d-block">
                            <i class="fa fa-map-marker"></i>
                        </span>
                        <span className="reference"><i style={{ textDecoration: "underline" }}><a href="https://goo.gl/maps/tioPkUXiQhZmdtBd6" target="_blank">Location</a></i></span>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default footer;