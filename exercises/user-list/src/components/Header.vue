<template>
  <th :class="{ pointer: !!props.sortBy }" @click="handleClick">
    <slot></slot><span v-show="sortBy && sortBy.includes(field)"><i :class="sortIconClass"></i></span>
  </th>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';

export default defineComponent({
  props: {
    field: { type: String, default: '' },
    sortBy: { type: String, default: '' },
  },
  emits: ['click'],
  setup(props, { emit }) {
    const sortIconClass = computed(() => {
      return props.sortBy.endsWith('-') ? 'bi bi-caret-down' : 'bi bi-caret-up';
    });
    const handleClick = () => {
      let sortAsc = !props.sortBy.endsWith('-');
      if (props.sortBy.includes(props.field)) {
        sortAsc = !sortAsc;
      }
      emit('click', `${props.field}${sortAsc ? '' : '-'}`);
    };
    return {
      handleClick,
      sortIconClass,
      props,
    };
  },
});
</script>

<style>
.pointer {
  cursor: pointer;
}
</style>
