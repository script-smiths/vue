<!-- src/members/sw/components/SwMenu.vue -->

<template>
    <nav class="sw-menu">
      <h3>🧑‍💻 SW 메뉴</h3>
      <ul>
        <li><router-link to="/sw">Home</router-link></li>
        <li><router-link to="/sw/about">About</router-link></li>
        <li><router-link to="/sw/databinding">Data Binding</router-link></li>
        <li><router-link to="/sw/databinding-html">DataBinding Html</router-link></li>
        <li><router-link to="/sw/databinding-input-text">Input Text</router-link></li>
        <li><router-link to="/sw/databinding-input-number">Input Number</router-link></li>
        <li><router-link to="/sw/databinding-input-textarea">Textarea</router-link></li>
        <li><router-link to="/sw/databinding-input-select">Select</router-link></li>
        <li><router-link to="/sw/databinding-input-checkbox">Checkbox</router-link></li>
        <li><router-link to="/sw/databinding-input-checkbox2">Checkbox2</router-link></li>
        <li><router-link to="/sw/databinding-input-radio">Radio</router-link></li>
        <li><router-link to="/sw/databinding-input-attribute">Attribute</router-link></li>
        <li><router-link to="/sw/databinding-input-button">Button</router-link></li>
        <li><router-link to="/sw/databinding-class">Class</router-link></li>
        <li><router-link to="/sw/databinding-class2">Class2</router-link></li>
        <li><router-link to="/sw/databinding-style">Style</router-link></li>
        <li><router-link to="/sw/databinding-style2">Style2</router-link></li>
        <li><router-link to="/sw/event-click">EventClick</router-link></li>
        <li><router-link to="/sw/event-change">EventChange</router-link></li>
        <li><router-link to="/sw/computed-example">Computed</router-link></li>
        <li><router-link to="/sw/computed-example2">Computed2</router-link></li>
        <li><router-link to="/sw/computed-and-watch-example">ComputedAndWatch</router-link></li>
        <li><router-link to="/sw/watch-example">Watch</router-link></li>
        <li><router-link to="/sw/watch-example2">Watch2</router-link></li>
        <li><router-link to="/sw/databinding-list2">DataBindingList2</router-link></li>
      </ul>
    </nav>
  </template>

  <style scoped>
  .sw-menu {
    padding: 20px;
    border-right: 1px solid #ccc;
    height: 100%;
    overflow-y: auto;
  }
  .sw-menu h3 {
    margin-bottom: 10px;
  }
  .sw-menu ul {
    list-style: none;
    padding: 0;
  }
  .sw-menu li {
    margin-bottom: 8px;
  }
  .sw-menu a {
    text-decoration: none;
    color: #2c3e50;
    font-weight: bold;
  }
  .sw-menu a.router-link-exact-active {
    color: #42b983;
  }
  </style>
