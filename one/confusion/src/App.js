import React, { Component } from 'react';
import logo from './logo.svg';

import { Navbar, NavbarBrand } from 'reactstrap'; // bootstrap componenet imported from reactstrap

import Menu from './components/MenuComponent';

import './App.css';

class App extends Component {
  render() {
    return (
      <div>
      
      <Navbar dark color="primary">        
        <div className="container">
          <NavbarBrand href="/">OneNavBar</NavbarBrand>
        </div>
      </Navbar>
      
      <Menu />


      
        
        
      <img src={logo} className="App-logo" alt="logo" />
      </div>
    );
  }
}

export default App;
