import axios from 'axios'
const baseUrl = 'http://localhost:3001/persons'

const getAll = () => {
  return axios.get(baseUrl);
}

const createPerson = newPerson => {
  return axios.post(baseUrl, newPerson)
}

const deletePerson = id => {
  return axios.delete(`${baseUrl}/${id}`)
}

const updatePerson = ( id, updatedPerson ) => {
  return axios.put(`${baseUrl}/${id}`, updatedPerson)
}

export default {
  getAll: getAll,
  createPerson: createPerson,
  deletePerson: deletePerson,
  updatePerson: updatePerson,
}