import React, { Component } from "react";
import fetch from "isomorphic-fetch";
import logo from "../logo.svg";
import { BACKEND_SERVER_PORT } from "../constants";
import "../App.css";
import Dashboard from "./Dashboard";

class App extends Component{

	state = {
		data: []
	}
	//what is state?
	// the query from the database
	//separate business logic from jsx

	// const [query, setQuery] = useState("")

	// const [data, setData] = useState({ entries: [] });

	// queryDatabase = (offset?) => {
	// 	// if !archive
	// 	//  return response data object
	// }
	componentDidMount = async() => {
		const response = await fetch(
			`http://localhost:${BACKEND_SERVER_PORT}/api/requests?count=10&cursor=2010-11-12T02:18:22.094Z`
		);
		const result = (await response.json()).reports;
		this.setState({ data: result })
}
	

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
	render() {
	const {data} = this.state
	
	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<h1 className="App-title">Welcome to Nova's code challenge!</h1>
			</header>
			{data && data.map(data => <h1>{data.id}</h1>) }
			{this.render}
			<Dashboard />
		</div>
	);
}
	
};

export default App;
