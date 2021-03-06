import { shallowMount } from '@vue/test-utils'
import HelloWorld from '@/components/HelloWorld.vue'

describe('HelloWorld.vue', () => {
  it('renders hello world component', () => {
    const wrapper = shallowMount(HelloWorld)

    const component = wrapper.find('.hello')

    expect(component.classes()).toContain('hello')
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
  it('button click should call increment function using mock', async () => {
    const mockedIncrement = jest.fn()

    const wrapper = shallowMount(HelloWorld, {})

    wrapper.setMethods({ increment: mockedIncrement })

    const component = wrapper.find('#but-increment')
    await component.trigger('click')

    expect(mockedIncrement).toHaveBeenCalledTimes(1)

    // On mock functions the logic implemented in HelloWorld.vue it's not perfomed, just called
    expect(wrapper.vm.counter).toBe(0)
  })
  it('button increment with value should increment with a given input', async () => {
    const spyIncrementWith = jest.spyOn(HelloWorld.methods, 'incrementWith')

    const wrapper = shallowMount(HelloWorld, {})

    wrapper.find('#input-increment').setValue(15)

    expect(Number(wrapper.vm.inputValue)).toBe(15)
    expect(wrapper.vm.counter).toBe(0)

    const component = wrapper.find('#but-increment-value')
    await component.trigger('click')

    expect(spyIncrementWith).toBeCalledWith('15')
    expect(wrapper.vm.counter).toBe(15)
  })
})
