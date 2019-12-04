import fetch from "isomorphic-fetch";
import { BACKEND_SERVER_PORT } from "../redux/constants";


const BASE_URL = 'api/requests'
export const getReportsFromAPI = async (count, cursor ) => {
  const response = await fetch(
    `http://localhost:${BACKEND_SERVER_PORT}/${BASE_URL}?count=${count}&cursor=${cursor}`
  );
  const result = (await response.json()).reports;
  return result
}
