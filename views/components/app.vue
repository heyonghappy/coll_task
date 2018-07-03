<template>
<div id='app'>
    <div>{{content}}</div>
    <router-view></router-view>
    <button @click="myClick">try</button>
</div>
  
</template>

<script lang="ts">
export default {
    data(){
        return{
            content:'index'
        }

    },
    computed:{

    },
    mouted(){
        console.log(this.content)

    },
    methods:{
        myClick(){
            console.log(this)
        }

    }
  
}
</script>
