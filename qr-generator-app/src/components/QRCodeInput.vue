<template>
  <div class="hello" align-center justify-center>
    <a-input v-model:value="qrCodeInput"></a-input>
    <a-button v-on:click="sendQRCode()">Generar QR</a-button>
  </div>
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
