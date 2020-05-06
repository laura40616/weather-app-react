/* global it, expect, describe, jest, beforeEach, afterEach */
import onSubmit from './onSubmit'

describe('onSubmit', () => {
  let setWeather, setSubmitError, windowFetch
  beforeEach(() => {
    setWeather = jest.fn()
    setSubmitError = jest.fn()
    windowFetch = window.fetch = jest.fn(
      () => Promise.resolve({
        status: 200,
        json: () => (Promise.resolve())
      })
    )
  })

  afterEach(() => {
    windowFetch.mockRestore()
  })
  it('should submit successfully', async () => {
    const data = { city: 'test', state: 'test' }
    await onSubmit({ setWeather, setSubmitError, ...data })
    expect(windowFetch).to.have.beenCalled()
    expect(setWeather).to.have.beenCalled()
  })

  it('will catch errors', async () => {
    const data = { city: 'test', state: 'test' }
    windowFetch = window.fetch = jest.fn(() => Promise.reject(new Error('Something went wrong!')))
    await onSubmit({ setWeather, setSubmitError, ...data })
    expect(setSubmitError).to.have.beenCalled()
    expect(setWeather).to.have.beenCalled()
  })

  it('will set an error when response is not 200', async () => {
    const data = { city: 'test', state: 'test' }
    windowFetch = window.fetch = jest.fn(() => Promise.resolve({ status: 404 }))
    await onSubmit({ setWeather, setSubmitError, ...data })
    expect(setSubmitError).to.have.beenCalled()
    expect(setWeather).to.have.beenCalled()
  })

  it('will not send a request if state is missing', async () => {
    const data = { city: 'test' }
    await onSubmit({ setWeather, setSubmitError, ...data })
    expect(windowFetch).not.to.have.beenCalled()
    expect(setSubmitError).to.have.beenCalled()
    expect(setWeather).to.have.beenCalled()
  })

  it('not send a request if city is missing', async () => {
    const data = { state: 'test' }
    await onSubmit({ setWeather, setSubmitError, ...data })
    expect(windowFetch).not.to.have.beenCalled()
    expect(setSubmitError).to.have.beenCalled()
    expect(setWeather).to.have.beenCalled()
  })
})
