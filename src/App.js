import React, { Component } from 'react';
import './App.scss';
import Header from './components/Header/Header';
import Banner from './components/Banner/Banner';
import Footer from './components/Footer/Footer';
import Backdrop from './components/Backdrop/Backdrop';
import Sidedrawer from "./components/SideDrawer/sidedrawer";
import SimpleSlider from './components/Slider/SimpleSlider';

class App extends Component {
  state = {
    backdropdisplay: false,
    type: "",
    showsidedrawer: false,
    sidebackdropdisplay: false,
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
      this.setState({
        backdropdisplay: false
      })
    }

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
        <Header clicked={(e) => this.showingTrueHandler(e)} showingsidedrawer={(e) => this.showingSidedrawer(e)}></Header>
        <Banner></Banner>
        <Footer></Footer>
        <Backdrop type={this.state.type} clicked={this.showingFalseHandler} show={this.state.backdropdisplay}></Backdrop>
        <SimpleSlider></SimpleSlider>
      </div>
    )
  }
}
export default App;
