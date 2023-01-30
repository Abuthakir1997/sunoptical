import React from "react";
import Auxx from "../../hoc/Auxx";
import "../Header/Header";
import Banner from "../Banner/Banner";
import SimpleSlider from "../Slider/SimpleSlider";
import FramesLogosSection from "../FramesLogosSection/FramesLogosSection";
import FramesShapes from "../FramesShapes/FramesShapes";
import SliderFooter from "../SliderFooter/sliderfooter";
import CrizalWrapper from "../CrizalWrapper/CrizalWrapper";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
const Home = (props) => {
    const {
        handleSideDrawer,
        show
    } = props;
    console.log("backdropdisplay", show);
    return (
        <Auxx>
            {/* <Sidedrawer clicked={(e) => showingTrueHandler(e)} showingsidedrawer={showsidedrawer} show={backdropdisplay} clickedbackdrop={(e) => notshowingSidedrawer(e)} ></Sidedrawer> */}
            {/* <Header clicked={props.clicked} clickedbackdrop={props.clickedbackdrop} showingsidedrawer={props.showingSidedrawer}></Header>  */}
            <Header clicked={props.clicked} clickedbackdrop={props.clickedbackdrop} handleSideDrawer={() => handleSideDrawer()}></Header>
            <Banner show={props.show}></Banner>
            <CrizalWrapper></CrizalWrapper>
            <SimpleSlider></SimpleSlider>
            <SliderFooter></SliderFooter>
            <FramesShapes show={props.backdropdisplay}></FramesShapes>
            <FramesLogosSection />
            <Footer></Footer>


        </Auxx>
    )


}


export default Home;