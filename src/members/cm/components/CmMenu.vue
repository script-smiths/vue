<!-- src/members/cm/components/CmMenu.vue -->
<template>
    <nav class="cm-menu">
      <h3>👨‍💻 CM 메뉴!</h3>
      <ul>
        <li><router-link to="/cm">Home</router-link></li>
        <li><router-link to="/cm/databinding">Data Binding</router-link></li>
        <li><router-link to="/cm/databindinglist">Data BindingList</router-link></li>
      </ul>
    </nav>
  </template>
  
  <style scoped>
  .cm-menu {
    padding: 20px;
    border-right: 1px solid #ccc;
    height: 100%;
    overflow-y: auto;
  }
  .cm-menu h3 {
    margin-bottom: 10px;
  }
  .cm-menu ul {
    list-style: none;
    padding: 0;
  }
  .cm-menu li {
    margin-bottom: 8px;
  }
  .cm-menu a {
    text-decoration: none;
    color: #2c3e50;
    font-weight: bold;
  }
  .cm-menu a.router-link-exact-active {
    color: #42b983;
  }
  </style>
  