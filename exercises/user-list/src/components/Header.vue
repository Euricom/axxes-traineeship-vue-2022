<template>
  <th :class="{ pointer: !!props.sortBy }" @click="handleClick">
    <slot></slot><span v-show="sortBy && sortBy.includes(field)"><i :class="sortIconClass"></i></span>
  </th>
</template>

<script setup lang="ts">
import { computed } from 'vue';
const props = defineProps({
  field: { type: String, default: '' },
  sortBy: { type: String, default: '' },
});

const emit = defineEmits(['click']);

const sortIconClass = computed(() => {
  return props.sortBy.startsWith('-') ? 'bi bi-caret-down' : 'bi bi-caret-up';
});
const handleClick = () => {
  let sortAsc = !props.sortBy.startsWith('-');
  if (props.sortBy.includes(props.field)) {
    sortAsc = !sortAsc;
  }
  const field = `${sortAsc ? '' : '-'}${props.field}`;
  emit('click', field);
};
</script>

<style>
.pointer {
  cursor: pointer;
}
</style>
