<template>
  <div :style="[baseStyle, emphasisStyle]">
    스타일 배열 바인딩 예제입니다!
  </div>
</template>

<script>
export default {
  data() {
    return {
      baseStyle: {
        color: 'white',
        backgroundColor: 'steelblue',
        padding: '10px'
      },
      emphasisStyle: {
        fontWeight: 'bold',
        fontSize: '20px'
      }
    }
  }
}
</script>
