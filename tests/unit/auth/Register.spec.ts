import { shallowMount } from '@vue/test-utils'
import Register from '@/views/auth/Register.vue'

describe('Register.vue', () => {
  it('renders correctly', () => {
    const wrapper = shallowMount(Register);
    expect(wrapper).toMatchSnapshot()
  })
})
