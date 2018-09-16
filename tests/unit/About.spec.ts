import { shallowMount } from '@vue/test-utils';
import About from '@/views/About.vue';

describe('About.vue', () => {
  it('renders correctly', () => {
    const wrapper = shallowMount(About);
    expect(wrapper).toMatchSnapshot()
  })
});
