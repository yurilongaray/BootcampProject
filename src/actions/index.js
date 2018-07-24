//Aqui a função é a Action Creator, e o que ela retorna, que é o objeto, é a Action.
//Ao ser disparada, ela comunicará ao Reducer que o type é CLICK_UPDATE_VALUE,
//além do valor newValue: value que deverá ser atualizado na Store.
import axios from 'axios';

const API_KEY = '3e36485f165d535444a2a78173f1c6c';
const ROOT_URL = 'http://localhost:5000/';

//Deve estar na actionTypes porém...
export const FETCH_CITY = 'FETCH_CITY';

//Actions devem retornar um type
export function fetchEvent(city) {
	const url = `${ROOT_URL}groups?photo-host=public&location=${city}&page=20&country=Brasill&&key=${API_KEY}`;
    const request = axios.get(url, {
        crossdomain: true
    });

	//console.log(url)
    //console.log('Request: ', request);
    return {
        type: FETCH_CITY,
        payload: request //Retornando a promisse no payload, utilizar nas requisicoes ajax
    };
}