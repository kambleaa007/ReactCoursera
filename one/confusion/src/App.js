import React, { Component } from 'react';
import logo from './logo.svg';

import { Navbar, NavbarBrand } from 'reactstrap'; // bootstrap componenet imported from reactstrap

import Menu from './components/MenuComponent';

import './App.css';

import { DISHES } from './shared/dishes'

class App extends Component {

  constructor(props){
    super(props);

    this.state = {
      dishes : DISHES
    };

  }// constructor


  render() {
    return (
      <div>
      
      <Navbar dark color="primary">        
        <div className="container">
          <NavbarBrand href="/">OneNavBar</NavbarBrand>
        </div>
      </Navbar>
      
    <Menu dishes={this.state.dishes}/> 
    {
      /* // Child Componenet in `App` (Parent Componenet) 
      // Added Attib dishes
      // passing data to Menu Child Compo 
      // in child use Attib passed data thro' props
      */
     }
      
        
        
      <img src={logo} className="App-logo" alt="logo" />
      </div>
    );
  }
}

export default App;
