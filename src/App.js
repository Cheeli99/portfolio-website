import React, { Component } from 'react'
import Navbar from './components/Navbar.js';
import Body from './components/Body.js';
import Footer from './components/Footer.js';
import '../node_modules/bootstrap/dist/js/bootstrap.js';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import './index.css';

class App extends Component {
  render() {
    return (
      <div className="container">
        <Navbar />
        <Body />
        <Footer />
      </div>
    );
  }
}

export default App;