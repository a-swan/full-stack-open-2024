import { PropTypes } from 'prop-types';

export const Country = ({ country }) => {
  return (
    <div>
      <h1>{country.name.common}</h1>
      <p>Capital - {country.capital[0]}</p>
      <p>Area - {country.area}</p>
      <h4>Languages</h4>
      <ul>{Object.values(country.languages).map(language => <li key={language}>{language}</li>)}</ul>
      <img src={country.flags.png} alt={country.flags.alt}></img>
    </div>
  )
}

Country.propTypes = {
  country: PropTypes.object.isRequired,
}