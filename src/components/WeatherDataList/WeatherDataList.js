import React from 'react'

import './WeatherDataList.css'

const WeatherDataList = ({weatherData}) => {
  const { currentTemp, feelsLike, sky, wind, minTemp, maxTemp } = weatherData
  return (
    <ul>
      {currentTemp && <li>Current Temp: {Math.round(currentTemp)} &#176;F</li>}
      {feelsLike && <li>Feels Like: {Math.round(feelsLike)} &#176;F</li>}
      {sky && <li>Sky: {sky}</li>}
      {wind && <li>Wind: {Math.round(wind)} mph</li>}
      {minTemp && <li>Minimum Temp: {Math.round(minTemp)} &#176;F</li>}
      {maxTemp && <li>Maximum Temp: {Math.round(maxTemp)} &#176;F</li>}
    </ul>
  )
}

export default WeatherDataList
