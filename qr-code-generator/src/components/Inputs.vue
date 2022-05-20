<template>
  <div class="hello">
    <v-text-field>Ingresa tu texto a convertir aquí</v-text-field>
    <v-btn>Generar QR</v-btn>
    <h1>Tu código es:</h1>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
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
