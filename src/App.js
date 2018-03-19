import React, { Component } from 'react';
import Routes from './Routes';
import Footer from './Common/Footer';
import './App.css';


class App extends Component {

  render() {
    return (
      <div className="App">
        <br /><br /><br /><br />
        <Routes />
        <br />
        <Footer />
      </div>
    );
  }
}

export default App;
