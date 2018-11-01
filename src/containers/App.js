import React, { Component } from 'react';
import {connect} from 'react-redux';

import {SearchBar} from '../components/searchBar';
import {DayWeather} from '../components/dayWeather';
import {WeekWeather} from '../components/weekWeather';
import {changingText, searchWeather } from '../actions/searchAction';


class App extends Component {
  render() {
    return (
      <div className="App">
        <SearchBar 
          name={this.props.name}
          changingText={(event) => this.props.changingText(event)}
          searchWeather={this.props.searchWeather}/>
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
    searchWeather: (term) => {
      dispatch(searchWeather(term));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
