import { shallowMount } from '@vue/test-utils';
import LandingPage from '@/components/LandingPage.vue';

describe('Landing Page', () => {
    it('should render correctly', () => {
        const msg = 'new message'
        const wrapper = shallowMount(LandingPage, {
          propsData: { msg }
        })
        expect(wrapper.text()).toMatch(msg)
    
    })
});