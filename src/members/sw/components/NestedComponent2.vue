<template>
  <div>
    <input v-model="message" placeholder="메시지를 입력하세요" />
    <ChildComponent :text="message" />
  </div>
</template>

<script>
import ChildComponent from './ChildComponent.vue';

export default {
  components: {
    ChildComponent,
  },
  data() {
    return {
      message: '안녕!',
    };
  },
};
</script>
