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

import { addComment, fetchDishes, fetchComments, fetchPromos } from '../redux/ActionCreators';

import { actions } from 'react-redux-form';

const mapStateToProps = state =>{
    return{
      dishes: state.dishes,
      comments:state.comments,
      promotions: state.promotions,
      leaders: state.leaders
    };
};

const mapDispatchToProps = (dispatch)=>({
  addComment: (dishId, rating, author, comment) => dispatch(addComment(dishId, rating, author, comment) ),
  fetchDishes: ()=>{dispatch(fetchDishes())},
  resetFeedbackForm: ()=>{dispatch(actions.reset('feedback'))},
  fetchComments: ()=>{dispatch(fetchComments())},
  fetchPromos: ()=>{dispatch(fetchPromos())} 
}); 

// ret Action Obj for adding a comment
// that Action Obj passing to dispatch fun as parameter
// supplying as function can be used within our componenets



// Add a Container Component
class Main extends Component {

  constructor(props){
    super(props);


  }// constructor

  
  // lifecycle method
  // called just after this component mounted in view of application
  // when main component is mounted in view after that fetchDishs gets called so load in to redux store get available
  // when main component is mounted then fetch from server, seems update home compo
  componentDidMount(){
    this.props.fetchDishes();
    this.props.fetchComments();
    this.props.fetchPromos();
  }



  render() {

    const HomePage = ()=>{
        return(
                <Home dish={this.props.dishes.dishes.filter(dish => dish.featured)[0]}
                    dishesLoading={this.props.dishes.isLoading}
                    dishesErrMess={this.props.dishes.errMess}
                    promotion={this.props.promotions.promotions.filter(promo => promo.featured)[0]}
                    promosLoading={this.props.promotions.isLoading}
                    promosErrMess={this.props.promotions.errMess}
                    leader={this.props.leaders.filter(leader => leader.featured)[0]}
                />
        );
    }

    const DishWithId = ({match}) => {
      return(
        <DishDetail
          dish={this.props.dishes.dishes.filter(dish => dish.id === parseInt(match.params.dishId, 10))[0]}
          isLoading={this.props.dishes.isLoading}
          errMess={this.props.dishes.errMess}
          comments={this.props.comments.comments.filter(comment => comment.dishId === parseInt(match.params.dishId, 10))}
          commentsErrMess={this.props.comments.errMess}
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
          <Route exact path= "/contactus" component= {()=><Contact resetFeedbackForm={this.props.resetFeedbackForm} />} />
          <Route path="/aboutus" component= { ()=> <AboutUs leaders={this.props.leaders}/> } />
          <Redirect to= "/home" />
        </Switch>

        <Footer />
      
      </div>
    );
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
