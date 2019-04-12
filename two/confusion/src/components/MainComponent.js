import React, { Component } from 'react';

import { Navbar, NavbarBrand } from 'reactstrap'; // bootstrap componenet imported from reactstrap

import Menu from './MenuComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';

import Dishdetail from './DishdetailComponenet'

import { DISHES } from '../shared/dishes'


// Add a Container Component
class Main extends Component {

  constructor(props){
    super(props);

    this.state = {
      dishes : DISHES,
      selectedDish : null
    };

  }// constructor

    // track dishId only not whole dish
    onDishSelect(dishId){
        this.setState({selectedDish: dishId}); 
    }

  render() {
    return (
      <div>
      
        <Header />

        <Menu 
              dishes={this.state.dishes} 
              onClick={ (dishId) => {this.onDishSelect(dishId)} } 
          /> 

        <Dishdetail 
              dish = { this.state.dishes.filter( (dish)=> dish.id === this.state.selectedDish  )[0] } 
          />

        <Footer />
      
      </div>
    );
  }
}

export default Main;
