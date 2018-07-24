import { FETCH_CITY } from '../actions/index';

export default function(state = [], action) { //state é o array de cidades
    console.log('Action received: ', action.type);
    switch(action.type) {
        case FETCH_CITY:
        return [
			console.log('teste', action.payload, state),
			action.payload.data,
			...state
		];
    }
	return state;
}
