/* global it, expect, describe, render */
import WeatherDataList from './WeatherDataList'

describe('<WeatherDataList />', () => {
  it('should render WeatherDataList component with all data', () => {
    const data = {
      currentTemp: 11,
      feelsLike: 22,
      sky: 33,
      wind: 44,
      minTemp: 55,
      maxTemp: 66
    }
    const component = render(<WeatherDataList weatherData={data} />)
    const dataItems = component.find('li')
    expect(dataItems.length).to.eql(6)
  })

  it('should not list data when data is null WeatherDataList component with all data', () => {
    const data = {
      currentTemp: null,
      feelsLike: null,
      sky: null,
      wind: null,
      minTemp: null,
      maxTemp: null
    }
    const component = render(<WeatherDataList weatherData={data} />)
    const dataItems = component.find('li')
    expect(dataItems.length).to.eql(0)
  })
})
