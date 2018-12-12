<template>
    <div class="box">
        <router-link to="/hello">
          <button>Ckerop</button>
        </router-link>
    </div>
</template>

<script>
import './lok.js'
export default {
    mounted () {
        function d (name , age){
            //console.log(this,'----this')
            this.name = name
            this.age = age
        }
        let o = new d('lp',90)
        //console.log(d.prototype,'------d')
        //console.log(o.__proto__);
        //console.log(o.name,'------o')
        let a = () => {
            //console.log(this,'-----a -- this')
        }
        a()
    }
}
</script>

