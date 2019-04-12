import React, { Component } from 'react';

import { Navbar, NavbarBrand } from 'reactstrap'; // bootstrap componenet imported from reactstrap

import Menu from './MenuComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';

import Dishdetail from './DishdetailComponenet'

import Home from './HomeComponent';
import { Switch, Route, Redirect } from 'react-router-dom';

import { DISHES } from '../shared/dishes'


// Add a Container Component
class Main extends Component {

  constructor(props){
    super(props);

    this.state = {
      dishes : DISHES
      // Remove selectedDish : null
    };

  }// constructor

  /*
    // Remove
     track dishId only not whole dish 
     onDishSelect(dishId){
        this.setState({selectedDish: dishId}); 
     }
      
      <Dishdetail 
          dish = { this.state.dishes.filter( (dish)=> dish.id === this.state.selectedDish  )[0] } 
       />
      <Menu 
        dishes={this.state.dishes} 
        onClick={ (dishId) => {this.onDishSelect(dishId)} } 
      /> 
*/


  render() {

    const HomePage = ()=>{
        return(
          <Home />
        );
    }

    return (
      <div>
      
        <Header />
            <Switch>
              <Route path= "/home" component= { HomePage } />
              <Route exact path= "/menu" component= { ()=> <Menu dishes= {this.state.dishes} /> } /> 
              <Redirect to= "/home" />
            </Switch>

        <Footer />
      
      </div>
    );
  }
}

export default Main;
