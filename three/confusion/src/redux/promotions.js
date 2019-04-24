// import { PROMOTIONS } from '../shared/promotions';

import * as ActionTypes from './ActionTypes';


export const Promotions = (state = {
    isLoading: true,
    errmess: null,
    promos: []    
}, action)=>{
    switch(action.type){

        case ActionTypes.ADD_PROMOS: // reducer
        return {...state, isLoading: false, errmess: null, promos: action.payload }; // imutable returning

        case ActionTypes.PROMOS_LOADING : // reducer
            return {...state, isLoading: true, errmess: null, promos: [] }; // imutable returning

        case ActionTypes.PROMOS_FAILED: // reducer
            return {...state, isLoading: false, errmess: action.payload, promos: [] };

        default:
            return state;
    }
}