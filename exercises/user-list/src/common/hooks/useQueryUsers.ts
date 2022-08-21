import { ref, onMounted } from 'vue';
import { User } from '../models';
import { getUsers } from '../services/user';

const useQueryUsers = () => {
  const users = ref<User[]>([]);
  const page = ref(0);
  const hasNextPage = ref(true);

  onMounted(async () => {
    const usersPayload = await getUsers();
    users.value = usersPayload.users;
  });

  const load = async (sortBy: string) => {
    const usersPayload = await getUsers(page.value, sortBy);
    users.value = usersPayload.users;
  };

  const loadMore = async (sortBy: string) => {
    const usersPayload = await getUsers(page.value, sortBy);
    users.value = [...users.value, ...usersPayload.users];
    page.value += 1;
    if (users.value.length > usersPayload.total) {
      hasNextPage.value = false;
    }
  };

  return { users, loadMore, load, hasNextPage };
};

export default useQueryUsers;
