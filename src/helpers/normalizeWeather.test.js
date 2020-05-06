/* global it, expect, describe */
import normalizeWeather from './normalizeWeather'

describe('normalizeWeather', () => {
  it('returns data', () => {
    const data = {
      weather: [
        {
          id: 800,
          main: 'Clear',
          description: 'clear sky',
          icon: '01d'
        }
      ],
      main: {
        temp: 46.63,
        feels_like: 42.75,
        temp_min: 45,
        temp_max: 48,
        pressure: 1024,
        humidity: 81
      },
      wind: {
        speed: 3.36,
        deg: 310
      },
      name: 'Kansas City',
      cod: 200
    }
    const result = normalizeWeather(data)
    expect(result.sky).to.eql(data.weather[0].main)
    expect(result.currentTemp).to.eql(data.main.temp)
    expect(result.minTemp).to.eql(data.main.temp_min)
    expect(result.maxTemp).to.eql(data.main.temp_max)
    expect(result.feelsLike).to.eql(data.main.feels_like)
    expect(result.wind).to.eql(data.wind.speed)
  })
  it('returns null when data is undefined', () => {
    const data = {
      weather: [
        {
          id: 800,
          description: 'clear sky',
          icon: '01d'
        }
      ],
      main: {
        pressure: 1024,
        humidity: 81
      },
      wind: {
        deg: 310
      },
      name: 'Kansas City',
      cod: 200
    }
    const result = normalizeWeather(data)
    expect(result.sky).to.eql(null)
    expect(result.currentTemp).to.eql(null)
    expect(result.minTemp).to.eql(null)
    expect(result.maxTemp).to.eql(null)
    expect(result.feelsLike).to.eql(null)
    expect(result.wind).to.eql(null)
  })
})
