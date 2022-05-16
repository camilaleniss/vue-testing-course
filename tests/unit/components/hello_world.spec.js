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
    // expect(component.attributes().style).toBe('background-color: black;')
    expect(wrapper.classes()).toContain('hello')
    expect(wrapper.text()).toMatch(msg)
    expect(wrapper.vm.counter).toBe(0)
    wrapper.vm.increment()
    expect(wrapper.vm.counter).toBe(1)
  })
  it('button click should increment and it should be rendered', async () => {
    const wrapper = shallowMount(HelloWorld, {})

    const component = wrapper.find('#but-increment')
    await component.trigger('click')

    expect(wrapper.find('#header-counter').text()).toBe('counter: 1')
  })
  it('button click should increment and counter data increments', async () => {
    const wrapper = shallowMount(HelloWorld, {})

    const component = wrapper.find('#but-increment')
    await component.trigger('click')

    expect(wrapper.vm.counter).toBe(1)
  })
  it('button click should call increment function and counter data increments', async () => {
    const spyIncrement = jest.spyOn(HelloWorld.methods, 'increment')

    const wrapper = shallowMount(HelloWorld, {})

    const component = wrapper.find('#but-increment')
    await component.trigger('click')

    expect(spyIncrement).toHaveBeenCalledTimes(1)
    expect(wrapper.vm.counter).toBe(1)
  })
  it('button click should call increment function using mock and counter data increments', async () => {
    const wrapper = shallowMount(HelloWorld, {})

    wrapper.vm.increment = jest.fn()

    const component = wrapper.find('#but-increment')
    await component.trigger('click')

    expect(wrapper.vm.increment).toHaveBeenCalledTimes(1)

    // On mock functions the logic implemented in HelloWorld.vue it's not perfomed, just called
    expect(wrapper.vm.counter).toBe(0)
  })
})
