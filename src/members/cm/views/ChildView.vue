<template>
    <h2>{{ test }}</h2>
</template>

<script>
    export default{
        props: {
            test: {
                type:String,
                required:true
            }
        }
    }
</script>