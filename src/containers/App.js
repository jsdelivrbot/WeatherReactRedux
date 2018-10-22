import React, { Component } from 'react';
import {connect} from 'react-redux';

import {SearchBar} from '../components/searchBar';
import {DayWeather} from '../components/dayWeather';
import {WeekWeather} from '../components/weekWeather';
import {changingText, searchDayWeather, searchWeekWeather} from '../actions/searchAction';


class App extends Component {
  render() {
    return (
      <div className="App">
        <SearchBar 
          name={this.props.name}
          changingText={(event) => this.props.changingText(event)}
          searchDayWeather={this.props.searchDayWeather}
          searchWeekWeather={this.props.searchWeekWeather} />
        <div style={{display: 'flex', justifyContent: 'center'}}>
          <div style={{paddingRight: 20 +'px'}}>
            <DayWeather name={this.props.daydata}/>
          </div>
          <WeekWeather name={this.props.weekdata} /> 
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    name: state.name,
    daydata: state.daydata,
    weekdata: state.weekdata
  };
};

const mapDispatchToProps = (dispatch) => {
  return{
    changingText: (event) => {
      dispatch(changingText(event));
    },
    searchDayWeather: (term) => {
      dispatch(searchDayWeather(term));
    },
    searchWeekWeather: (term) => {
      dispatch(searchWeekWeather(term));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
