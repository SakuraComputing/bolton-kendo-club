import { shallowMount } from '@vue/test-utils'
import KendoVideo from '@/views/KendoVideo.vue'

describe('KendoVideo.vue', () => {
  it('renders correctly', () => {
    const wrapper = shallowMount(KendoVideo);
    expect(wrapper).toMatchSnapshot()
  })
})
