<script setup>
import { reactive, ref, watch } from 'vue';

const myClass = 'box';
</script>

<template>
  <div class="container m-3" :class="myClass">
    <button class="btn btn-primary">
      Click
    </button>
  </div>
</template>

<style>
.box {
  background-color: aquamarine;
}
</style>
