<template>
  <div>
    <input type="text" v-model="Color" placeholder="big, small, red 등 입력해봐" />
    <p :style="textStyle">Hello, Vue!</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      Color: "", // 사용자의 입력값
    };
  },
  computed: {
    textStyle() {
      // 입력값에 따라 스타일 변경
      let fontSize = "16px";
      let color = "black";

      if (this.Color === "big") {
        fontSize = "32px";
      } else if (this.Color === "small") {
        fontSize = "12px";
      }

      if (this.Color === "red") {
        color = "red";
      } else if (this.Color === "blue") {
        color = "blue";
      }

      return {
        fontSize,
        color,
      };
    },
  },
};
</script>
