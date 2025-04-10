<template>
  <div>
    <input v-model="firstName" placeholder="이름" />
    <input v-model="lastName" placeholder="성" />

    <p>전체 이름: {{ fullName }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      firstName: '',
      lastName: ''
    }
  },

  // ✅ 파생된 값: fullName
  computed: {
    fullName() {
      return `${this.firstName} ${this.lastName}`;
    }
  },

  // ✅ fullName이 바뀔 때 API 호출 또는 로그 출력
  watch: {
    fullName(newValue, oldValue) {
      console.log(`이름이 '${oldValue}'에서 '${newValue}'로 바뀌었습니다.`);

      // 가상의 API 호출 (실제로는 axios 사용 가능)
      // axios.post('/api/log', { fullName: newValue });
    }
  }
}
</script>
