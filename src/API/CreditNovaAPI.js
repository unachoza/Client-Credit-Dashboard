import fetch from "isomorphic-fetch";
import { BACKEND_SERVER_PORT } from "../constants";

export const getDataFromAPI = async () => {
  const response = await fetch(
    `http://localhost:${BACKEND_SERVER_PORT}/api/requests?count=5&cursor=2010-11-12T02:18:22.094Z`
  );
  const result = (await response.json()).reports;
  return result
    
}

export const isReportArchived = (reports) => {
  const availableRecords = reports.filter(report => !report.archived ) 
  console.log("working", availableRecords)
}

export const archiveReport = async (recordId) => {
  //get data
  //get specefic record
  //change info on record
  //return new data
  const record = (await getDataFromAPI()).filter(data => data.id === recordId)

  

}