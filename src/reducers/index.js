import { combineReducers } from 'redux';
import cityReducer from './cityReducer';

export const Reducers = combineReducers({
	cityState: cityReducer
});
