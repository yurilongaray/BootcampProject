import { FETCH_CITY } from '../actions/index';

export default function(state = [], action) { //state é o array de cidades
    console.log('Action received: ', action);
    switch(action.type) {
        case FETCH_CITY:
        return [ action.payload.data, ...state ];
    }
    return state;
}
