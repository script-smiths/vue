<template>
  <div>
    <input v-model="message" placeholder="메시지를 입력하세요" />
    <p>입력한 메시지: {{ message }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: ''
    }
  }
}
</script>
