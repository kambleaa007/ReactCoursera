import * as ActionTypes from './ActionTypes';


import { actionTypes } from 'react-redux-form';
import { DISHES } from '../shared/dishes';


export const addComment =(dishId, rating, author, comment)=>({
    type: ActionTypes.ADD_COMMENT,
    payload: {
        dishId: dishId,
        rating: rating,
        author: author,
        comment: comment
    }
});


// ACTION CREATORS 

// REACT-THUNK, so ret function
export const fetchDishes = () => (dispatch) => {
    dispatch(dishesLoading(true));

    setTimeout(() => { 
        dispatch(addDishes(DISHES));
     }, 2000);
}
// after 2sec. delay call to addDishes(with imported DISHES)

// ACTION CREATORS // returns action object

export const dishesLoading = ()  => (dispatch) => ({
    type: ActionTypes.DISHES_LOADING
});

export const dishesFailed = (errmess) => ({
    type: ActionTypes.DISHES_FAILED,
    payload: errmess
});

export const addDishes = (dishes)=>({
    type: ActionTypes.ADD_DISHES,
    payload: dishes
}); // get retrived in dishes.js reducers `dishes: action.payload`

// ACTION CREATORS
