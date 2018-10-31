const weatherReducer = (state = {name: 'skikda', daydata: '', weekdata: ''}, action) => {
    switch (action.type){
        case "CHANGING_TEXT":
            state = {
                ...state,
                name: action.payload
            }
            break;
        case "WEEK_SEARCH_SUCCESS":
            state = {
                ...state,
                weekdata: action.payload
            }
            break;
        case "DAY_SEARCH_SUCCESS":
            state = {
                ...state,
                daydata: action.payload
            }
            break;
        default:
            return state;
    }
    return state;
};
export default weatherReducer;