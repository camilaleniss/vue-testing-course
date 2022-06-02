import { shallowMount } from '@vue/test-utils'
import { createStore } from 'vuex'
import QRCodeInput from '@/components/QRCodeInput.vue'

describe('QRCodeInput.vue', () => {
  const store = createStore({
    state () {
      return { count: 1 }
    }
  })

  it('renders qr code input component', () => {
    const wrapper = shallowMount(QRCodeInput)

    const component = wrapper.find('.hello')

    expect(component.classes()).toContain('hello')
  })
  it('renders qr code input component with its depedencies', () => {
    const wrapper = shallowMount(QRCodeInput,
      {
        global:
          { plugins: [store] }
      })

    const component = wrapper.find('#btn-generate')

    expect(component.text()).toBe('Generar QR')
  })
  it('change qr code input and renders it', () => {
    const wrapper = shallowMount(QRCodeInput)

    const component = wrapper.find('#txt-qr-code')
    component.setValue('www.platzi.com')

    expect(wrapper.vm.qrCodeInput).toBe('www.platzi.com')
  })
})
