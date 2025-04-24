<template>
    <div>
        <EmitChild :user-name="name" @childMessage="handleChildMessage" />
    </div>
    <div>
        <h1>{{ childMessage }}</h1>
    </div>
</template>

<script>
import EmitChild from './EmitChild.vue';
export default {
    components: {
        EmitChild
    },
    data() {
        return {
            name:'난 부모다',
            childMessage: "",
        }
    },
    methods: {
        handleChildMessage(data){
            this.childMessage = data;
        }
    }
}
</script>