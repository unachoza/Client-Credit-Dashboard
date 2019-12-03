import { getReportsFromAPI } from "../API/CreditNovaAPI";


const cursor = "2000-11-12T02:18:22.094Z"
const count = 5


export const isReportArchived = (reports) => {
  const availableRecords = reports.filter(report => !report.archived )  
}

export const archiveReport = async (reportId) => {
  const report = (await getReportsFromAPI(count, cursor)).filter(data => data.id === reportId)
  return report

  //change info on report
  //return new data

}

export const loadMoreReports = async (offset) => {
// 	// increment offset
	// 	// this.queryDatabase(offset)
	// 	// this.renderResponse(response)

}

