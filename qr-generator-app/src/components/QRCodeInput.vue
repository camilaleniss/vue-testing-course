<template>
  <el-container class="hello" align-center justify-center>
    <el-input v-model="qrCodeInput"/>
    <el-button id="btn-generate" v-on:click="sendQRCode()">Generar QR</el-button>
  </el-container>
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
