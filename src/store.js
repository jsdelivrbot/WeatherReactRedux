import {createStore, applyMiddleware} from 'redux';
import weatherReducer from './reducers/weatherReducer';
import ReduxPromise from 'redux-promise';

export default createStore(weatherReducer, applyMiddleware(ReduxPromise));