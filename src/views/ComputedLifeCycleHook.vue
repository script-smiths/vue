<template>
  <div>
    <p>{{ fullName }}</p>
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
      console.log('computed fullName 실행');
      return `${this.firstName} ${this.lastName}`;
    }
  },
  mounted() {
    console.log('mounted');
  }
}
</script>
