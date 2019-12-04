import React, { Component } from "react";
import logo from "../logo.svg";
import '../App.css'
import {fetchReports, fetchNextSubsetOfReports, archiveReport} from '../redux/actions'
import SimpleTable from "./SimpleTable";
import Loading from './Loading'
import LoadMoreReports from './LoadMoreReports'
import {connect} from 'react-redux'
import { isReportArchived, archiveThisReport, loadMoreReports } from "../Utility/Report";
import { getReportsFromAPI } from "../API/CreditNovaAPI";


const mapStateToProps = (state) => {
	return {
		reports: state.reports

	}
}

const mapDispatchToProps = (dispatch) => {
	getReportsFromAPI: () => dispatch() 
}
class App extends Component {
	state = {
		reports: []
	};

	componentDidMount = async () => {
		console.log("doing this");
		const cursor = "2000-11-12T02:18:22.094Z";
		const count = 5;
		let reports = await getReportsFromAPI(count, cursor);
		this.setState({ reports });
		console.log(this.state)
		isReportArchived(this.state.reports);
		let archivedReport = await archiveThisReport(
			"f0549f22-ce07-11e7-8caa-db5e161d6850"
		);
		this.setState({ thisOne: archivedReport });
		// console.log(this.props.store.getState())

	};

	render() {
		const { reports, thisOne } = this.state;
		return (
			<div className="App">
				<header className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
					<h1 className="App-title">Welcome to Nova's code challenge!</h1>
				</header>
				{reports.length > 0 ? <SimpleTable reports={reports} /> : <Loading />}
				<br></br>
				<LoadMoreReports />
			</div>
		);
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
