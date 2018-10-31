import React from 'react'
import { shallow } from 'enzyme'
import AddItemButton from '../../src/components/add-item-btn'

const props = {
  onClick: jest.fn()
}

describe('AddItemButton component', () => {
  it('should render dom', () => {
    const wrapper = shallow(<AddItemButton {...props}/>)
    expect(wrapper.find('Button').text()).toContain('Add')
  })
})
