import api from '../service/service.js'
import qrcodeVue from 'qrcode-vue'
import axios from 'axios'
import Vueaxios from 'vue-axios'
import Vue from 'vue'

import VueQRCodeComponent from 'vue-qrcode-component'
Vue.component('qr-code', VueQRCodeComponent)



Vue.use(Vueaxios, axios)
var client = require('emitter-io').connect()

export default {
  name: 'index',
  data() {
    return {
      user: '',
      size: 128,
      bgColor: '#fff',
      fgColor: '#000',
      value: 'https://github.com/l-ll/qrcode-vue',
      price: 0,
      qrcodebase64: '',
      qrcode: '',
      count: 60,
    }
  },
  components: {
    qrcodeVue
  },
  methods: {
    goto(historz) {
      this.$router.push(historz)
    },
    runtime() {
      if (this.price <= 0) {
        alert('กรุณากรอกจำนวนเงิน')
        return
      }
      $('#myModal').modal({
        backdrop: false
      })

      console.log('call apix')
      var resultbath = this.convertbath(this.price)
      console.log('resultbath:' + (resultbath))
      var payload = {
        vending_uuid: "testing",
        order_uuid: "testing123",
        amount: this.price
      }
      console.log(JSON.stringify(payload))
      api.callqrcode(payload,
        (result) => {
          if (result.status === 'success') {
            console.log(result)
            console.log('channel sub:' + result.sub_channel)
            this.qrcode = result.qr_tag
            console.log("qrimage" + result.qr_image)

            this.qrcodebase64 = 'data:image/png;base64,' + result.qr_image

            client.subscribe({
              key: "aArZ5ThGcFCRJ0UumrK6YcssjRhAmEKD",
              channel: result.sub_channel
            });
            //            client.subscribe({
            //    key: "0iwpcieX04lsVwVCp-cFYNrB5hf-JPP6",
            //    channel: "testtunnelnx/"
            //  });
          }
        },
        (error) => {
          console.log(error)
        })

      var test = setInterval(function () {
        $("#counter").html(this.count--);
        if (this.count == 0) {
          swal("Time Out!", "Try Again!", "error");
          window.clearInterval(test);
        }
      }.bind(this), 1000);
      // if(this.count == 0){

      //   return
      // }
      // console.log(test)
    },
    convertbath(val) {
      var x = numeral(val).format('0,0.00');
      return x
    },
    button_clearvalue() {
      document.getElementById('fname').value = 0;
    },
    removetime() {
      location.reload();
    },
    myFunction(cccc) {
      var x = document.getElementById("fname");
      var string = numeral(x.value).format('0,0');
      x.value = string;
    },
  },
  mounted() {
    this.button_clearvalue()
    this.myFunction()

    // client.subscribe({
    //   key: "0iwpcieX04lsVwVCp-cFYNrB5hf-JPP6",
    //   channel: "testtunnelnx/"
    // });
    // on every message, print it out

    // client.on('message', function(msg){
    //   var msg = msg.asObject()
    //   console.log(msg[0])
    //    if(msg[0].status == "success"){
    //     swal("Success Payment!", "Total : " + msg[0].total + " Bath", "success");
    //    }
    //   if(msg[0].status == 'error'){
    //     swal("Error Payment!", "Try Again !!!", "error");
    //   }
    // })

    client.on('message', function (msg) {
      var msg = msg.asObject()
      console.log(JSON.stringify(msg))
      if (msg.status === 'success') {
        if (msg.message === 'payment success') {
          swal("Success Payment!", " วันที่ : " + msg.confirmed_at.substring(0, 19), "success");
        }
      } else {
        swal("Error Payment!", "Try Again !!!", "error");
      }
    })

  }
}