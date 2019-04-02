<template>

<div>
    <input v-model="message" type="text" placeholder="edit me">
<p>Message is: {{ message }}</p>
<h1>{{data.counter}}</h1>
<button v-on:click="counter+=1">Click me</button>

</div>



</template>


<script>

export default{
    name:'Form',
    props:{
        message:String,
        url:"https://www.facebook.com",
        
    }
}


</script>


