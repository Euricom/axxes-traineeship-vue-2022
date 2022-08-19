<script setup lang="ts">
import { ref } from 'vue';

const counter = ref(0);
const handleClick = () => {
  counter.value++;
};
</script>

<template>
  <div class="container mx-auto">
    <h1 class="text-3xl">
      Hello VueJS
    </h1>
    <div class="flex gap-4">
      <button class="btn" :onClick="handleClick">
        Increment
      </button>
      Counter: {{ counter }}
    </div>
  </div>
</template>
