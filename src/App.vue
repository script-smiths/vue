<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/databinding">Data binding</router-link> |
    <router-link to="/databinding-html">DataBindingHtml</router-link> |
    <router-link to="/databinding-input-text">DataBindingInputText</router-link> |
    <router-link to="/databinding-input-number">DataBindingInputNumber</router-link> |
    <router-link to="/databinding-input-textarea">DataBindingInputTextarea</router-link> |
    <router-link to="/databinding-input-select">DataBindingInputSelect</router-link> |
    <router-link to="/databinding-input-checkbox">DataBindingInputCheckbox</router-link> |
    <router-link to="/databinding-input-checkbox2">DataBindingInputCheckbox2</router-link> |
    <router-link to="/databinding-input-radio">DataBindingInputRadio</router-link> |
    <router-link to="/databinding-input-attribute">DataBindingInputAttribute</router-link> |
    <router-link to="/databinding-input-button">DataBindingInputButton</router-link> |
    <router-link to="/databinding-class">DataBindingClass</router-link> |
    <router-link to="/databinding-class2">DataBindingClass2</router-link> |
    <router-link to="/databinding-style">DataBindingStyle</router-link> |
    <router-link to="/databinding-style2">DataBindingStyle2</router-link> |
    <router-link to="/databinding-list">DataBindingList</router-link> |
    <router-link to="/renderingvif">RenderingVIf</router-link> |
    <router-link to="/eventclick">EventClick</router-link> |
    <router-link to="/computed">Computed</router-link> |
    <router-link to="/computed2">Computed2</router-link> |
    <router-link to="/computed-lifecycle-hook">ComputedLifeCycleHook</router-link> |
    <router-link to="/watch">Watch</router-link> |
    <router-link to="/watch2">Watch2</router-link> |
    <router-link to="/computed-watch">ComputedAndWatch</router-link> |
  </nav>
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
<script setup lang="ts">
</script>
