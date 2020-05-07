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

  it('displays error if city text contains numbers', async () => {
    let component, errors
    await act(async () => {
      component = mount(<CityStateForm />)
      component.find('input[name="city"]').simulate('change', { target: { name: 'city', value: 22 } })
      await wait(0)
      component.find('form').simulate('submit', { preventDefault () {} })
      await wait(0)
      component.update()
      errors = component.find('.field-error')
    })
    await wait(0)
    expect(errors.get(0).props.children).to.match(/\bletters only\b/i)
  })

  it('displays error if city text has more than 30 characters', async () => {
    let component, errors
    const inputText = 'a'.repeat(31)
    await act(async () => {
      component = mount(<CityStateForm />)
      component.find('input[name="city"]').simulate('change', { target: { name: 'city', value: inputText } })
      await wait(0)
      component.find('form').simulate('submit', { preventDefault () {} })
      await wait(0)
      component.update()
      errors = component.find('.field-error')
    })
    await wait(0)
    expect(errors.get(0).props.children).to.match(/\b30\b/i)
  })
})
