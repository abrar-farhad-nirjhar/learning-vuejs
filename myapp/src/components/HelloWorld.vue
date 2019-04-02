<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h1 v-text="test"></h1>
    <TestComponent  test="Inside the Hello World Component"/>
    
  </div>
</template>

<script>
import TestComponent from './TestComponent.vue';

// msg = "Hakuna Matata"


export default {
  name: 'HelloWorld',
  props: {
    msg: String,
    test: String,
    arr:[1,2,3,4],
    
  },
  components:{
    TestComponent
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

h1{
  color:red
}
</style>
