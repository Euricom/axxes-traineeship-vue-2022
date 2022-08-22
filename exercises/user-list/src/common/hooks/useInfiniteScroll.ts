import { ref, onMounted, onUnmounted, Ref } from 'vue';

interface InfiniteScrollOptions {
  enable: Ref<boolean>;
  onLoadMore: () => Promise<void>;
}
export const useInfiniteScroll = (options: InfiniteScrollOptions) => {
  const loading = ref(false);

  const loadMore = () => {
    loading.value = true;
    options.onLoadMore().finally(() => {
      loading.value = false;
    });
  };

  const handleScroll = () => {
    const scrollTop = Math.max(window.pageYOffset, document.documentElement.scrollTop, document.body.scrollTop);
    if (scrollTop + window.innerHeight + 20 > document.documentElement.offsetHeight) {
      if (options.enable.value) {
        loadMore();
      }
    }
  };

  onMounted(() => {
    window.addEventListener('scroll', handleScroll);
    loadMore();
  });

  onUnmounted(() => {
    // make sure you cleanup the event listeners
    window.removeEventListener('scroll', handleScroll);
  });

  return {
    loading,
    loadMore,
  };
};
