# Vue Fundamentals - Exercises Solutions

## Text Toggle

```html
<script setup>
import { ref } from 'vue';
const showText = ref(true);

const handleToggle = () => {
  showText.value = !showText.value;
};
</script>

<template>
  <p :class="!showText ? 'hidden' : ''">
    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.
  </p>
  <p v-show="showText">
    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.
  </p>
  <p v-if="showText">
    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.
  </p>
  <button @click="handleToggle">
    Toggle text
  </button>
</template>

<style>
  .hidden {
    display: none;
  }
</style>
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
<script setup>
import { computed, reactive, ref } from 'vue';

const todoInput = ref('');
const todos = reactive([
  { id: 1, text: 'coding', completed: false },
  { id: 2, text: 'eating', completed: false },
]);

const total = computed(() => {
  return todos.length;
});

const totalDone = computed(() => {
  return todos.reduce((acc, item) => item.completed ? acc + 1 : acc, 0);
});

const addTodo = () => {
  const todo = {
    id: todos.reduce((acc, item) => Math.max(acc, item.id), 0) + 1,
    text: todoInput.value,
    completed: false,
  };
  todoInput.value = '';
  todos.push(todo);
};

const remove = (todo) => {
  todos.value = todos.filter(item => item.id !== todo.id);
};

const markAsDone = (todo) => {
  const todoItem = todos.find(item => item.id === todo.id);
  if (todoItem)
    todoItem.completed = true;
};
</script>

<template>
  <div class="container">
    <h1>My Simple TODO list</h1>
    <div class="section">
      <p>New task:</p>
      <input v-model="todoInput" type="text" @keyup.enter="addTodo">
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
    <div class="section">
      Total items: <span>{{ totalDone }}/{{ total }}</span>
    </div>
  </div>
</template>

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

## MyAlert

```vue
<!-- App.vue -->
<script setup>
import { ref } from 'vue';
import MyAlert from './components/MyAlert.vue';

const alertMessage = ref('Alert: We have a problem.');
const handledAlertClosed = () => {
  console.log('alert closed');
  alertMessage.value = '';
};
const handleShowAlert = () => {
  alertMessage.value = 'Yet, another problem occurred, Help!';
};
</script>

<template>
  <div class="container m-2">
    <my-alert dismissable :show="!!alertMessage" @dismissed="handledAlertClosed">
      {{ alertMessage }}
    </my-alert>
    <my-alert variant="info">
      Don't forget to register
    </my-alert>
    <my-alert variant="success">
      Update was successful
    </my-alert>
    <button class="btn btn-primary" @click="handleShowAlert">
      Show Alert Again
    </button>
  </div>
</template>
```

```html
<!-- MyAlert.vue -->
<script setup>
const props = defineProps({
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
});

const emit = defineEmits(['dismissed']);

const alertVariants = {
  success: 'alert-success',
  info: 'alert-info',
  warn: 'alert-warning',
  error: 'alert-danger',
};

const alertClassName = alertVariants[props.variant];
const handleClose = () => {
  emit('dismissed');
};
</script>

<template>
  <div v-if="props.show" class="alert alert-dismissible" :class="alertClassName" role="alert">
    <slot />
    <button v-if="dismissable" type="button" class="btn-close" @click="handleClose()" />
  </div>
</template>
```

Typescript version

```vue
<script setup lang="ts">
interface AlertProps {
  variant?: string
  show?: boolean
  dismissable?: boolean
}
const { variant, show, dismissable } = withDefaults(defineProps<AlertProps>(), {
  variant: 'warn',
  show: true,
  dismissable: false,
});
const emit = defineEmits(['dismissed']);

console.log('variant:', variant, show);

const alertVariants: Record<string, string> = {
  success: 'alert-success',
  info: 'alert-info',
  warn: 'alert-warning',
  error: 'alert-danger',
};

const alertClassName = alertVariants[variant];
const handleClose = () => {
  emit('dismissed');
};
</script>

<template>
  <div v-if="show" class="alert alert-dismissible" :class="alertClassName" role="alert">
    <slot />
    <button v-if="dismissable" type="button" class="btn-close" @click="handleClose()" />
  </div>
</template>
```
