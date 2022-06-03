import { shallowMount } from '@vue/test-utils'
import { createStore } from 'vuex'
import QRCodeInput from '@/components/QRCodeInput.vue'

describe('QRCodeInput.vue', () => {
  describe('mounting a component', () => {
    it('renders qr code input component', () => {
      const wrapper = shallowMount(QRCodeInput)

      const component = wrapper.find('.hello')

      expect(component.classes()).toContain('hello')
    })
    it('renders qr code input component with its depedencies', () => {
      const store = createStore({
        state () {
          return { count: 1 }
        }
      })

      const wrapper = shallowMount(QRCodeInput,
        {
          global:
            { plugins: [store] }
        })
      it('renders generate qr code button with the text ', () => {
        const component = wrapper.find('#btn-generate')

        expect(component.text()).toBe('Generar QR')
      })
      it('renders txt input, change its value and see if stored', () => {
        const component = wrapper.find('#txt-qr-code')

        expect(component.element.value).toBe('')

        component.setValue('www.platzi.com')

        expect(wrapper.vm.qrCodeInput).toBe('www.platzi.com')
      })
    })
  })
  describe('actions and mocks', () => {
    it('triggers click in qr code button and the event it is called', () => {
      const spySendQRCode = jest.spyOn(QRCodeInput.methods, 'sendQRCode')

      const wrapper = shallowMount(QRCodeInput)

      const txtComponent = wrapper.find('#txt-qr-code')

      const qrCode = 'www.platzi.com'

      txtComponent.setValue(qrCode)

      const btnComponent = wrapper.find('#btn-generate')
      btnComponent.trigger('click')

      expect(spySendQRCode).toHaveBeenCalledTimes(1)
      expect(spySendQRCode).toHaveBeenCalledWith(qrCode)
    })
  })
})
