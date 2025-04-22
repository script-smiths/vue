<template>
  <ChildComponent ref="child_component" />
</template>
<script>
import ChildComponent from "@/members/sw/views/ChildComponent.vue";

export default {
  components: {ChildComponent},
  mounted() {
    this.$refs.child_component.$refs.btn.click();
  }
}
</script>
