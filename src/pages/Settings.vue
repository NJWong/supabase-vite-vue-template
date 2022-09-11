<template>
  <div>
    <h1>Settings</h1>
    <p>User: {{ user?.id }}</p>
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { userStore } from '../stores/user';

const store = userStore()
const { user } = storeToRefs(store)
</script>