import React from 'react';
import { useState } from 'react';
import './App.scss';
import Header from './components/Header/Header';
import Banner from './components/Banner/Banner';
import CrizalWrapper from './components/CrizalWrapper/CrizalWrapper';
import Sidedrawer from "./components/SideDrawer/sidedrawer";
import SimpleSlider from './components/Slider/SimpleSlider';
import SliderFooter from "./components/SliderFooter/sliderfooter";
import FramesShapes from "./components/FramesShapes/FramesShapes";
import FramesLogosSection from './components/FramesLogosSection/FramesLogosSection';
import Footer from "./components/Footer/Footer";
import { Routes, Route } from "react-router-dom";
import Frames from './components/Frames-section/Frames';
import Sunglasses from './components/sunglasses-section/sunglasses-section';
import Auxx from './hoc/Auxx';
import SnowEffect from './customized-components/snow-component/snow-component';
//import Loader from "../src/loader";

const App = () => {
  const [backdropdisplay, setbackdropdisplay] = useState(false);
  const [type, setType] = useState("");
  const [showsidedrawer, setShowSideDrawer] = useState(false);
  const [currentPage, setcurrentPage] = useState(0);

  // state = {
  //   backdropdisplay: false,
  //   type: "",
  //   showsidedrawer: false,
  //   sidebackdropdisplay: false,
  //   showingLoader: true
  // }

  const showingTrueHandler = (e) => {

    console.log(e.target.textContent);
    var text = e.target.textContent;
    if (text === 'Sunglasses') {
      setbackdropdisplay(true);
      setType(text)
    }

    else if (text === 'Frames') {
      setbackdropdisplay(true);
      setType(text);
    }

    else {
      setbackdropdisplay(false);
    }

  }

  const handleClick = (event) => {
    setcurrentPage(Number(event.target.id));
    // this.setState({
    //   currentPage: 
    // });
  }

  const showingFalseHandler = () => {
    setbackdropdisplay(false);
  }

  const showingSidedrawer = (e) => {
    setShowSideDrawer(true);
    setbackdropdisplay(true);
    // this.setState({
    //   showsidedrawer: true,
    //   sidebackdropdisplay: true
    // });
  }


  const notshowingSidedrawer = (e) => {
    setbackdropdisplay(false)
    setShowSideDrawer(false);
    //setsidebackdropdisplay(false);
    // this.setState({
    //   showsidedrawer: false,
    //   sidebackdropdisplay: false,
    // });

  }

  return (
    <div className="App">
      <Routes>
        {/* <Route path='/frames' element={<Backdrop  currentPage={currentPage}  type={type} clicked={showingFalseHandler} show={backdropdisplay} changingPage={(event) => handleClick(event)}/>} exact/> */}
        <Route path="/frames" element={<Frames currentPage={currentPage} type={type} clicked={showingFalseHandler} show={backdropdisplay} changingPage={(event) => handleClick(event)}></Frames>} />
        <Route path="/sunglasses" element={<Sunglasses currentPage={currentPage} type={type} clicked={showingFalseHandler} show={backdropdisplay} changingPage={(event) => handleClick(event)}></Sunglasses>} />
      </Routes>
      {/* <Loader showingLoader={this.state.showingLoader} /> */}
      <Auxx>
        <Sidedrawer clicked={(e) => showingTrueHandler(e)} showingsidedrawer={showsidedrawer} show={backdropdisplay} clickedbackdrop={(e) => notshowingSidedrawer(e)} ></Sidedrawer>
        <Header clicked={(e) => showingTrueHandler(e)} clickedbackdrop={(e) => notshowingSidedrawer(e)} showingsidedrawer={(e) => showingSidedrawer(e)}></Header>
        <Banner show={backdropdisplay}></Banner>
        <CrizalWrapper></CrizalWrapper>
        {/* <Backdrop  currentPage={currentPage} type={type} clicked={showingFalseHandler} show={backdropdisplay} changingPage={handleClick}></Backdrop> */}
        <SimpleSlider></SimpleSlider>
        <SliderFooter></SliderFooter>
        <FramesShapes show={backdropdisplay}></FramesShapes>
        <FramesLogosSection />
        <Footer></Footer>
        <SnowEffect />
      </Auxx>

    </div>
  );
}
export default App;
