import { shallowMount } from '@vue/test-utils'
import KendoLinks from '@/views/KendoLinks.vue'

describe('KendoLinks.vue', () => {
  it('renders correctly', () => {
    const wrapper = shallowMount(KendoLinks);
    expect(wrapper).toMatchSnapshot()
  })
})
