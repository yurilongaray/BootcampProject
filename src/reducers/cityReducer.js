import { FETCH_CITY } from '../actions/index';

export default function(state = [], action) { //state possui o array de cidades

	switch(action.type) {

        case FETCH_CITY:
		//console.log('Teste:', action.payload);
        return {
            ...state,
            cityState: action.payload
		}
		default:
		return state
    }
}
