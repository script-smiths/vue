<template>
    <div>
        <h2>상품 계산기</h2>
        <label>
            가격:
            <input type="number" v-model.number="price" />
        </label>
        <br />
        <label>
            수량:
            <input type="number" v-model.number="quantity" />
        </label>
        <p>총 가격: {{ totalPrice }}</p>
        <p>이전 가격: {{ oldVal }}</p>
        <p>현재 가격: {{ price }}</p>
    </div>
</template>

<script>
export default {
    data() {
        return {
            price: 1000,
            quantity: 2
        };
    },
    computed: {
        // 👉 화면에 보여줄 계산된 값
        totalPrice() {
            return this.price * this.quantity;
        }
    },
    watch: {
        // 👉 price가 바뀔 때마다 실행되는 반응형 함수
        price(newVal, oldVal) {
            this.oldVal = oldVal;
        }
    }
};
</script>

<style scoped>
input {
    margin: 5px;
}
</style>