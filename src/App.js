import React, { Component } from 'react';
import './App.css';
import SearchBar from './containers/search_bar';
import EventList from './containers/event_list';

//https://medium.com/reactbrasil/iniciando-com-redux-c14ca7b7dcf

export default class App extends Component {
	render() {
		return (
			<div className="App" style={{ paddingTop: '10px' }}>
				<SearchBar />
				<EventList />
			</div>
		);
	}
}


