<template>
  <div >
    <img alt="Vue logo" src="./assets/logo.png">
    <h1>{{title}}</h1>
    <!-- <Ninja /> -->
    <Ninja />
    <button class="btn btn-success">Button</button>
  </div>
</template>

<script>
import Ninja from './components/Ninja.vue';

export default {
  name: 'app',
  components: {
    Ninja
  },
  data(){
    return{
      title:"Ninja App"
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
