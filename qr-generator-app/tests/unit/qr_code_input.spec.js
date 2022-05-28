import { shallowMount, createLocalVue } from '@vue/test-utils'
import QRCodeInput from '@/components/QRCodeInput.vue'
import Vuetify from 'vuetify'

describe('QRCodeInput.vue', () => {
  it('renders qr code input component', () => {
    const wrapper = shallowMount(QRCodeInput)

    const component = wrapper.find('.hello')

    expect(component.classes()).toContain('hello')
  })
  it('renders qr code input component with its depedencies', () => {
    const localVue = createLocalVue()

    localVue.use(Vuetify)

    const wrapper = shallowMount(QRCodeInput, { localVue })

    const component = wrapper.find('.hello')

    expect(component.classes()).toContain('hello')
  })
})
