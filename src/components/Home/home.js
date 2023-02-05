import React from "react";
import "../Header/Header";
import Banner from "../Banner/Banner";
import SimpleSlider from "../Slider/SimpleSlider";
import FramesLogosSection from "../FramesLogosSection/FramesLogosSection";
import FramesShapes from "../FramesShapes/FramesShapes";
import SliderFooter from "../SliderFooter/sliderfooter";
import CrizalWrapper from "../CrizalWrapper/CrizalWrapper";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import { useEffect } from "react";
const Home = (props) => {
    const {
        handleSideDrawer,
    } = props;

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <Header clicked={props.clicked} clickedbackdrop={props.clickedbackdrop} handleSideDrawer={() => handleSideDrawer()}></Header>
            <Banner></Banner>
            <CrizalWrapper></CrizalWrapper>
            <SimpleSlider></SimpleSlider>
            <SliderFooter></SliderFooter>
            <FramesShapes show={props.backdropdisplay}></FramesShapes>
            <FramesLogosSection />
            <Footer></Footer>

        </>

    )


}


export default Home;