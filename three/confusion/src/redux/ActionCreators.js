import * as ActionTypes from './ActionTypes';


import { actionTypes } from 'react-redux-form';
import { DISHES } from '../shared/dishes';



import { baseUrl } from '../shared/baseUrl'


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

    //setTimeout(() => { 
    //    dispatch(addDishes(DISHES));
    // }, 2000);

    return fetch(baseUrl + '/dishes' )
        .then(res=>res.json())
        .then(dishes=>dispatch(addDishes(dishes)));

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



// REACT-THUNK, so ret function
export const fetchComments = () => (dispatch) => {

    return fetch(baseUrl + '/comments' )
        .then(res=>res.json())
        .then(comments=>dispatch(addComments(comments)));

}




export const commentsFailed = (errmess) => ({
    type: ActionTypes.COMMENTS_FAILED,
    payload: errmess
});

export const addComments = (dishes)=>({
    type: ActionTypes.ADD_COMMENTS,
    payload: dishes
});











// REACT-THUNK, so ret function
export const fetchPromos = () => (dispatch) => {
    dispatch(promosLoading(true));


    return fetch(baseUrl + 'promos' )
        .then(res=>res.json())
        .then(promos=>dispatch(addPromos(promos)));

}

// ACTION CREATORS // returns action object

export const promosLoading = ()  => (dispatch) => ({
    type: ActionTypes.PROMOS_LOADING
});

export const promosFailed = (errmess) => ({
    type: ActionTypes.PROMOS_FAILED,
    payload: errmess
});

export const addPromos = (promos)=>({
    type: ActionTypes.ADD_PROMOS,
    payload: promos
}); // get retrived in dishes.js reducers `dishes: action.payload`

// ACTION CREATORS