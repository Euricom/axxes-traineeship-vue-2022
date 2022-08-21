<template>
  <div class="list-container">
    <table id="infinite-list" class="table table-striped table-sm">
      <thead class="thead-light">
        <tr>
          <Header>Photo</Header>
          <Header>Id</Header>
          <Header field="firstName" :sort-by="sortBy" @click="handleSort">First Name</Header>
          <Header field="lastName" :sort-by="sortBy" @click="handleSort">Last Name</Header>
          <Header field="age" :sort-by="sortBy" @click="handleSort">Age</Header>
          <Header field="email" :sort-by="sortBy" @click="handleSort">Email</Header>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in users" :key="user.id">
          <td><img class="avatar" :src="user.image" /></td>
          <td>{{ user.id }}</td>
          <td>{{ user.firstName }}</td>
          <td>{{ user.lastName }}</td>
          <td>{{ user.age }}</td>
          <td>{{ user.email }}</td>
        </tr>
      </tbody>
    </table>
    <span v-show="loading">Loading...</span>
  </div>
  <!--
    <button v-show="hasNextPage" class="btn btn-primary btn-sm" @click="loadMore">LoadMore</button>
  -->
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import Header from './components/Header.vue';
import { useInfiniteScroll } from './common/hooks/useInfiniteScroll';
import useQueryUsers from './common/hooks/useQueryUsers';

export default defineComponent({
  components: {
    Header,
  },
  setup() {
    const sortBy = ref('name');
    const { users, loadMore, load, hasNextPage } = useQueryUsers();

    const { loading } = useInfiniteScroll({
      enable: hasNextPage,
      onLoadMore: () => {
        return loadMore(sortBy.value);
      },
    });

    const handleSort = (updatedSortBy: string) => {
      sortBy.value = updatedSortBy;
      load(sortBy.value);
    };

    return {
      sortBy,
      users,
      loading,
      handleSort,
    };
  },
});
</script>

<style scoped>
.avatar {
  width: 50px;
}
.list-container {
  margin: 5px;
}
</style>
