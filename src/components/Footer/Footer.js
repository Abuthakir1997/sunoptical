import React from "react";
import "./Footer.scss";

const Footer = () => {
    return (
        <div className="footer">
            <div className="row m-0">
                <div className="col-12 col-md-3 instagram">
                    <div className="p-3">
                        <span className="d-block">
                            <i className="fa fa-instagram"></i>
                        </span>
                        <span className="reference"><i style={{ textDecoration: "underline" }}><a href="https://www.instagram.com/sunopticalssivakasi/" rel="noopener noreferrer" target="_blank">sunopticalssivakasi</a></i></span>
                    </div>
                </div>
                <div className="col-12 col-md-3 facebook">
                    <div className="p-3">
                        <span className="d-block">
                            <i className="fa fa-facebook-f"></i>
                        </span>
                        <span className="reference"><i style={{ textDecoration: "underline" }}><a href="https://www.facebook.com/sunopticalsivakasi/" rel="noopener noreferrer" target="_blank">Sun Optical</a></i></span>
                    </div>
                </div>
                <div className="col-12 col-md-3 location">
                    <div className="p-3">
                        <span className="d-block">
                            <i className="fa fa-map-marker"></i>
                        </span>
                        <span className="reference"><i style={{ textDecoration: "underline" }}><a href="https://goo.gl/maps/tioPkUXiQhZmdtBd6" rel="noopener noreferrer" target="_blank">Location</a></i></span>
                    </div>
                </div>
                <div className="col-12 col-md-3 contact">
                    <div className="p-3">
                        <span className="d-block">
                            <i className="fa fa-phone"></i>
                        </span>
                        <span className="reference"><i style={{ textDecoration: "none" }}>+91-7708473942</i></span>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Footer;