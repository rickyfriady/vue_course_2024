<template>
  <Hero />
  <HomeCard />
  <JobListings :limit="3" />
</template>
<script setup lang="ts">
import Hero from '@/components/Hero.vue';
import HomeCard from '@/components/HomeCard.vue';
import JobListings from '@/components/JobListings.vue';
</script>
<style lang=""></style>
