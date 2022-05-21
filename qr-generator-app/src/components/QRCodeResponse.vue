<template>
  <v-container class="qr-code-container" align-center justify-center>
    <vue-qrcode value="https://www.platzi.com" margin="10" scale="7" />
  </v-container>
</template>

<script>
import VueQrcode from 'vue-qrcode'

export default {
  name: 'QrCodeResponse',
  components: {
    VueQrcode
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
h3
  margin 40px 0 0

ul
  list-style-type none
  padding 0

li
  display inline-block
  margin 0 10px

a
  color #42b983
</style>
