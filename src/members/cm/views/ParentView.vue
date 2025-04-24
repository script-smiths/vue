<template>
    <div>
        <ChildView :test="name"/>
    </div>
</template>
<script>
    import ChildView from './ChildView.vue';

    export default {
        component : {
            ChildView
        },
        data() {
            return {
                name:"부모의 데이터"
            }
        }
    }
</script>