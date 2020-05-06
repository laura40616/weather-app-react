/* global it, expect, describe, mount, render */
import CityStateForm from './CityStateForm'
import wait from 'waait'
import { act } from 'react-dom/test-utils'

describe('<CityStateForm />', () => {
  it('should render CityStateForm component', () => {
    const component = render(<CityStateForm />)
    const cityInput = component.find('input[name="city"]')
    const stateSelect = component.find('select[name="state"]')
    expect(cityInput.length).to.eql(1)
    expect(stateSelect.length).to.eql(1)
  })

  it('displays error text when required fields are incomplete', async () => {
    let component, errors
    await act(async () => {
      component = mount(<CityStateForm />)
      component.find('form').simulate('submit', { preventDefault () {} })
      await wait(0)
      component.update()
      errors = component.find('.field-error')
    })
    await wait(0)
    expect(errors.length).to.eql(2)
  })
})
