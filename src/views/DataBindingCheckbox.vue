<template>
  <div>
    <input type="checkbox" v-model="checked" />
    <p>체크 상태: {{ checked }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      checked: false
    }
  }
}
</script>
