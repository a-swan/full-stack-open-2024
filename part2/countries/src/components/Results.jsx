import { PropTypes } from 'prop-types'

import { Country } from './Country'
import { Button } from './Button'
import { Weather } from './Weather'

export const Results = ({ countries, showCountryClicked }) => {
  if(countries.length === 1){
    // Print out country data
    return(
      <div>
        <Country 
          key={countries[0].name.common} 
          country={countries[0]} 
        />
        <Weather
          capital={countries[0].capital[0]}
        />
      </div>
    )
  } else if(countries.length <= 10) {
    // Print out country names
    return(
      <div>
        {countries.map(country => {
          return(
            <li key={country.name.common}>
              {country.name.common} 
              <Button
                label="show"
                onButtonClicked={showCountryClicked}
                id={country.name.common}
              />
            </li>
          )
        })}
      </div>
    )
  }
  
  return(
    <div>
      Too many countries match the search!
    </div>
  )
}

Results.propTypes = {
  countries: PropTypes.array.isRequired,
  showCountryClicked: PropTypes.func.isRequired,
}