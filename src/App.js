import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Banner from './components/Banner/Banner';
import Footer from './components/Footer/Footer';
import Backdrop from './components/Backdrop/Backdrop';

class App extends Component {
  state = {
    backdropdisplay: false
  }

  showingTrueHandler = () => {
    this.setState({
      backdropdisplay: true
    })
  }
  showingFalseHandler = () => {
    this.setState({
      backdropdisplay: false
    })
  }
  render() {
    return (
      <div className="App">
        <Header clicked={this.showingTrueHandler}></Header>
        <Banner></Banner>
        <Footer></Footer>
        <Backdrop clicked={this.showingFalseHandler} show={this.state.backdropdisplay}></Backdrop>
      </div>
    )
  }
}
export default App;
