<template>
  <button type="button" @click="checkChild">자식 컴포넌트 데이터 조회</button>
  <child-component5 ref="child_component" />
</template>
<script>
import ChildComponent5 from "@/members/sw/views/ChildComponent5.vue";

export default {
  components: {ChildComponent5},
  computed: {
    msg() {
      return this.$refs.child_component.msg;
    },
  },
  methods: {
    checkChild() {
      alert(this.msg);
    },
  }
}
</script>
