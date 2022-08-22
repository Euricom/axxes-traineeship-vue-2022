<script setup lang="ts">
import { ref } from 'vue';
import UserList from './components/UserList.vue';
import UserGrid from './components/UserGrid.vue';

type Mode = 'table' | 'grid';
const mode = ref<Mode>('table');

const handleMode = () => {
  mode.value = mode.value === 'table' ? 'grid' : 'table';
};
</script>

<template>
  <div class="container">
    <h1>My App</h1>
    <button class="btn btn-primary btn-sm" @click="handleMode">
      {{ mode === 'table' ? 'Grid View' : 'List View' }}
    </button>
    <UserList v-if="mode === 'table'" />
    <UserGrid v-else />
  </div>
</template>
