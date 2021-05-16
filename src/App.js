import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Banner from './components/Banner/Banner';
import Footer from './components/Footer/Footer';
import Backdrop from './components/Backdrop/Backdrop';

class App extends Component {
  state = {
    backdropdisplay: false,
    type: ""
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
      backdropdisplay: false
    })
  }
  render() {
    return (
      <div className="App">
        <Header clicked={(e) => this.showingTrueHandler(e)}></Header>
        <Banner></Banner>
        <Footer></Footer>
        <Backdrop type={this.state.type} clicked={this.showingFalseHandler} show={this.state.backdropdisplay}></Backdrop>
      </div>
    )
  }
}
export default App;
