import { FETCH_CITY } from '../actions/index';

export default function(state = [], action) {

	switch(action.type) {

        case FETCH_CITY:
			return {
				...state,
				cityState: action.payload
			}

		default:
			return state
    }
}
