import React, { Component } from 'react';
import logo from './logo.svg';

import { Navbar, NavbarBrand } from 'reactstrap'; // bootstrap componenet imported from reactstrap

import Menu from './components/MenuComponent';

import Main from './components/MainComponent';

import './App.css';

import { BrowserRouter } from 'react-router-dom';

import { Provider } from 'react-redux';

import { ConfigureStore } from './redux/configureStore';

import { DISHES } from './shared/dishes'

const store = ConfigureStore();

class App extends Component {




  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div>
            <Main />
          </div>
        </BrowserRouter>
      </Provider>

      
    );
  }
}

export default App;
