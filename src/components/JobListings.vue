<template>
  <section class="bg-blue-50 px-3 py-10">
    <div class="container-xl md:container m-auto">
      <h2 class="text-3xl font-bold text-green-500 mb-6 text-centerr">
        Browse Jobs
      </h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <JobListing
          v-for="(job, index) in jobs.slice(0, limit || jobs.length)"
          :key="job.id"
          :job="job"
        />
      </div>
    </div>
  </section>

  <section v-if="showButton" class="m-auto max-w-lg my-10 px-6">
    <a
      href="jobs.html"
      class="block bg-black text-white text-center py-4 px-6 rounded-xl hover:bg-gray-700"
      >View All Jobs</a
    >
  </section>
</template>
<script setup lang="ts">
import JobData from '../db/jobs.json';
import JobListing from './Fragment/JobListing.vue';

defineProps({
  limit: {
    type: Number,
    default: 3,
  },
  showButton: {
    type: Boolean,
    default: false,
  },
});

const jobs = JobData;
</script>
<style lang="scss"></style>
