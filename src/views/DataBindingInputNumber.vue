<template>
  <div>
    <input type="number" v-model.number="age" />
    <p>입력한 나이: {{ age }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      age: null
    }
  }
}
</script>
