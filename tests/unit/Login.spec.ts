import { shallowMount } from '@vue/test-utils'
import Login from '@/views/Login.vue'

describe('Login.vue', () => {
  it('renders correctly', () => {
    const wrapper = shallowMount(Login);
    expect(wrapper).toMatchSnapshot()
  })
})
