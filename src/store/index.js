import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { Reducers } from '../reducers';

//Aqui criamos a Store e dizemos quais são os seus respectivos Reducers.
//Store é a Única Fonte de Verdade
export default function configureStore(preloadedState) {
	
	return createStore(
		Reducers,
		preloadedState,
		applyMiddleware(
			thunkMiddleware
		)
	)
};