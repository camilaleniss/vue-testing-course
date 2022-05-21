<template>
  <v-layout row wrap  align-center justify-center fill-height >
    <qr-code-input margin-right margin-left />
    <qr-code-response></qr-code-response>
  </v-layout>
</template>

<script>
import QrCodeInput from '../components/QRCodeInput'
import QrCodeResponse from '../components/QRCode'

export default {
  name: 'HomeView',

  components: {
    QrCodeInput,
    QrCodeResponse
  }
}
</script>
