import React, { Component } from 'react';
import './App.css';
import SearchBar from './containers/search_bar';
import GroupList from './containers/group_list';

export default class App extends Component {

	render() {
		return (
			<div className="App" style={{ paddingTop: '20px' }}>
				<div className="row">
					<SearchBar />
				</div>
				<div className="row">
					<GroupList />
				</div>
			</div>
		);
	}
}


