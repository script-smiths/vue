<template>
  <div>
    <textarea v-model="content" placeholder="내용을 입력하세요" rows="5" cols="30"></textarea>
    <p>입력한 내용:</p>
    <pre>{{ content }}</pre>
  </div>
</template>

<script>
export default {
  data() {
    return {
      content: ''
    }
  }
}
</script>
