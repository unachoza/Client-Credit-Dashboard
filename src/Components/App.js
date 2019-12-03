import React, { Component } from "react";
import logo from "../logo.svg";
import "../App.css";
import Dashboard from "./Dashboard";
import { getDataFromAPI, isReportArchived, archiveReport } from "../API/CreditNovaAPI";

class App extends Component {
	state = {
		data: []
	};

	componentDidMount = async () => {
		let data = await getDataFromAPI();
		this.setState({ data });
		isReportArchived(this.state.data)
		let record = await archiveReport("f0549f26-ce07-11e7-8caa-db5e161d6850")
		this.setState({ thisOne: record })
		console.log(this.state)
	};


	// archiveEntry = (entryId) => {
	// 	// change archive status from false to true
	// }


	// loadMoreEntriesFromDatabase = (event) => {
	// 	// increment offset
	// 	// this.queryDatabase(offset)
	// 	// this.renderResponse(response)
	// }

	render() {
		const { data, thisOne } = this.state;

		return (
			<div className="App">
				<header className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
					<h1 className="App-title">Welcome to Nova's code challenge!</h1>
				</header>
				{thisOne?<h2>{thisOne[0].id} {thisOne[0].lastName}</h2>: <p>loading</p>}
				{data && data.map(data => <Dashboard key={data.id}reports={data} />)}
			</div>
		);
	}
}

export default App;
