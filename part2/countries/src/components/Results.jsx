import { Country } from './Country'
import { Button } from './Button'

import { PropTypes } from 'prop-types'

export const Results = ({ countries, showCountryClicked }) => {
  console.log(countries.length)

  if(countries.length === 1){
    // Print out country data
    return(
      <div>
        {countries.map(country => {
          return(
            <Country 
              key={country.name.common} 
              country={country} 
            />
          )
        })}
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