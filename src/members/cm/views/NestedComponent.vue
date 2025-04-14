<template>
    <div>
        <PageTitle @send-message="sendMessage" ref="childComp" :title="title" />
        <button type="button" @click="checkChild">자식 컴포넌트 데이터 조회</button>
    </div>
</template>

<script>
    import PageTitle from '../components/PageTitle.vue';
    export default {
        components: {PageTitle}, // 현재 컴포넌트에서 사용할 컴포넌트 등록
        computed: {
            msg(){
                return this.$refs.childComp.msg;
            }
        },
        data(){
            return {
                title: "동적 페이지 타이틀"
            }
        },
        methods: {
            checkChild(){
                alert(this.msg);
            }
        }
    
    }
</script>

<page-title: title="title" />