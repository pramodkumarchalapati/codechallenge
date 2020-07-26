import axios from 'axios';

export const fetchCountriesList = (limit) => {
    return(dispatch) => {
        axios.get('http://localhost:3000/countries')
        .then(response => {            
            dispatch({type: 'FetchCountryList', result: response.data.splice(0,limit)})
        })
    }
}

export const fetchSelectedLocation = (selectedLocation) => dispatch => {
    dispatch({type: 'SelectLocInfo', location:selectedLocation})
}