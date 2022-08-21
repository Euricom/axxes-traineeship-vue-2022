# Exercise

> Refactor the vue-user-list by using composition API

Optional:

- Extract the infinite scroll behavior in custom hook

```js
useInfiniteScroll({
  enabled: true,
  onLoadMore: () => {
    // load the data here
  },
});
```

- Extract load more logic in custom hook

```js
const { users, loading, loadMore, hasNextPage } = useQueryUsers();
useInfiniteScroll({
  enabled: hasNextPage,
  onLoadMore: loadMore,
});
```
