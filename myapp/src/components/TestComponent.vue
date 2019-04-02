<template>
<div>
    <h1>This is the test component</h1>

    <h2> {{ test }} </h2>
    <h3>This is also a TestComponent </h3>
</div>
</template>


<script>

export default {
    name: 'TestComponent',
    props:{
        test:String,
    }
}


</script>