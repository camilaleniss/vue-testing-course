<template>
  <v-container class="hello" align-center justify-center>
    <v-text-field v-model="qrCodeInput"></v-text-field>
    <v-btn>Generar QR</v-btn>
    <h3>Tu código es: {{qrCodeInput}}</h3>
  </v-container>
</template>

<script>
export default {
  name: 'QrCodeInput',
  data: function () {
    return {
      qrCodeInput: ''
    }
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
