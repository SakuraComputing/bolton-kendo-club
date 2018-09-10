import { shallowMount } from '@vue/test-utils'
import KendoStudy from '@/views/KendoStudy.vue'

describe('KendoStudy.vue', () => {
  it('renders correctly', () => {
    const wrapper = shallowMount(KendoStudy);
    expect(wrapper).toMatchSnapshot()
  })
})
