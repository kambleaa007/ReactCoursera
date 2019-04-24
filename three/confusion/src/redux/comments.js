// import { COMMENTS } from '../shared/comments';

import * as ActionTypes from './ActionTypes';



export const Comments = (state = {
    errmess: null,
    comments: []
}, action)=>{
    switch(action.type){

        case ActionTypes.ADD_COMMENTS: // reducer
        return {...state, isLoading: false, errmess: null, comments: action.payload }; // imutable returning

        case ActionTypes.ADD_COMMENT:
            var comment = action.payload;
            comment.id = state.comments.length;
            comment.date = new Date().toISOString();
            return {...state, comments: state.concat(comment)};

        case ActionTypes.COMMENTS_FAILED: // reducer
            return {...state, isLoading: false, errmess: action.payload, comments: [] };
    
            
        default:
            return state;
    }
}