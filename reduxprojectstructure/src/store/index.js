import {createStore, applyMiddleware} from 'redux';
//import {logger} from 'redux-logger';

import reducer from '../reducers'

let store=createStore(reducer,applyMiddleware())


export default store;