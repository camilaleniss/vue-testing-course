<template>
  <v-container wrap  align-center justify-center fill-height >
    <qr-code-input margin-right margin-left />
    <qr-code-response></qr-code-response>
  </v-container>
</template>

<script>
import QrCodeInput from '../components/QRCodeInput'
import QrCodeResponse from '../components/QRCodeResponse'

export default {
  name: 'HomeView',

  components: {
    QrCodeInput,
    QrCodeResponse
  }
}
</script>
