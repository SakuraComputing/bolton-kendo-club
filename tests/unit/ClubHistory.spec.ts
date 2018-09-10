import { shallowMount } from '@vue/test-utils'
import ClubHistory from '@/views/ClubHistory.vue'

describe('ClubHistory.vue', () => {
  it('renders correctly', () => {
    const wrapper = shallowMount(ClubHistory);
    expect(wrapper).toMatchSnapshot()
  })
})
