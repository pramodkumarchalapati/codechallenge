const initialState = {
    countries: {},
}

const FetchCountryListReducer = (state = initialState, action ) => {
    switch (action.type) {
        case 'FetchCountryList':
            return { ...state, ...action }; 
        case 'SelectLocInfo':
            return {...state, ...action};       
        default:
            return state;
    }
}

export default FetchCountryListReducer;