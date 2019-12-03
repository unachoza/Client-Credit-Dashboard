import React, { Component } from "react";
import logo from "../logo.svg";
import "../App.css";
import Dashboard from "./Dashboard";
import { getDataFromAPI } from "../API/CreditNovaAPI";

class App extends Component {
	state = {
		data: []
	};

	componentDidMount = async () => {
		let data = await getDataFromAPI();
		this.setState({ data });
	};

	// queryDatabase = (offset?) => {
	// 	// if !archive
	// 	//  return response data object
	// }

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
		const { data } = this.state;

		return (
			<div className="App">
				<header className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
					<h1 className="App-title">Welcome to Nova's code challenge!</h1>
				</header>
				{data && data.map(data => <Dashboard reports={data} />)}
				<Dashboard reports={data} />
			</div>
		);
	}
}

export default App;
