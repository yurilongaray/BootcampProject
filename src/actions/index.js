import axios from 'axios';

//Action Type
export const FETCH_CITY = 'FETCH_CITY';

const API_KEY	= '3e36485f165d535444a2a78173f1c6c';
const ROOT_URL 	= 'http://localhost:5000/groups';

//Actions devem retornar um type
export function fetchEvent(city) {
    return dispatch => {
        const url = `${ROOT_URL}?photo-host=public&location=${city}&page=10&country=Brasil&key=${API_KEY}`;
		return axios.get(url)
		.then(response => dispatch({
            type: FETCH_CITY,
            payload: response.data
        }));
    }
}


