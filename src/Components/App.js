import React, { Component , useState, useEffect} from 'react';
import fetch from 'isomorphic-fetch';
import logo from '../logo.svg';
import { BACKEND_SERVER_PORT } from '../constants';
import '../App.css';
import Dashboard from './Dashboard'

const App = () =>  {

	//what is state?
	// the query from the database
	//separate business logic from jsx


	const [query, setQuery] = useState("")
	const [response, setResponse] = useState(null)

	queryDatabase = (offset?) => {
		// if !archive
		//  return response data object 
	 }
	
	archiveEntry = (entryId) => {
		// change archive status from false to true
	}
	
	 renderResponse = (response) => {
		// return jsx
	 }
	
	loadMoreEntriesFromDatabase = (event) => {
		// increment offset
		// this.queryDatabase(offset)
		// this.renderResponse(response)
	}



	/// *****Credit Nova Gave me this, I want to use hooks,   *******
	// componentDidMount() {
	// 	console.log('here', BACKEND_SERVER_PORT)
	// 	// Example get reports request
	// 	fetch(`http://localhost:${BACKEND_SERVER_PORT}/api/requests?count=10&cursor=2010-11-12T02:18:22.094Z`)
	// 	.then(res => res.json())
	// 	.then(result => console.log('Example report request', result));
	// }




		return (
			<div className="App">
				<header className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
					<h1 className="App-title">Welcome to Nova's code challenge!</h1>
				</header>
				<Dashboard/>
			</div>
		);
}

export default App;
