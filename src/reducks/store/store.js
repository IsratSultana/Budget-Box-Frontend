import { connectRouter, routerMiddleware } from 'connected-react-router';
import { applyMiddleware, combineReducers, compose, createStore as reduxCreateStore } from 'redux';
import thunk from 'redux-thunk';

import { categoriesReducer } from '../category/reducers';
import { transactionsReducer } from '../transactions/reducers';
import { UserReducer } from '../users/reducers';
import { PostsReducer } from './../posts/reducers';


export default function createStore(history) {
    return reduxCreateStore(
        combineReducers({
            Post:PostsReducer,
            router: connectRouter(history),
            user: UserReducer,
            transactions: transactionsReducer,
            categories: categoriesReducer,
       }),
       compose(
        applyMiddleware(
            routerMiddleware(history),
            thunk
        ),
        // DEBUG MODE
        // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
       )
    );
}