<template>
    <UserList>
      <template #default="{ user, index }">
        <div style="margin: 5px; padding: 5px; border: 1px solid #ccc;">
          <strong>{{ index + 1 }}. {{ user.name }}</strong> - 나이: {{ user.age }}
        </div>
      </template>
    </UserList>
  </template>
  
  <script>
  import UserList from '../components/UserList.vue';
  
  export default {
    components: { UserList }
  };
  </script>
  