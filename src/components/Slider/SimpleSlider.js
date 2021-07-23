import React, { Component } from "react";
import Slider from "react-slick";
import "../Slider/_slick.scss";
import "../Slider/_slickTheme.scss";

export default class SimpleSlider extends Component {
    render() {
        const settings = {
            centerMode: true,
            centerPadding: '60px',
            slidesToShow: 3,
            responsive: [
                {
                    breakpoint: 768,
                    settings: {
                        arrows: false,
                        centerMode: true,
                        centerPadding: '40px',
                        slidesToShow: 3
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        arrows: false,
                        centerMode: true,
                        centerPadding: '40px',
                        slidesToShow: 1
                    }
                }
            ]
        };
        const array = ["1", "2", "3", "4", "5"];

        const newarrivals = array.map(newarrival => {
            return (
                <div className="new-arrival-images-section" key={`${newarrival}`}>
                    <img src={require(`../Slider/new arrivals/newarrival-${newarrival}.jpg`)} alt="new-arrival-images" />
                </div>

            )

        });
        return (
            <div className="parent-slider">
                <Slider {...settings}>
                    {newarrivals}
                </Slider>
            </div>
        );
    }
}