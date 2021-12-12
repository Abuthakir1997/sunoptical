import React, { Component } from 'react';
import './App.scss';
import Header from './components/Header/Header';
import Banner from './components/Banner/Banner';
import Footer from './components/Footer/Footer';
import Backdrop from './components/Backdrop/Backdrop';
import Sidedrawer from "./components/SideDrawer/sidedrawer";
import SimpleSlider from './components/Slider/SimpleSlider';
import SliderFooter from "./components/SliderFooter/sliderfooter";

class App extends Component {
  state = {
    backdropdisplay: false,
    type: "",
    showsidedrawer: false,
    sidebackdropdisplay: false,
    pictures: ['frames-1.jpg', 'frames-2.jpg', 'frames-3.jpg', 'frames-4.jpg', 'frames-5.jpg', 'frames-6.jpg', 'frames-7.jpg', 'frames-8.jpg', 'frames-9.jpg', 'frames-10.jpg', 'frames-11.jpg', 'frames-12.jpg', 'frames-13.jpg', 'frames-14.jpg', 'frames-15.jpg', 'frames-16.jpg', 'frames-17.jpg', 'frames-18.jpg'],
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
  changingHandler(e) {
    this.setState({
      pictures: ['sun-glassess-1.jpg', 'sun-glassess-2.jpg', 'sun-glassess-3.jpg', 'sun-glassess-4.jpg', 'sun-glassess-5.jpg'],
    });
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
  componentDidMount() {

  }
  render() {

    return (
      <div className="App">
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
