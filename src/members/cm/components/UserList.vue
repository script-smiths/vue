<template>
    <div>
      <slot
        v-for="user in users"
        :user="user"
        :index="users.indexOf(user)"
        :key="user.id"
      ></slot>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        users: [
          { id: 1, name: '홍길동', age: 30 },
          { id: 2, name: '김철수', age: 25 },
          { id: 3, name: '이영희', age: 28 }
        ]
      };
    }
  };
  </script>
  