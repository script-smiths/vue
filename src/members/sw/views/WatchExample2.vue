<template>
  <input v-model="age" type="number" />
  <p>콘솔에서 확인</p>
</template>

<script>
export default {
  data() {
    return {
      age: 18
    }
  },
  watch: {
    age(newValue) {
      if (newValue >= 19) {
        console.log('성인입니다!');
      }
    }
  }
}
</script>
