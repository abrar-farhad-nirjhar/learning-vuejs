<template>
    <div>
        <ul>
            <li v-for="(index,ninja) in ninjas"  v-bind:key="index">Name of ninja: {{ninja}}</li>
        </ul>
    
    </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'Ninja',
  
  data(){
    return{
        ninjas: ['Abrar', 'Farhad', 'Nirjhar']
    }
  },
  methods:{
    
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
