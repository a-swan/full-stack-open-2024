import { useState, useEffect } from 'react'
import { Header } from './components/Header'
import { Form } from './components/Form'
import { Table } from './components/Table'
import { TextInput } from './components/TextInput'
import { Notification } from './components/Notification'
import personService from './services/persons'

const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')
  const [notification, setNotification] = useState(null)
  const [notificationType, setNotificationType] = useState('error')

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

            setNotification(`Successfully updated ${response.data.name}`)
            setNotificationType('success')

            setTimeout(() => {
              setNotification(null)
            }, 5000)
          })
          .catch(error => {
            console.error(`Error updating ${updatePerson.id}: ${error}`)

            setNotification(`Error updating ${updatePerson.name}`)
            setNotificationType('error')

            setTimeout(() => {
              setNotification(null)
            }, 5000)
          })
      }
      return
    }

    personService
      .createPerson(newPerson)
      .then(response => {
        copyPersons.push(response.data)
        setPersons(copyPersons)

        setNotification(`Successfully added ${response.data.name} to phonebook`)
        setNotificationType('success')

        setTimeout(() => {
          setNotification(null)
        }, 5000)
      })
      .catch(error => {
        console.error(`Error adding ${JSON.stringify(newPerson)}: ${error}`)

        setNotification(`Error adding ${newPerson.name}`)
        setNotificationType('error')

        setTimeout(() => {
          setNotification(null)
        }, 5000)
      })
  }

  const clickDelete = (id) => {
    console.log(`Id ${id} clicked`);

    const deletedPerson = persons.find(person => person.id === id)

    if(window.confirm(`Delete ${deletedPerson.name}?`)){
      const copyPersons = persons.filter(person => person.id != id)

      personService
        .deletePerson(id)
        .then(response => {
          console.log(response)
          setPersons(copyPersons)

          setNotification(`Successfully deleted ${deletedPerson.name} from phonebook`)
          setNotificationType('success')
  
          setTimeout(() => {
            setNotification(null)
          }, 5000)  
        })
        .catch(error => {
          personService
            .getAll()
            .then(response => {
              console.log('refreshing data...')
              setPersons(response.data)
            })
    
          console.error(`Error deleting ${deletedPerson.id}: ${error}`)

          setNotification(`Error deleting ${deletedPerson.name}`)
          setNotificationType('error')

          setTimeout(() => {
            setNotification(null)
          }, 5000)
        })
    }
  }

  return (
    <div>
      <Notification message={notification} type={notificationType} />
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