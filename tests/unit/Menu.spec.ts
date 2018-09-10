import { shallowMount } from '@vue/test-utils';
import Menu from '@/components/Menu.vue';

describe('Menu', () => {
    it('should render correctly', () => {
        const msg = 'new message'
        const wrapper = shallowMount(Menu, {
          propsData: { msg }
        })
        expect(wrapper.text()).toMatch(msg)   
    })
});