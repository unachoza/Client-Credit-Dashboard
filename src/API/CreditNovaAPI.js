import fetch from "isomorphic-fetch";
import { BACKEND_SERVER_PORT } from "../constants";

export const getDataFromAPI = async () => {
  const response = await fetch(
    `http://localhost:${BACKEND_SERVER_PORT}/api/requests?count=10&cursor=2010-11-12T02:18:22.094Z`
  );
  const result = (await response.json()).reports;
  return result
    
}