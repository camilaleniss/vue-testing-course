<template>
  <div class="about">
    <h1>This is an about page</h1>
    <QRCodeResponse></QRCodeResponse>
  </div>
</template>

<script>
import QRCodeResponse from '../components/QRCode'

export default {
  name: 'HomeView',

  components: {
    QRCodeResponse
  }
}
</script>
