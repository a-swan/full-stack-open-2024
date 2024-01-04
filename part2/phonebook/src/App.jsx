import { useState } from 'react'
import { Header } from './components/Header'
import { Form } from './components/Form'
import { Table } from './components/Table'
import { TextInput } from './components/TextInput'

const App = () => {
  const [persons, setPersons] = useState([
    {
      name: 'Arto Hellas',
      number: '040-1234567'
    }
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')

  const nameChange = (event) => setNewName(event.target.value);
  const numberChange = (event) => setNewNumber(event.target.value);
  const filterChange = (event) => {
    setFilter(event.target.value)
  }

  const clickSubmit = (event) => {
    event.preventDefault()

    if(persons.filter(person => person.name === newName).length > 0){
      alert(`${newName} is already added to phonebook`);
      return;
    }

    const copyPersons = [ ...persons ]
    copyPersons.push({"name": newName, "number": newNumber})
    setPersons(copyPersons)
  }

  return (
    <div>
      <Header text="Phonebook" />
      <TextInput label="filter: " onInputChanged={filterChange}/>
      <Header text="Add a New Contact"/>
      <Form onNameChanged={nameChange} onNumberChanged={numberChange} onSubmitClick={clickSubmit}/>
      <Header text="Numbers" />
      <Table persons={persons.filter(person => person.name.toLowerCase().includes(filter.toLowerCase()))}/>
    </div>
  )
}

export default App