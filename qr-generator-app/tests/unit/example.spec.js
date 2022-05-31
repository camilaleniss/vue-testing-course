import { shallowMount, mount } from '@vue/test-utils'
import QRCodeInput from '@/components/QRCodeInput.vue'
import Antd from 'ant-design-vue'

describe('QRCodeInput.vue', () => {
  it('renders qr code input component', () => {
    const wrapper = shallowMount(QRCodeInput)

    const component = wrapper.find('.hello')

    expect(component.classes()).toContain('hello')
  })
  it('renders qr code input component with its depedencies', () => {
    const wrapper = mount(QRCodeInput,
      {
        global:
        { plugins: [Antd] }
      })

    const component = wrapper.find('#btn-generate')

    expect(component.text()).toBe('Generar QR')
  })
  it('change qr code input and renders it', () => {
    const wrapper = mount(QRCodeInput,
      {
        global:
        { plugins: [Antd] }
      })

    let component = wrapper.find('#txt-qr-code')

    console.log(wrapper.html())

    expect(component.text()).toBe('')

    wrapper.vm.qrCodeInput = 'Dummy input'

    component = wrapper.find('.el-input')

    expect(component.text()).toBe('Dummy input')
  })
})