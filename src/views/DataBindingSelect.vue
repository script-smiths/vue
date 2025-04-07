<template>
  <div>
    <select v-model="selected">
      <option disabled value="">선택하세요</option>
      <option>사과</option>
      <option>바나나</option>
      <option>체리</option>
    </select>
    <p>선택한 과일: {{ selected }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selected: ''
    }
  }
}
</script>
