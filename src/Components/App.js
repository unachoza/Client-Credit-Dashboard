import React, { Component } from 'react';
import fetch from 'isomorphic-fetch';
import logo from './logo.svg';
import { BACKEND_SERVER_PORT } from './constants';
import './App.css';

class App extends Component {

	//what is state?
	// the query from the database
	//separate business logic from jsx


	queryDatabase = (offset?) => {
		if !archive
		 return response data object 
	 }
	
	archiveEntry = (entry) => {
		change archive status from false to true
	}
	
	 renderResponse = (response) => {
		return jsx
	 }
	
	loadMoreEntriesFromDatabase = (event) => {
		increment offset
		this.queryDatabase(offset)
		this.renderResponse(response)
	}






	componentDidMount() {
		// Example get reports request
		fetch(`http://localhost:${BACKEND_SERVER_PORT}/api/requests?count=10&cursor=2010-11-12T02:18:22.094Z`)
		.then(res => res.json())
		.then(result => console.log('Example report request', result));
	}



	render() {
		return (
			<div className="App">
				<header className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
					<h1 className="App-title">Welcome to Nova's code challenge!</h1>
				</header>
			</div>
		);
	}
}

export default App;
