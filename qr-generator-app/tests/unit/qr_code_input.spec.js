import { shallowMount } from '@vue/test-utils'
import QRCodeInput from '@/components/QRCodeInput.vue'
import { createVuetify } from '@/plugins/vuetify'

describe('QRCodeInput.vue', () => {
  let vuetify

  beforeEach(() => {
    vuetify = new createVuetify() // eslint-disable-line
  })
  it('renders qr code input component', () => {
    const wrapper = shallowMount(QRCodeInput)

    const component = wrapper.find('.hello')

    expect(component.classes()).toContain('hello')
  })
  it('renders qr code input component with its depedencies', () => {
    const wrapper = shallowMount(QRCodeInput,
      vuetify,
      {
        global:
        { plugins: [] }
      })

    const component = wrapper.find('#btn-generate')

    expect(component.text()).toBe('Generar QR')
  })
})
