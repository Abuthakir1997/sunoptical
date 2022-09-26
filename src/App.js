import React from 'react';
import { useState } from 'react';
import './App.scss';
import Header from './components/Header/Header';
import Banner from './components/Banner/Banner';
import CrizalWrapper from './components/CrizalWrapper/CrizalWrapper';
import Backdrop from './components/Backdrop/Backdrop';
import Sidedrawer from "./components/SideDrawer/sidedrawer";
import SimpleSlider from './components/Slider/SimpleSlider';
import SliderFooter from "./components/SliderFooter/sliderfooter";
import FramesShapes from "./components/FramesShapes/FramesShapes";
import FramesLogosSection from './components/FramesLogosSection/FramesLogosSection';
import Footer from "./components/Footer/Footer";
import {Routes, Route } from "react-router-dom";
//import Loader from "../src/loader";

const App = () => {
  const [backdropdisplay, setbackdropdisplay] = useState(false);
  const [type, setType] = useState("");
  const [showsidedrawer, setShowSideDrawer] = useState(false);
  const [sidebackdropdisplay, setsidebackdropdisplay] = useState(false);
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
      setType({ type: text})
      // setState({
      //   backdropdisplay: true,
       
      // })
    }

    else if (text === 'Frames') {
      setbackdropdisplay(true);
      setType(text);
      // setState({
      //   backdropdisplay: true,
      //   type: text
      // });
    }

    else {
      setbackdropdisplay(false);
      // this.setState({
      //   backdropdisplay: false
      // })
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

  const notshowingSidedrawer = (e) => {
    setsidebackdropdisplay(false);
    setShowSideDrawer(false);
    // this.setState({
    //   showsidedrawer: false,
    //   sidebackdropdisplay: false,
    // });

  }

  const showingSidedrawer = (e) => {
    setShowSideDrawer(true);
    setbackdropdisplay(true);
    // this.setState({
    //   showsidedrawer: true,
    //   sidebackdropdisplay: true
    // });
  }

    return (
      <div className="App">
        {/* <Routes>
            <Route path='/frames' element={<Backdrop  currentPage={currentPage}  type={type} clicked={showingFalseHandler} show={backdropdisplay} changingPage={(event) => handleClick(event)}/>} exact/>
          </Routes> */}
        {/* <Loader showingLoader={this.state.showingLoader} /> */}
        <Sidedrawer clicked={(e) => showingTrueHandler(e)} clickedbackdrop={(e) => notshowingSidedrawer(e)} showingsidedrawer={showsidedrawer} show={sidebackdropdisplay}></Sidedrawer>
        <Header clicked={(e) => showingTrueHandler(e)} clickedbackdrop={(e) => notshowingSidedrawer(e)} showingsidedrawer={(e) => showingSidedrawer(e)} ></Header>
        <Banner show={backdropdisplay}></Banner>
        <CrizalWrapper></CrizalWrapper>
         <Backdrop  currentPage={currentPage} type={type} clicked={showingFalseHandler} show={backdropdisplay} changingPage={handleClick}></Backdrop>
        <SimpleSlider></SimpleSlider>
        <SliderFooter></SliderFooter>
        <FramesShapes show={backdropdisplay}></FramesShapes>
        <FramesLogosSection />
        <Footer></Footer>
      </div>
    );
}
export default App;
