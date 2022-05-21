<template>
  <div class="about">
    <h1>This is an about page</h1>
    <QrCodeResponse></QrCodeResponse>
  </div>
</template>

<script>
import QrCodeResponse from '../components/QRCode'

export default {
  name: 'HomeView',

  components: {
    QrCodeResponse
  }
}
</script>
