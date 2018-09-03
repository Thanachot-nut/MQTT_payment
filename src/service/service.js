import Vue from 'vue'
import axios from 'axios'
import Vueaxios from 'vue-axios'

Vue.use(Vueaxios, axios)

// const URL = 'http://venus.nopadol.com'

export default {
  callqrcode (data, success, error) {
    console.log("ส่ง JSON payment"+JSON.stringify(data))
    Vue.axios.post('https://cloud.paybox.work/v1/payment/qrpay/open' , JSON.stringify(data),{
      headers: {
          'Content-Type': 'application/json', 
          'x-access-token': '246aa13b23f64f67be1ab463de0dcb72',
      }
    },
  ).then(
      (response) => {
        success(response.data)
      },
      (response) => {
        error(response)
      })
  },
  
}