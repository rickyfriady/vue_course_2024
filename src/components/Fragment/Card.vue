<template lang="">
  <div v-bind:class="`${bg} p-6 rounded-lg shadow-md`">
    <slot></slot>
  </div>
</template>
<script setup lang="ts">
defineProps({
  bg: {
    type: String,
    default: 'bg-gray-100',
  },
});
</script>
<style lang="scss"></style>
