/* global fetch */
import normalizeWeather from '../../helpers/normalizeWeather'
const onSubmit = async ({ setWeather, setSubmitError, city, state }) => {
  const apiKey = process.env.REACT_APP_API_KEY
  const weatherURL = `http://api.openweathermap.org/data/2.5/weather?q=${city},${state},us&units=imperial&appid=${apiKey}`
  try {
    if (city && state) {
      const response = await fetch(weatherURL)
      if (response.status === 200) {
        const result = await response.json()
        setWeather(normalizeWeather(result))
        setSubmitError('')
      } else {
        setSubmitError('Please try again. (Double check city and state)')
        setWeather({})
      }
    } else {
      setSubmitError('Please try again. (Double check city and state)')
      setWeather({})
    }
  } catch (error) {
    setSubmitError('Please try again. Error processing request')
    setWeather({})
  }
}

export default onSubmit
