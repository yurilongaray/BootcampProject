import { FETCH_CITY } from '../actions/index';

export default function(state = [], action) { //state é o array de cidades
   // console.log('Action received: ', action);
    switch(action.type) {
        case FETCH_CITY:
		//concat chama o array e adiciona itens nele
		console.log(action.payload)
		return state.concat([action.payload.data]); //Armazena as cidades
    }
	return state;
}
