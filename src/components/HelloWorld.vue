<template>
  <div class="hello">
     <Local v-on:Censd="Click"></Local>
  </div>
</template>

<script>
import Local from './local'
export default {
  components: {
    Local
  },
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
      methods : {
      Click:function(n){
         console.log(n,'------fu')//接
      }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
