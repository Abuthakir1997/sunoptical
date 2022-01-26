import React, { Component } from 'react';
import './App.scss';
import Header from './components/Header/Header';
import Banner from './components/Banner/Banner';
import Footer from './components/Footer/Footer';
import Backdrop from './components/Backdrop/Backdrop';
import Sidedrawer from "./components/SideDrawer/sidedrawer";
import SimpleSlider from './components/Slider/SimpleSlider';
import SliderFooter from "./components/SliderFooter/sliderfooter";
import loader from "../src/loader";

class App extends Component {
  state = {
    backdropdisplay: false,
    type: "",
    showsidedrawer: false,
    sidebackdropdisplay: false,
    showingLoader: true

  }
  showingTrueHandler = (e) => {
    console.log(e.target.textContent);
    var text = e.target.textContent;
    if (text === 'Sunglasses') {
      this.setState({
        backdropdisplay: true,
        type: text
      })
    }
    else if (text === 'Frames') {
      this.setState({
        backdropdisplay: true,
        type: text
      });

    }
    else {
      this.changingHandler(e);
      this.setState({
        backdropdisplay: false
      })
    }

  }

  handleClick(event) {
    this.setState({
      currentPage: Number(event.target.id)
    });
  }
  showingFalseHandler = () => {
    this.setState({
      backdropdisplay: false,
    })
  }
  notshowingSidedrawer = (e) => {
    this.setState({
      showsidedrawer: false,
      sidebackdropdisplay: false,
    });

  }
  showingSidedrawer = (e) => {
    this.setState({
      showsidedrawer: true,
      sidebackdropdisplay: true
    });
  }
  componentDidCatch() {
    this.setState({
      showingLoader: false
    })
  }

  render() {

    return (
      <div className="App">
        <loader />
        <Sidedrawer clicked={(e) => this.showingTrueHandler(e)} clickedbackdrop={(e) => this.notshowingSidedrawer(e)} showingsidedrawer={this.state.showsidedrawer} show={this.state.sidebackdropdisplay}></Sidedrawer>
        <Header clicked={(e) => this.showingTrueHandler(e)} showingsidedrawer={(e) => this.showingSidedrawer(e)} ></Header>
        <Banner show={this.state.backdropdisplay}></Banner>
        <Footer></Footer>
        <Backdrop pictures={this.state.pictures} currentPage={this.state.currentPage} todosPerPage={this.state.todosPerPage} type={this.state.type} clicked={this.showingFalseHandler} show={this.state.backdropdisplay} changingPage={this.handleClick}></Backdrop>
        <SimpleSlider></SimpleSlider>
        <SliderFooter></SliderFooter>
      </div>
    )
  }
}
export default App;
