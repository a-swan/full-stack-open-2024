import axios from 'axios';
const baseUrl = `https://api.weatherapi.com/v1/current.json?key=`

const getWeather = (city) => {
  console.log(`[getWeather] call for ${city}`);

  return axios.get(`${baseUrl}${import.meta.env.VITE_WEATHER_API_KEY}&q=${city}&aqi=no`)
}

export default {
  getWeather: getWeather
}