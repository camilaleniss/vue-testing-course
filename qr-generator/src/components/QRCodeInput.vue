<template>
  <v-container class="hello" align-center justify-center>
    <v-text-field v-model="qrCodeInput"></v-text-field>
    <v-btn v-on:click="sendQRCode()">Generar QR</v-btn>
  </v-container>
</template>

<script>
export default {
  name: 'QrCodeInput',
  data: function () {
    return {
      qrCodeInput: ''
    }
  },
  methods: {
    sendQRCode: function () {
      this.$emit('qrCodeInput', this.qrCodeInput)
    }
  }
}
</script>
