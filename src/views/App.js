import React, { Component } from 'react';
import '../css/style.css';
import 'bootstrap/dist/css/bootstrap-grid.min.css';
import RouterDirect from '../routes/RouterDirect.js';
import Footer from '../component/Footer/Footer.js';
import Header from '../component/Header/Header';

class App extends Component {
  render() {
    return (
      <div className="wrapper">
        <Header></Header>
        <RouterDirect></RouterDirect>
        <Footer></Footer>
      </div>
    );
  }
}

export default App;
