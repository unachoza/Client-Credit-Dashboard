import { getReportsFromAPI } from "../API/CreditNovaAPI";


const cursor = "2000-11-12T02:18:22.094Z"
const count = 5


export const isReportArchived = (reports) => {
  const availableRecords = reports.filter(report => !report.archived )  
}

export const archiveThisReport = async (reportId) => {
  const report = (await getReportsFromAPI(count, cursor)).filter(data => data.id === reportId)
  return report

  //change info on report
  //return new data

}

export const loadMoreReports =  (offset) => {
return offset + 10
}

