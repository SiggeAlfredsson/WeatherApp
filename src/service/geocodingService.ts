import axios from "axios";
import { API_KEY } from './config';

const getGeo = async (search: string, ) => {
  let resp = await axios.get("https://api.openweathermap.org/geo/1.0/direct?q="+search+"&appid="+API_KEY); 
  return resp.data;
}

const geocodingService = { getGeo };
export default geocodingService;