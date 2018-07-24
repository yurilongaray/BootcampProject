import { createStore } from 'redux';
import { Reducers } from '../reducers';

//Aqui criamos a Store e dizemos quais são os seus respectivos Reducers.
//Store é a Única Fonte de Verdade
export const Store = createStore(
	Reducers
);