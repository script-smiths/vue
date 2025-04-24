<template>
    <SlotModalLayout>
        <template #header>
            <h3>📌 카드 헤더입니다</h3>
        </template>

        <p>이건 기본 슬롯 콘텐츠예요 (본문)</p>

        <template #footer>
            <small>© 2025 MyCompany</small>
        </template>
    </SlotModalLayout>
</template>

<script>
import SlotModalLayout from './SlotModalLayout.vue';

export default {
    components: { SlotModalLayout }
}
</script>