import React from 'react';
import './Banner.scss';
const Banner = () => {
    const array = ["2", "3", "4", "5"];
    const images = array.map(image => {
        return (
            <div className="carousel-item">
                <img className="d-block slide-img w-100" src={require(`../Banner/Banner-images/slideimage-${image}.jpg`)} alt="First slide" />
            </div>
        )
    })
    return (
        <div className="Banner">
            <div className="overlay-banner">
            </div>
            <div id="carouselExampleControls" className="carousel slide" data-ride="">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img className="d-block slide-img w-100" src={require(`../Banner/Banner-images/slideimage-1.jpg`)} alt="First slide" />
                    </div>
                    {images}
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