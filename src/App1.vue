<template lang="">
  <div v-for="(user, index) in dataUser" :key="index" class="itemsUser">
    <span>{{ user.name }}</span>
    <span v-if="user.status === 'active'">User is Active </span>
    <span v-else>User is Inactive</span>
  </div>
  <div>
    <a
      :href="`https://google.com`"
      target="_blank"
      class="bg-yellow-100 p-2 mt-2 mx-auto"
      >Link to google</a
    >
  </div>
  <br />
  <button @click="toggleButton">Toggle Button</button>
</template>

<script lang="ts">
// this use option api
export default {
  name: 'App',
  data() {
    return {
      dataUser: [
        {
          name: 'user 1 with option api',
          status: 'active',
        },
        {
          name: 'user 2 with option api',
          status: 'pending',
        },
        {
          name: 'user 3 with option api',
          status: 'inactive',
        },
      ],
    };
  },
  methods: {
    toggleButton() {
      console.log('toggle button hit');
    },
  },
};
</script>

<style lang="css">
.itemsUser {
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
  padding: 10px;
  background-color: #2c3e50;
  gap: 10px;
}
</style>
