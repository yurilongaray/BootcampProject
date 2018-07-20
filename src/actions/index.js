//Aqui a função é a Action Creator, e o que ela retorna, que é o objeto, é a Action.
//Ao ser disparada, ela comunicará ao Reducer que o type é CLICK_UPDATE_VALUE,
//além do valor newValue: value que deverá ser atualizado na Store.
import axios from 'axios';
import { FETCH_EVENT } from './actionTypes';
//const API_KEY = '571a1c1346134346874501032633063';
const ROOT_URL = `https://api.meetup.com/find/groups?`;

export const clickButton = value => ({
	type: 'FETCH_EVENT',
	newValue: value
});

//Actions devem retornar um type
export function fetchEvent(city) {
    //const url = `${ROOT_URL}&q=${city},us`; //País = us
	const url = `${ROOT_URL}photo-host=public&location=${city}&page=20&country=Brasill&sig_id=234585495&sig=493c8d69a05905aa9e53d67ad3fe0f1a4f2da40e`;
	const request = axios.get(url);

    console.log('Request', request);
    return {
        type: FETCH_EVENT,
        payload: request //Retornando a promisse no payload, utilizar nas requisicoes ajax
    };
}