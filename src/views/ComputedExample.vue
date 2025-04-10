<template>
  <div>
    <p>원래 이름: {{ firstName }} {{ lastName }}</p>
    <p>전체 이름 (computed): {{ fullName }}</p>

    <input v-model="firstName" placeholder="이름" />
    <input v-model="lastName" placeholder="성" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      firstName: '홍',
      lastName: '길동'
    }
  },
  computed: {
    fullName() {
      return `${this.firstName} ${this.lastName}`;
    }
  }
}
</script>
