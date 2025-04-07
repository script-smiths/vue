<template>
  <H1>
    Hello, {{title}}!
  </H1>
</template>
<script>
export default {
  name: ``,   // 컴포넌트 이름
  components: {},   // 다른 컴포넌트 import, 배열로 저장
  data() {     // html 과 자바스크립트 코드에서 사용할 데이터 변수 선언, this 를 통해 접근
    return {
      title: 'world',
    };
  },
  setup() {
  },    // 컴포지션 API
  created() {
  },   // 컴포넌트 생성되면 실행
  mounted() {
  },   // template에 정의된 html 코드가 랜더링된 후 실행
  unmounted() {
  },   // 컴포넌트에서 빠져나갈때 실행
  methods: {}  // 컴포넌트 내에서 사용할 메소드 정의, this 를 통해 접근
}
</script>
