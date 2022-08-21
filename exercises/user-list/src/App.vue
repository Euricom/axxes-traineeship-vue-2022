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

<script lang="ts">
import { defineComponent } from 'vue';
import UserList from './UserList.vue';
import UserGrid from './UserGrid.vue';

type Mode = 'table' | 'grid';

export default defineComponent({
  name: 'App',
  components: {
    UserList,
    UserGrid,
  },
  data() {
    return {
      mode: 'table' as Mode,
    };
  },
  methods: {
    handleMode() {
      this.mode = this.mode === 'table' ? 'grid' : 'table';
    },
  },
});
</script>
