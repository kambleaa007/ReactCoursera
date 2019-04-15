import React, { Component } from 'react';

import { Navbar, NavbarBrand } from 'reactstrap'; // bootstrap componenet imported from reactstrap

import Menu from './MenuComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';

import DishDetail from './DishdetailComponenet'

import Home from './HomeComponent';
import Contact from './ContactComponent';
import AboutUs from './AboutUsComponent';

import { Switch, Route, Redirect } from 'react-router-dom';

import { DISHES } from '../shared/dishes';
import { COMMENTS } from '../shared/comments';
import { PROMOTIONS } from '../shared/promotions';
import { LEADERS } from '../shared/leaders';


// Add a Container Component
class Main extends Component {

  constructor(props){
    super(props);

    this.state = {
      dishes : DISHES,
      comments: COMMENTS,
      promotions: PROMOTIONS,
      leaders: LEADERS
      // Remove selectedDish : null
    };

  }// constructor


  render() {

    const HomePage = ()=>{
        return(
          <Home 
            dish={ this.state.dishes.filter( (d)=> d.featured )[0] }  
            promotion= { this.state.promotions.filter( (p)=> p.featured )[0] } 
            leader= { this.state.leaders.filter( (l)=> l.featured )[0] } 
          />
        );
    }

    const DishWithId = ({match}) => {
      return(
          <DishDetail dish={this.state.dishes.filter( (dish) => dish.id === parseInt(match.params.dishId,10))[0]} 
            comments={this.state.comments.filter( (comment) => comment.dishId === parseInt(match.params.dishId,10)) } 
          />
      );
    }




    return (
      <div>
      
        <Header />
            <Switch>
              <Route path= "/home" component= { HomePage } />
              <Route exact path= "/menu" component= { ()=> <Menu dishes= {this.state.dishes} /> } /> 
              <Route path="/menu/:dishId" component= {DishWithId} />
              <Route exact path= "/contactus" component= {Contact} />
              <Route path="/aboutus" component= { ()=> <AboutUs leaders={this.state.leaders}/> } />
              <Redirect to= "/home" />
            </Switch>

        <Footer />
      
      </div>
    );
  }
}

export default Main;
