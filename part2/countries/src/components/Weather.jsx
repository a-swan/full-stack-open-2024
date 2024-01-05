import { useEffect, useState } from 'react'
import { PropTypes } from 'prop-types'

import weatherService from '../services/weather'

export const Weather = ({ capital }) => {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    if(capital){
      console.log(`Loading weather for ${capital}`);
      weatherService
        .getWeather(capital)
        .then((response) => {
          setWeather(response.data);
        })
      }
  }, [capital])

  if(!weather){
    return
  }

  return(
    <div>
      <h4>Weather in {capital}</h4>
      <p>temperature: {weather.current.temp_c}</p>
      <img src={weather.current.condition.icon} alt={weather.current.condition.text}/>
      <p>wind speed: {weather.current.wind_kph}</p>
    </div>
  )
}

Weather.propTypes = {
  capital: PropTypes.string
}