<template>
  <div class="app-layout">
    <!-- 상단 헤더 -->
    <header class="app-header">
      <div class="header-wrapper">
        <!-- 로고 (사이드바 폭과 정렬) -->
        <div class="logo-area">
          <h1 class="logo">📚 Vue Study</h1>
        </div>

        <!-- 탭 (사이드바 끝나는 지점부터 시작) -->
        <div class="tabs-area">
          <span
            :class="['tab', { active: active === 'cm' }]"
            @click="active = 'cm'"
          >CM</span>
          <span
            :class="['tab', { active: active === 'sw' }]"
            @click="active = 'sw'"
          >SW</span>
        </div>
      </div>
    </header>

    <!-- 본문 영역 -->
    <div class="app-body">
      <!-- 왼쪽 메뉴 -->
      <aside class="sidebar">
        <component :is="menuComponent" />
      </aside>

      <!-- 오른쪽 본문 -->
      <main class="main-content">
        <router-view />
      </main>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, watch } from 'vue'
import { useRouter } from 'vue-router'
import CmMenu from '@/members/cm/components/CmMenu.vue'
import SwMenu from '@/members/sw/components/SwMenu.vue'

const router = useRouter()

// 탭 상태
const active = ref('cm') // 기본값은 cm

// 마운트 시 localStorage에서 불러오기
onMounted(() => {
  const saved = localStorage.getItem('activeTab')
  if (saved === 'cm' || saved === 'sw') {
    active.value = saved
  } else {
    router.push('/cm') // ← 기본 경로
  }
})

// 탭이 바뀔 때 localStorage에 저장
watch(active, (newVal) => {
  localStorage.setItem('activeTab', newVal)
  router.push(`/${newVal}`)
})

const menuComponent = computed(() =>
  active.value === 'cm' ? CmMenu : SwMenu
)
</script>


<style scoped>
/* 전체 앱 레이아웃 */
.app-layout {
  display: flex;
  flex-direction: column;
  height: 100vh;
  font-family: 'Segoe UI', sans-serif;
}

/* 상단 헤더 */
.app-header {
  background-color: #2c3e50;
  color: white;
  height: 64px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #444;
}

/* 헤더 내부 정렬 */
.header-wrapper {
  display: flex;
  flex-direction: row;
  width: 100%;
}

/* 로고 왼쪽 정렬 (사이드바와 맞춤) */
.logo-area {
  width: 240px;
  display: flex;
  align-items: center;
  padding-left: 1.5rem;
}

.logo {
  font-size: 1.5rem;
  font-weight: bold;
}

/* 탭 오른쪽 정렬 (사이드바 다음부터 시작) */
.tabs-area {
  flex: 1;
  display: flex;
  align-items: center;
  gap: 1rem;
  padding-left: 2rem;
}

/* 탭 스타일 */
.tab {
  font-size: 1.1rem;
  font-weight: bold;
  padding: 0.4rem 1rem;
  border-radius: 6px;
  cursor: pointer;
  background-color: transparent;
  transition: all 0.2s ease;
  border: 2px solid transparent;
}

.tab:hover {
  background-color: rgba(255, 255, 255, 0.1);
}

.tab.active {
  background-color: white;
  color: #2c3e50;
  border: 2px solid #fff;
}

/* 전체 본문 영역 */
.app-body {
  display: flex;
  flex: 1;
}

/* 왼쪽 사이드바 */
.sidebar {
  width: 240px;
  background-color: #f8f9fa;
  border-right: 1px solid #ddd;
  padding: 1rem;
  overflow-y: auto;
}

/* 오른쪽 본문 */
.main-content {
  flex: 1;
  padding: 2rem;
  background-color: #ffffff;
}
</style>