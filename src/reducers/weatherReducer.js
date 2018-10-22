const weatherReducer = (state = {name: 'skikda', daydata: '', weekdata: ''}, action) => {
    switch (action.type){
        case "CHANGING_TEXT":
            state = {
                ...state,
                name: action.payload
            }
            break;
        case "SEARCH_DAY_WEATHER":
            state = {
                ...state,
                daydata: action.payload
            }
            break;
        case "SEARCH_WEEK_WEATHER":
            state = {
                ...state,
                weekdata: action.payload
            }
            break;
        default:
            return state;
    }
    return state;
};
export default weatherReducer;