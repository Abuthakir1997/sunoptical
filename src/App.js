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
    setShowSideDrawer(false);
  }
  useEffect(() => {
    let timer1 = setTimeout(() => {
      setShowingDiscountPage(false);
    }, delay * 9000);
    return () => {
      clearTimeout(timer1);
    };
  }, [showingDiscountPage]);


  return (
    <div className="App">
      {
        showingDiscountPage ? <DiscountPage /> :
          <>
            <Routes>
              <Route path='/' element={<Home handleSideDrawer={() => handleSideDrawer()} />} exact />
              <Route path="/frames" element={<Frames />} exact />
              <Route path="/sunglasses" element={<Sunglasses />} exact />
            </Routes>
            <Sidedrawer showSideDrawer={showSideDrawer} closeSideDrawer={closeSideDrawer}></Sidedrawer>
            <SnowEffect />
          </>
      }
    </div>
  );
}
export default App;
