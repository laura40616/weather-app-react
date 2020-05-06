import React, { useState } from 'react'

import CityStateForm from '../../forms/CityStateForm/CityStateForm'
import WeatherDataList from '../../components/WeatherDataList/WeatherDataList'
import './HomePage.css'

const HomePage = () => {
  const [weather, setWeather] = useState({})
  return (
    <div className='layout'>
      <h1 className='heading'>Weather Forecast</h1>
      <div className='thing'>
        <CityStateForm setWeather={setWeather} />
        {Object.keys(weather).length > 0 && (<WeatherDataList weatherData={weather} />)}
      </div>
    </div>
  )
}

export default HomePage
