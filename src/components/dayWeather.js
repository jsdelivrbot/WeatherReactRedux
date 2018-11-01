import React from 'react';

export const DayWeather = (props) => {
    // get data from the passed state
    let day_data = props.name;
    let country = day_data.sys;
    let weather = day_data.weather;
    let temp = day_data.main;
    const message = 'Make a search to see results!';
    
    // initial value of component
    if(!day_data){
        return <h1> {message} </h1>;
    }else if (!country || !weather || !temp) {
        return <h5 style={{color: '#ff0000'}} > {`ERROR : ${day_data}, Please check the city name and try again.`} </h5>;
    }

    let imgSrc = "https://openweathermap.org/img/w/" +weather[0].icon +".png";

    // render the information
    return(
        <div className="card text-center" style={{width: 18 +'rem'}}>
            <div className="card-header">Today's weather</div>
            <img className="card-img-top" alt="" src={imgSrc}/>
            <div className="card-body" style={{padding: 15 +'px'}}>
                <h5 className="card-title">{day_data.name}, {country.country}</h5>
                <p className="card-text">{weather[0].main}: {weather[0].description}</p>
                <p className="card-text">Temp is: {parseInt((temp.temp) - 273.15)}C</p> 
            </div>          
        </div>
    );
};