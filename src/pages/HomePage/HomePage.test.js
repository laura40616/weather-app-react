/* global it, expect, describe, render, jest */
import HomePage from './HomePage'

jest.mock('../../forms/CityStateForm/CityStateForm', () => () => <div id='CityStateForm'>City State Form</div>)
describe('<HomePage />', () => {
  it('should render HomePage component', () => {
    const component = render(<HomePage />)
    expect(component.find('h1').text()).to.eql('Weather Forecast')
    expect(component.find('CityStateForm')).to.exist
  })
})
