import {createStore, applyMiddleware, compose} from 'redux';
import weatherReducer from './reducers/weatherReducer';
import ReduxPromise from 'redux-promise';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas/rootSaga';

const sagaMiddleware = createSagaMiddleware();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default createStore(
    weatherReducer, 
    composeEnhancers(applyMiddleware(ReduxPromise, sagaMiddleware)),
);
sagaMiddleware.run(rootSaga);