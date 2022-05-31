import { shallowMount, mount } from '@vue/test-utils'
import QRCodeInput from '@/components/QRCodeInput.vue'
import Vuetify from 'vuetify/lib'

describe('QRCodeInput.vue', () => {
  it('renders qr code input component', () => {
    const wrapper = shallowMount(QRCodeInput)

    const component = wrapper.find('.hello')

    expect(component.classes()).toContain('hello')
  })
  it('renders qr code input component with its depedencies', () => {
    const vuetify = new Vuetify()

    const wrapper = mount(QRCodeInput, { vuetify })

    const component = wrapper.find('#btn-generate')

    expect(component.text()).toBe('Generar QR')
  })
  it('change qr code input and renders it', () => {
    const vuetify = new Vuetify()

    const wrapper = mount(QRCodeInput, { vuetify })

    const component = wrapper.find('#txt-qr-code')

    expect(component.text()).toBe('')

    wrapper.vm.qrCodeInput = 'Dummy input'

    expect(component.text()).toBe('Dummy input')
  })
})
