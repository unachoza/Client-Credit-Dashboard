import fetch from "isomorphic-fetch";
import { BACKEND_SERVER_PORT } from "../constants";

export const getDataFromAPI = async () => {
  const response = await fetch(
    `http://localhost:${BACKEND_SERVER_PORT}/api/requests?count=6&cursor=2000-11-12T02:18:22.094Z`
  );
  const result = (await response.json()).reports;
  console.log(result)
  return result
}

export const isReportArchived = (reports) => {
  const availableRecords = reports.filter(report => !report.archived ) 
}

export const archiveReport = async (recordId) => {
  const record = (await getDataFromAPI()).filter(data => data.id === recordId)
  return record

  //change info on record
  //return new data

}