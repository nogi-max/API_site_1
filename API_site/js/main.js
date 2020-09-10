new Vue({
    el: '#appA',
    data () {
      return {
        info: null
      }
    },
    mounted () {
      axios
      .get('https://api.coindesk.com/v1/bpi/currentprice.json')
      .then(response => (this.info = response.data.bpi))
      .catch(error => console.log(error))
    },
    filters: {
        currencydecimal (value) {
          return value.toFixed(2)

        }
      }

  
    })


    new Vue({
      el: '#appB',
      data () {
        return {
          info: null
        }
      },
      mounted () {
        axios
          .get('https://bitflyer.com/api/echo/price')
          .then(response => (this.info = response.data))
      }
    })
  