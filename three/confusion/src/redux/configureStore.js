import { createStore, combineReducers, applyMiddleware } from 'redux';

import thunk from 'redux-thunk';
import logger from 'redux-logger';

import { Dishes } from './dishes';
import { Promotions } from './promotions';
import { Leaders } from './leaders';
import { Comments } from './comments';



export const ConfigureStore =  ()=>{

    const store = createStore(
        combineReducers({
            dishes: Dishes,
            comments: Comments,
            promotions: Promotions,
            leaders: Leaders
        }),
        applyMiddleware(thunk, logger)
    );

    return store;
};