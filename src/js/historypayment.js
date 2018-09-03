export default {
    name: 'history',
    data() {
      return {
        user: '',
      }
    },
  
    methods: {
      goto(historz) {
        this.$router.push(historz)
      },
    },
    mounted () {
      
    }
  }