import { shallowMount } from '@vue/test-utils'
import HelloWorld from '@/components/HelloWorld.vue'

describe('HelloWorld.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'new message'
    const wrapper = shallowMount(HelloWorld, {
      props: { msg }
    })

    const component = wrapper.find('.hello')
    expect(component.classes()).toContain('hello')
    expect(component.attributes().style).toBe('background-color: black;')
    expect(wrapper.classes()).toContain('hello')
    expect(wrapper.text()).toMatch(msg)
    expect(wrapper.vm.counter).toBe(0)
    wrapper.vm.increment()
    expect(wrapper.vm.counter).toBe(1)
  })
})
