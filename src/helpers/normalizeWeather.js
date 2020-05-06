import delve from 'delve'
const normalizeWeather = (weather) => {
  const currentTemp = delve(weather, 'main.temp') || null
  const feelsLike = delve(weather, 'main.feels_like') || null
  const minTemp = delve(weather, 'main.temp_min') || null
  const maxTemp = delve(weather, 'main.temp_max') || null
  const sky = delve(weather, 'weather.0.main') || null
  const wind = delve(weather, 'wind.speed') || null
  return { currentTemp, minTemp, maxTemp, feelsLike, sky, wind }
}

export default normalizeWeather
