import { shallowMount } from '@vue/test-utils'
import WhatsKendo from '@/views/WhatsKendo.vue'

describe('WhatsKendo.vue', () => {
  it('renders props.msg when passed', () => {
    const wrapper = shallowMount(WhatsKendo);
    expect(wrapper).toMatchSnapshot()
  })
})
