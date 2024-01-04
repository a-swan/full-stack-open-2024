import { useState, useEffect } from 'react'
import { Header } from './components/Header'
import { Form } from './components/Form'
import { Table } from './components/Table'
import { TextInput } from './components/TextInput'
import personService from './services/persons'

const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')

  useEffect(() => {
    console.log('effect');

    personService
      .getAll()
      .then(response => {
        setPersons(response.data)
      })
  }, [])

  const nameChange = (event) => setNewName(event.target.value);
  const numberChange = (event) => setNewNumber(event.target.value);
  const filterChange = (event) => {
    setFilter(event.target.value)
  }

  const clickSubmit = (event) => {
    event.preventDefault()

    const copyPersons = [ ...persons ]
    const newPerson = {"name": newName, "number": newNumber}

    const updatePerson = persons.find(person => person.name === newName);

    if(updatePerson){
      if(window.confirm(`${newName} is already added to phonebook, replace the old number with the new one?`)){
        personService
          .updatePerson(updatePerson.id, newPerson)
          .then(response => {
            setPersons(persons.map(person => person.id !== updatePerson.id ? person : response.data))
          })
      }
      return
    }

    personService
      .createPerson(newPerson)
      .then(response => {
        console.log(response);
        copyPersons.push(response.data)
        setPersons(copyPersons)
      })
  }

  const clickDelete = (id) => {
    console.log(`Id ${id} clicked`);

    if(window.confirm(`Delete ${persons.filter(person => person.id === id)[0].name}?`)){
      const copyPersons = persons.filter(person => person.id != id)

      personService
        .deletePerson(id)
        .then(response => {
          console.log(response)
          setPersons(copyPersons)
        })
    }
  }

  return (
    <div>
      <Header text="Phonebook" />
      <TextInput label="filter: " onInputChanged={filterChange} />
      <Header text="Add a New Contact" />
      <Form onNameChanged={nameChange} onNumberChanged={numberChange} onSubmitClick={clickSubmit} />
      <Header text="Numbers" />
      <Table persons={persons.filter(person => person.name.toLowerCase().includes(filter.toLowerCase()))} onDeleteClicked={clickDelete} />
    </div>
  )
}

export default App