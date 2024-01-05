import { useEffect, useState } from 'react'
import { TextInput } from './components/TextInput'
import { Results } from './components/Results'

import countryService from './services/countries'

function App() {
  const [countries, setCountries] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([]);

  useEffect(() => {
    console.log('effect');

    countryService
      .getAll()
      .then(response => {
        setCountries(response.data)
      })
  }, [])


  const searchChanged = (event) => {
    setFilteredCountries(countries.filter(country => country.name.common.toLowerCase().includes(event.target.value.toLowerCase())));
  }

  const showCountry = (id) => {
    console.log(id)
    setFilteredCountries([countries.find(country => country.name.common === id)])
  }

  return (
    <div>
      <TextInput 
        label="find countries" 
        onTextChanged={searchChanged}
      />

      <Results 
        countries={filteredCountries} 
        showCountryClicked={showCountry} 
      />
    </div>
  )
}

export default App
