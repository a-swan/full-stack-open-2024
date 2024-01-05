import axios from 'axios'
const baseUrl = 'https://studies.cs.helsinki.fi/restcountries/api'

const getAll = () => {
  console.log(`Calling API for all`);
  
  return axios.get(`${baseUrl}/all`);
}

const searchCountry = (name) => {
  console.log(`Calling API for ${name}`);

  return axios.get(`${baseUrl}/name/${name}`);
}

export default {
  getAll: getAll,
  searchCountry: searchCountry,
}