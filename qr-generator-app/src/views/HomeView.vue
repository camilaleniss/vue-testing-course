<template>
  <el-container wrap  align-center justify-center fill-height >
    <el-header>
      <h1>Generador de Código QR</h1>
    </el-header>
    <el-main>
      <qr-code-input  @qrCodeInput="sendQRCode" margin-right margin-left />
      <qr-code-response :qrCodeText="qrCodeText" ></qr-code-response>
    </el-main>
  </el-container>
</template>

<script>
import QrCodeInput from '../components/QRCodeInput'
import QrCodeResponse from '../components/QRCodeResponse'

export default {
  name: 'HomeView',

  components: {
    QrCodeInput,
    QrCodeResponse
  },

  data: function () {
    return {
      qrCodeText: ''
    }
  },

  methods: {
    sendQRCode (qrCode) {
      this.qrCodeText = qrCode
    }
  }
}
</script>
