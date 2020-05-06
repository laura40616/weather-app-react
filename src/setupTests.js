import React from 'react'

import { expect, to, eql, exist } from 'chai'
import Enzyme, { shallow, render, mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
// // React 16 Enzyme adapter
Enzyme.configure({ adapter: new Adapter() })

const chai = require('chai')
const chaiJestMock = require('chai-jest-mocks')
chai.use(chaiJestMock)

React.useLayoutEffect = React.useEffect
// Make Enzyme functions available in all test files without importing
global.React = React
global.shallow = shallow
global.render = render
global.mount = mount

// chai
global.expect = expect
global.to = to
global.eql = eql
global.exist = exist
