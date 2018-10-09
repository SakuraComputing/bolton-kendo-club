import { shallowMount } from '@vue/test-utils'
import Secure from '@/views/auth/Secure.vue'

describe('Secure.vue', () => {
  it('renders correctly', () => {
    const wrapper = shallowMount(Secure);
    expect(wrapper).toMatchSnapshot()
  })
})
