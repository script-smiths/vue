<template>
    <div>
      <h2>상품 가격 변경 감지!</h2>
  
      <label>
        가격:
        <input type="number" v-model.number="price" />
      </label>
  
      <p>이전 가격: {{ oldPrice }}</p>
      <p>현재 가격: {{ price }}</p>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        price: 1000,
        oldPrice: null
      };
    },
    watch: {
      price(newVal, oldVal) {
        this.oldPrice = oldVal;
      }
    }
  }
  </script>  