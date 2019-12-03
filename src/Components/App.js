import React, { Component, useState, useEffect } from "react";
import fetch from "isomorphic-fetch";
import logo from "../logo.svg";
import { BACKEND_SERVER_PORT } from "../constants";
import "../App.css";
import Dashboard from "./Dashboard";

const App = () => {
	//what is state?
	// the query from the database
	//separate business logic from jsx

	const [data, setData] = useState({ entries: [], loading: false });

	// queryDatabase = (offset?) => {
	// 	// if !archive
	// 	//  return response data object
	// }
	useEffect(() => {
		const fetchEntries = async () => {
			try {
				setData({ entries: data.reports, loading: true });
				const response = await fetch(
					`http://localhost:${BACKEND_SERVER_PORT}/api/requests?count=10&cursor=2010-11-12T02:18:22.094Z`
				);
				const readResponse = await response.json();
				console.log(readResponse.reports);
			} catch (e) {
				console.log(e);
			}
		};
		fetchEntries();
	}, []);

	// archiveEntry = (entryId) => {
	// 	// change archive status from false to true
	// }

	//  renderResponse = (response) => {
	// 	// return jsx
	//  }

	// loadMoreEntriesFromDatabase = (event) => {
	// 	// increment offset
	// 	// this.queryDatabase(offset)
	// 	// this.renderResponse(response)
	// }

	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<h1 className="App-title">Welcome to Nova's code challenge!</h1>
			</header>
			<Dashboard />
		</div>
	);
};

export default App;
