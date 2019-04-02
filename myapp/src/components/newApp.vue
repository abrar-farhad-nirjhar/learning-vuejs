<template>
<div>
    <h1>This is the new App component </h1>
    <HelloWorld msg="This is the newApp Hello world" test="This is the newApp test" />
    <Form />
</div>

</template>


<script>
import HelloWorld from './HelloWorld.vue';
import Form from './Form.vue';


export default {
    name:'newApp',
    components:{
        HelloWorld,
        Form
    }
}




</script>