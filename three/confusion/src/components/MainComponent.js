import React, { Component } from 'react';

import { Navbar, NavbarBrand } from 'reactstrap'; // bootstrap componenet imported from reactstrap

import Menu from './MenuComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';

import DishDetail from './DishdetailComponenet'

import Home from './HomeComponent';
import Contact from './ContactComponent';
import AboutUs from './AboutUsComponent';

import { Switch, Route, Redirect, withRouter } from 'react-router-dom';

import { connect } from 'react-redux';

import { addComment } from '../redux/ActionCreators';


const mapStateToProps = state =>{
    return{
      dishes: state.dishes,
      comments:state.comments,
      promotions: state.promotions,
      leaders: state.leaders
    }
};

const mapDispatchToProps = (dispatch)=>({
  addComment: (dishId, rating, author, comment) => dispatch(addComment(dishId, rating, author, comment) ) 
}); 

// ret Action Obj for adding a comment
// that Action Obj passing to dispatch fun as parameter
// supplying as function can be used within our componenets



// Add a Container Component
class Main extends Component {

  constructor(props){
    super(props);


  }// constructor

  



  render() {

    const HomePage = ()=>{
        return(
          <Home 
            dish={ this.props.dishes.filter( (d)=> d.featured )[0] }  
            promotion= { this.props.promotions.filter( (p)=> p.featured )[0] } 
            leader= { this.props.leaders.filter( (l)=> l.featured )[0] } 
          />
        );
    }

    const DishWithId = ({match}) => {
      return(
          <DishDetail dish={this.props.dishes.filter( (dish) => dish.id === parseInt(match.params.dishId,10))[0]} 
            comments={this.props.comments.filter( (comment) => comment.dishId === parseInt(match.params.dishId,10)) } 
            addComment={this.props.addComment}
          />
      );
    }




    return (
      <div>
      
        <Header />

        <Switch>
          <Route path= "/home" component= { HomePage } />
          <Route exact path= "/menu" component= { ()=> <Menu dishes= {this.props.dishes} /> } /> 
          <Route path="/menu/:dishId" component= {DishWithId} />
          <Route exact path= "/contactus" component= {Contact} />
          <Route path="/aboutus" component= { ()=> <AboutUs leaders={this.props.leaders}/> } />
          <Redirect to= "/home" />
        </Switch>

        <Footer />
      
      </div>
    );
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
