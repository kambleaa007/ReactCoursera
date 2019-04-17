// import { DISHES } from '../shared/dishes';


import * as ActionTypes from './ActionTypes';


export const Dishes = (
    state = {
        isLoading: true,
        errmess: null,
        dishes: []    
    },  action)=>{
    switch(action.type){

        case ActionTypes.ADD_DISHES: // reducer
        return {...state, isLoading: false, errmess: null, dishes: action.payload }; // imutable returning

        case ActionTypes.DISHES_LOADING: // reducer
            return {...state, isLoading: true, errmess: null, dishes: [] }; // imutable returning

        case ActionTypes.DISHES_FAILED: // reducer
            return {...state, isLoading: false, errmess: action.payload, dishes: [] };

        default:
            return state;
    }
}