<template>
  <div class="grid-container">
    <div v-for="user in users" :key="user.id" class="card">
      <img :src="user.image" class="card-img-top avatar" />
      <div class="card-body">
        <h5 class="card-title">{{ user.firstName }} {{ user.lastName }}</h5>
        <dl class="row">
          <dt class="col-sm-3">ID</dt>
          <dd class="col-sm-8">{{ user.id }}</dd>
          <dt class="col-sm-3">Age</dt>
          <dd class="col-sm-8">{{ user.age }}</dd>
          <dt class="col-sm-3">Email</dt>
          <dd class="col-sm-8">{{ user.email }}</dd>
        </dl>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import useQueryUsers from './common/hooks/useQueryUsers';

export default defineComponent({
  components: {},
  setup() {
    const { users } = useQueryUsers();
    return {
      users,
    };
  },
});
</script>

<style scoped>
.grid-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-gap: 10px;
  margin: 10px;
}
</style>
