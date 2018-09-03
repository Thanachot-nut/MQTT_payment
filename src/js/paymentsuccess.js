export default {
    name: 'paymentsuc',
    data() {
      return {
        user: '',
      }
    },
    methods: {
      goto(historz) {
        this.$router.push(historz)
      }
    },
    mounted () {
      this.button_clearvalue()
      this.myFunction()
    }
  }