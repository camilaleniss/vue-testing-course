import { shallowMount, mount } from '@vue/test-utils'
import QRCodeInput from '@/components/QRCodeInput.vue'
// import vuetify from '@/plugins/vuetify'
import { createVuetify, components } from 'vuetify'

import { createApp } from 'vue'

const app = createApp({})
app.use(createVuetify(components))

describe('QRCodeInput.vue', () => {
  let vuetify
  beforeEach(() => {
    vuetify = createVuetify(components)
  })

  it('renders qr code input component', () => {
    const wrapper = shallowMount(QRCodeInput)

    const component = wrapper.find('.hello')

    expect(component.classes()).toContain('hello')
  })
  it('renders qr code input component with its depedencies', () => {
    const wrapper = mount(QRCodeInput,
      {
        global:
        { plugins: [vuetify] }
      })

    const hello = wrapper.find('.hello')

    console.log(hello.html())

    const component = wrapper.find('#btn-generate')

    expect(component.text()).toBe('Generar QR')
  })
  /*
  it('change qr code input and renders it', () => {
    const wrapper = mount(QRCodeInput,
      {
        global:
        { plugins: [vuetify] }
      })

    const component = wrapper.find('#txt-qr-code').get('input')

    console.log(component)

    component.setValue('www.platzi.com')

    expect(wrapper.vm.qrCodeInput).toBe('www.platzi.com')
  })
  */
})
