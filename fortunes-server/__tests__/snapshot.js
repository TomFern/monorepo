import React from 'react'
import renderer from 'react-test-renderer'
import About from '../pages/about'

it('renders homepage unchanged', () => {
  const tree = renderer.create(<About />).toJSON()
  expect(tree).toMatchSnapshot()
})
