import React from 'react';
import './App.scss';
import { useState } from 'react';
import Sidedrawer from "./components/SideDrawer/sidedrawer";
import { Routes, Route } from "react-router-dom";
import Frames from './components/Frames-section/Frames';
import Sunglasses from './components/sunglasses-section/sunglasses-section';
import { useEffect } from 'react';
import SnowEffect from './customized-components/snow-component/snow-component';
import DiscountPage from './customized-components/discount-component/discount-component';
import Home from './components/Home/home';

const App = () => {
  const [showSideDrawer, setShowSideDrawer] = useState(false);
  const [showingDiscountPage, setShowingDiscountPage] = useState(true);
  const delay = 1;

  const handleSideDrawer = () => {
    setShowSideDrawer(true);
  }
  const closeSideDrawer = () => {
    console.log("CLICKED CLOSE");
    setShowSideDrawer(false);
  }
  console.log("showingDiscountPage before", showingDiscountPage);
  useEffect(() => {
    console.log("inside useeffect");
    let timer1 = setTimeout(() => {
      console.log("showingDiscountPage", showingDiscountPage);
      setShowingDiscountPage(false);
    }, delay * 6000);
    return () => {
      clearTimeout(timer1);
    };
  }, [showingDiscountPage]);


  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home handleSideDrawer={() => handleSideDrawer()} />} exact />
        <Route path="/frames" element={<Frames />} exact />
        <Route path="/sunglasses" element={<Sunglasses />} exact />
      </Routes>
      {
        showingDiscountPage ? <DiscountPage /> : null
      }


      <Sidedrawer showSideDrawer={showSideDrawer} closeSideDrawer={closeSideDrawer}></Sidedrawer>
      <SnowEffect />
      {/* <Banner show={backdropdisplay}></Banner>
        <CrizalWrapper></CrizalWrapper>
        <SimpleSlider></SimpleSlider>
        <SliderFooter></SliderFooter>
        <FramesShapes show={backdropdisplay}></FramesShapes>
        <FramesLogosSection />
        <Footer></Footer> 
        */}
    </div>
  );
}
export default App;
