<template>
    <div>
      <p>당신이 좋아하는 언어는?</p>
  
      <label>
        <input type="radio" v-model="language" :value="Item1">
        JavaScript
      </label><br>
  
      <label>
        <input type="radio" v-model="language" :value="Item2">
        Python
      </label><br>
  
      <label>
        <input type="radio" v-model="language" :value="Item3">
        Java
      </label>
  
      <p>선택한 언어: {{ language }}</p>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        Item1:'java',
        Item2:'c++',
        Item3:'vue',
        language: '' // 아무것도 선택되지 않은 초기 상태
      }
    }
  }
  </script>
  