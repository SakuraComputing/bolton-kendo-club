import { shallowMount } from '@vue/test-utils';
import About from '@/views/About.vue';
const globalAny:any = global;

describe('About.vue', () => {
  it('renders correctly', () => {
    const mockGeolocation = {
      getCurrentPosition: jest.fn(),
      watchPosition: jest.fn()
    };

    
    globalAny.navigator.geolocation = mockGeolocation;

    const wrapper = shallowMount(About);
    expect(wrapper).toMatchSnapshot()
  })
});
