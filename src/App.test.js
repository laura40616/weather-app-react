/* global it, expect, describe, mount, jest */
import App from './App'

jest.mock('./pages/HomePage/HomePage', () => () => <div id='homePage'>Home Page Component</div>)

describe('<App />', () => {
  it('should render App component', () => {
    const app = mount(<App />)
    expect(app.text()).to.eql('Home Page Component')
    expect(app.find('#homePage')).to.exist
    expect(app.find('.App')).to.exist
  })
})
