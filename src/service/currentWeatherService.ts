import axios from "axios";
import { API_KEY } from './config';

const getWeather = async (lat: number, lon: number) => {

  let resp = await axios.get("https://api.openweathermap.org/data/2.5/weather?lat="+lat+"&lon="+lon+"&appid="+API_KEY+"&units=metric"); // +"&lang=se"
  return resp.data;
}

const currentWeatherService = { getWeather };
export default currentWeatherService;