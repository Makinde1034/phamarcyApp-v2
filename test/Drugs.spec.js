import { shallowMount } from '@vue/test-utils'
import Drugs from '../components/Drugs'

describe('Drugs component', () => {
  test('Drug name and doasge sholud be define', () => {
    const wrapper = shallowMount(Drugs)

    const name = wrapper.find('.name')

    expects(name).toBeDefined()
  })
})
