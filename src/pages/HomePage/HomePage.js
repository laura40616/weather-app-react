import React from 'react'

import CityStateForm from '../../forms/CityStateForm/CityStateForm'
import './HomePage.css'

const HomePage = () => {
  return (
    <div className='layout'>
      <h1 className='heading'>Weather Forecast</h1>
      <div className='thing'>
        <CityStateForm />
      </div>
    </div>
  )
}

export default HomePage
