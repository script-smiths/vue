<template>
  <div>
    <p>Full Name: {{ fullName }}</p>
    <input v-model="fullName" placeholder="전체 이름 입력" />
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
    fullName: {
      // getter
      get() {
        return `${this.firstName} ${this.lastName}`;
      },
      // setter
      set(newValue) {
        const names = newValue.split(' ');
        this.firstName = names[0] || '';
        this.lastName = names[1] || '';
      }
    }
  }
}
</script>
