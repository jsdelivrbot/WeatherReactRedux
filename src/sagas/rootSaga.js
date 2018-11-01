import { takeEvery } from 'redux-saga/effects';
import { call, put } from 'redux-saga/effects';
import axios from 'axios';

export function* searchDay(action){
    try{
        const getWeather = yield call(axios.get, action.payload.urlDay);
        yield put({ type:"DAY_SEARCH_SUCCESS", payload: getWeather.data });
    } catch (err){
        console.log('error occured !!', err);
    }
}

export function* searchWeek(action){
    try{
        const getWeather = yield call(axios.get, action.payload.urlWeek);
        yield put({type: "WEEK_SEARCH_SUCCESS", payload: getWeather.data});
    } catch (err){
        console.log('error occured !!', err);
    }
}

export function* watchWeather(){
    yield takeEvery('SEARCH_WEATHER', searchDay);
    yield takeEvery('SEARCH_WEATHER', searchWeek);
}

export default function* rootSaga(){
    yield [
        watchWeather(),
    ]
}