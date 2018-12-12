<template>
    <div class="box">
        <div class="top"></div>
        <div class="ww">
                    <div class="cen" ref="line" v-on:click="Cen">
        </div> <p class="p" ref="p"></p>
        </div>
        <div class="num" ref="nums"></div>
        <div class="botton"></div>
        
    </div>
</template>
<script>
export default {
    data () {
       return {
           n : 1
       }
    },
    methods: {
       Cen:function(e){
           console.log(e.target.innerHTML)
                   this.n=e.target.innerHTML
                   let m = this.n * 45 -32
                   this.$refs.p.style.left=m + 'px';
                   console.log(this.n,'----n')
                   //传
                   this.$emit('Censd',this.n)
       }
    },
    mounted (){
        // let W = this.$refs.line.offsetWidth;
        // let H = this.$refs.line.offsetHeight;
        // let Hn = this.$refs.nums.offsetHeight;
        let nhtml=''
        for (var i=0;i<10;i++)
        {
            nhtml += `<span class="nspan" style=" width : 45px ;">${i+1}</span>`
        }
        this.$refs.nums.innerHTML=nhtml;

        let chtml=''
        for (var i=0;i<10;i++)
        {
            chtml += `<span class="cspan" style=" color : #fff ; width : 45px ; height : 30px">${i+1}</span>`
        }
        this.$refs.line.innerHTML=chtml;
    },
    
}
</script>
<style scoped>
.box{
    width: 500px;
    height: 100px;
    border: solid 1px #999;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-around;
}
.top,.botton{
    width: 100%;
    background: #eee;
    height: 20px;
}
.cspan{
    display: block;
    width: 20px;
    height: 30px;
    color: red;
}
.cen{
    width: 450px;
    height: 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.ww{
    position: relative;
    width: auto;
    height: auto;
}
.p{
    position: absolute;
    left:15px;
    top:-16px;
    width: 20px;
    height: 30px;
    background: #999;
    border-radius: 2px;
    z-index: 900;
}
.num{
    width: 450px;
    height: 10px;
    display: flex;
    justify-content: space-around;
    align-items: center;
}
</style>

