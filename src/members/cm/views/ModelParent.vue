<template>
    <div>
      <h2>부모 컴포넌트</h2>
      <ModelInput v-model="userInput" />
      <p>입력된 내용: {{ userInput }}</p>
    </div>
  </template>
  
  <script>
  import ModelInput from '../components/ModelInput.vue';
  
  export default {
    components: {
      ModelInput
    },
    data() {
      return {
        userInput: ''
      };
    }
  };
  </script>
  