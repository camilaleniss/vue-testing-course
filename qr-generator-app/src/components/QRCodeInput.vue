<template>
  <div class="hello" align-center justify-center>
    <a-input id="txt-qr-code" v-model:value="qrCodeInput"></a-input>
    <a-button id="btn-generate" v-on:click="sendQRCode()">Generar QR</a-button>
  </div>
</template>

<script>
export default {
  name: 'QrCodeInput',
  data: function () {
    return {
      qrCodeInput: 'Camila'
    }
  },
  methods: {
    sendQRCode: function () {
      this.$emit('qrCodeInput', this.qrCodeInput)
    }
  }
}
</script>
