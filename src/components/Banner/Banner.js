import React from 'react';
import './Banner.scss';

const Banner = () => {
    return (
        <div className="Banner">
            <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img className="d-block w-100" src={require("../Banner/Banner-images/essilor.jpg")} alt="First slide" />
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" src={require("../Banner/Banner-images/contact-lens.jpg")} alt="Second slide" />
                    </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>
        </div>
    )
}


export default Banner;