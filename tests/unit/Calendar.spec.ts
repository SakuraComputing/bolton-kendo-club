import { shallowMount } from '@vue/test-utils'
import Calendar from '@/views/Calendar.vue'

describe('Calendar.vue', () => {
  it('renders correctly', () => {
    const wrapper = shallowMount(Calendar);
    expect(wrapper).toMatchSnapshot()
  })
})
