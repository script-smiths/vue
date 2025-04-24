<template>
    <div class="card" style="border: 1px solid #ccc; padding: 10px; margin: 10px;">
      <header>
        <slot name="header"></slot>
      </header>
  
      <main>
        <slot></slot> <!-- 기본 슬롯 (이름 없음) -->
      </main>
  
      <footer>
        <slot name="footer"></slot>
      </footer>
    </div>
  </template>
  