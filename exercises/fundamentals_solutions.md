# Vue Fundamentals - Exercises Solutions

## Text Toggle

```html
<template>
  <span :class="!showText ? 'hidden' : ''">
    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.
  </span>
  <hr />
  <span v-show="showText">
    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.
  </span>
  <hr />
  <span v-if="showText">
    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.
  </span>
  <hr />
  <button @click="handleToggle">Toggle text</button>
</template>
<script>
  export default {
    data() {
      return {
        showText: true,
      };
    },
    methods: {
      handleToggle() {
        this.showText = !this.showText;
      },
    },
  };
</script>
```

## Todo List

Create a small TODO list

- Show list of tasks
- Text `input` to enter a task
- Press `enter` key to add the task
- Add button (per task) to remove task
- Add button (per task) to mark done
- Show the total count of tasks
- Apply some style

```html
<template>
  <div class="container">
    <h1>My Super TODO app</h1>
    <div class="section">
      <p>New task:</p>
      <input v-model="todoInput" type="text" @keyup.enter="addTodo" />
    </div>
    <div v-if="todos.length > 0" class="section">
      <p>My List:</p>
      <ul>
        <li v-for="todo in todos" :key="todo.id">
          <span :class="{ done: todo.completed }">{{ todo.text }}</span>
          <a class="link" href="#" @click="remove(todo)">x</a>
          <a class="link" href="#" @click="markAsDone(todo)">done</a>
        </li>
      </ul>
    </div>
    <div class="section">Total items: <span>{{ total }}</span></div>
  </div>
</template>
<script>
  import { computed, ref } from 'vue';

  export default {
    name: 'App',
    components: {
      Hello,
    },
    setup() {
      const todoInput = ref('');
      const todos = ref([
        { id: 1, text: 'coding', completed: false },
        { id: 2, text: 'eating', completed: false },
      ]);
      const total = computed(() => {
        return todos.value.length;
      });

      const addTodo = () => {
        const todo = {
          id: todos.value.reduce((acc, item) => Math.max(acc, item.id), 0) + 1,
          text: todoInput.value,
          completed: false,
        };
        todoInput.value = '';
        todos.value.push(todo);
      };

      const remove = (todo) => {
        todos.value = todos.value.filter((item) => item.id !== todo.id);
      };

      const markAsDone = (todo) => {
        const todoItem = todos.value.find((item) => item.id === todo.id);
        if (todoItem) {
          todoItem.completed = true;
        }
      };

      return { todoInput, todos, total, addTodo, remove, markAsDone };
    },
  };
</script>

<style>
  #app {
    margin-top: 60px;
  }
  .done {
    text-decoration: line-through;
  }
  button {
    margin: 5px;
  }
  .link {
    margin: 5px;
  }
  .section {
    margin: 10px;
  }
</style>
```

## Alert

<!-- prettier-ignore-->
```html
<!-- App.vue -->
<template>
  <Alert dismissable :show="!!alertMessage" @dismissed="handledAlertClosed">
    {{ alertMessage }}
  </Alert>
  <Alert variant="info"> Don't forget to register </Alert>
  <Alert variant="success"> Update was successfull </Alert>
  <button @click="handleShowAlert">Show Alert Again</button>
</template>

<script>
import { ref } from 'vue';
import Alert from './components/Alert.vue';

export default {
  components: {
    Alert,
  },
  setup() {
    const alertMessage = ref('Alert: We have a problem.');
    const handledAlertClosed = () => {
      console.log('alert closed');
      alertMessage.value = '';
    };
    const handleShowAlert = () => {
      alertMessage.value = 'Yet, another problem occurred, Help!';
    };
    return { alertMessage, handledAlertClosed, handleShowAlert };
  },
};
</script>
```

```html
<!-- Alert.vue -->
<template>
  <div v-if="props.show" class="alert alert-dismissible" :class="alertClassName" role="alert">
    <slot></slot>
    <button v-if="dismissable" type="button" class="btn-close" @click="handleClose()"></button>
  </div>
</template>

<script>
  const alertVariants = {
    success: 'alert-success',
    info: 'alert-info',
    warn: 'alert-warning',
    error: 'alert-danger',
  };

  export default {
    name: 'Alert',
    props: {
      variant: {
        type: String,
        default: 'warn',
      },
      show: {
        type: Boolean,
        default: true,
      },
      dismissable: {
        type: Boolean,
        default: false,
      },
    },
    emits: ['dismissed'],
    setup(props, context) {
      const alertClassName = alertVariants[props.variant];
      const handleClose = () => {
        context.emit('dismissed');
      };

      return { alertClassName, handleClose, props };
    },
  };
</script>
```
