<template>
  <v-layout row wrap  align-center justify-center fill-height >
    <inputs margin-right margin-left />

  </v-layout>
</template>

<script>
import Inputs from '../components/Inputs'
// import QRCodeResponse from '../components/QRCode'

export default {
  name: 'HomeView',

  components: {
    Inputs
    // QRCodeResponse
  }
}
</script>
