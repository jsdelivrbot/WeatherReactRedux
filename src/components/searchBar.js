import React from 'react';


export const SearchBar = (props) => {
    return (
        <div style={{padding: 40 +'px'}}>
            <div className="input-group">
                <input value={props.name} onChange={(event) => props.changingText(event.target.value)} className="form-control"/>
                <span className="input-group-btn">
                    <button 
                        onClick={() => {
                            props.searchDayWeather(props.name);
                            props.searchWeekWeather(props.name);
                        }} 
                        className="btn btn-primary">Change</button>
                </span>
            </div>
        </div>
        
    );
};

