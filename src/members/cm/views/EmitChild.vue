<template>
    <div>
        <h1>{{ userName }}</h1>
        <button type="button" @click="sendToParent">부모에게 메시지 보내기</button>
    </div>
</template>
<script>
    export default {
        props: {
            userName: {
                type:String,

            }
        },
        methods: {
            sendToParent(){
                this.$emit('childMessage',"난 자식이다");
            }
        }
    }
</script>