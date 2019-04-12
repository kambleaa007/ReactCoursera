import React, { Component } from 'react';
import logo from './logo.svg';

import { Navbar, NavbarBrand } from 'reactstrap'; // bootstrap componenet imported from reactstrap

import Menu from './components/MenuComponent';

import Main from './components/MainComponent';

import './App.css';

import { BrowserRouter } from 'react-router-dom';


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
      <BrowserRouter>
        <div>
          <Main />
        </div>
      </BrowserRouter>
      
    );
  }
}

export default App;
