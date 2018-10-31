import {createStore, applyMiddleware} from 'redux';
import weatherReducer from './reducers/weatherReducer';
import ReduxPromise from 'redux-promise';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas/rootSaga';

const sagaMiddleware = createSagaMiddleware();
export default createStore(weatherReducer, applyMiddleware(ReduxPromise, sagaMiddleware));
sagaMiddleware.run(rootSaga);