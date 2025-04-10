<template>
  <input v-model="age" type="number" />
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
