import { shallowMount } from '@vue/test-utils'
import KendoPhoto from '@/views/KendoPhoto.vue'

describe('KendoPhoto.vue', () => {
  it('renders correctly', () => {
    const wrapper = shallowMount(KendoPhoto);
    expect(wrapper).toMatchSnapshot()
  })
})
