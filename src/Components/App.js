import React, { Component } from "react";
import logo from "../logo.svg";
import "../App.css";
import Dashboard from "./Dashboard";
import { isReportArchived, archiveReport } from "../Utility/Report";
import { getReportsFromAPI } from "../API/CreditNovaAPI";


class App extends Component {
	state = {
		data: []
	};

	componentDidMount = async () => {
		const cursor = "2000-11-12T02:18:22.094Z";
		const count = 5;
		let data = await getReportsFromAPI(count, cursor);
		console.log(data);
		this.setState({ data });
		isReportArchived(this.state.data)
		let report = await archiveReport("f0549f22-ce07-11e7-8caa-db5e161d6850")
		this.setState({ thisOne: report })
		console.log(this.state)
	};


	render() {
		const { data, thisOne } = this.state;

		return (
			<div className="App">
				<header className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
					<h1 className="App-title">Welcome to Nova's code challenge!</h1>
				</header>
				{thisOne ? (
					<h2>
						{thisOne[0].id} {thisOne[0].lastName}
					</h2>
				) : (
					<p>loading</p>
				)}
				{data && data.map(data => <Dashboard key={data.id} reports={data} />)}
			</div>
		);
	}
}

export default App;
