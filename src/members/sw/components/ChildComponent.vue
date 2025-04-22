<template>
  <div>
    <p>부모로부터 받은 메시지: {{ text }}</p>
  </div>
</template>

<script>
export default {
  props: {
    text: String,
  },
};
</script>
