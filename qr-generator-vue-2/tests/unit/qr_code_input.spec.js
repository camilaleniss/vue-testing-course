import { shallowMount, mount } from '@vue/test-utils'
import QRCodeInput from '@/components/QRCodeInput.vue'
import Vuetify from 'vuetify/lib'

describe('QRCodeInput.vue', () => {
  it('renders qr code input component', () => {
    const wrapper = shallowMount(QRCodeInput)

    const component = wrapper.find('.hello')

    expect(component.classes()).toContain('hello')
  })
  it('not mount with dependency, fails to do actions in elements', () => {
    /*
    const wrapper = shallowMount(QRCodeInput)

    const txtInput = wrapper.find('#txt-qr-code')

    txtInput.setValue('www.platzi.com')

    expect(wrapper.vm.qrCodeInput).toBe('www.platzi.com')
    */
  })
  it('renders qr code input component with its depedencies', () => {
    const vuetify = new Vuetify()

    const wrapper = mount(QRCodeInput, { vuetify })

    const component = wrapper.find('#btn-generate')

    expect(component.text()).toBe('Generar QR')
  })
  it('change qr code input and renders it', () => {
    const vuetify = new Vuetify()

    const wrapper = mount(QRCodeInput, {
      vuetify
    })

    const component = wrapper.find('#txt-qr-code')

    component.setValue('www.platzi.com')

    expect(wrapper.vm.qrCodeInput).toBe('www.platzi.com')
  })
})
