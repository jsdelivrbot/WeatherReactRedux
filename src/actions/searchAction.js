
export function changingText(event){
    return {
        type: "CHANGING_TEXT",
        payload: event
    }
}

const API_KEY = 'd77a01bf5b4188c9f53a6bdc1b9391ce';

export function searchWeather(term){
    const city = term;
    const urlDay = 'http://api.openweathermap.org/data/2.5/weather?q='+city+'&appid='+API_KEY;
    const urlWeek = 'http://api.openweathermap.org/data/2.5/forecast?q='+city+'&appid='+API_KEY;
    return {
        type: "SEARCH_WEATHER",
        payload: {urlDay, urlWeek}
    } 
}