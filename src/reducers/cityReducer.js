import { FETCH_CITY } from '../actions/index';

export default function(state = [], action) { //state é o array de cidades
    switch(action.type) {
        case FETCH_CITY:
		console.log('teste:', action.payload)
        return {
            ...state,
            cityState: action.payload
        }
    }
	return state;
}
