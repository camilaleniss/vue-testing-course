<template>
  <v-container class="qr-code-container" align-center justify-center>
    <vue-qrcode :value="this.qrCodeText" margin="10" scale="7" />
  </v-container>
</template>

<script>
import VueQrcode from 'vue-qrcode'

export default {
  name: 'QrCodeResponse',
  components: {
    VueQrcode
  },
  props: {
    qrCodeText: String
  }
}
</script>
