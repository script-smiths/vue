<template>
  <div>
    <img v-bind:src="imageUrl" alt="고양이" width="200" />
    <p>이미지 경로: {{ imageUrl }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      imageUrl: 'https://picsum.photos/200'
    }
  }
}
</script>
