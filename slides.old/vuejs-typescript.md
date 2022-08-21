---
title: Vue - Typescript
---

# VueJS Typescript

<img src="./images/vue-logo.png" width="300px" /><br>
<small>by Peter Cosemans</small>

<small>
Copyright (c) 2017 - 2021 Euricom nv.
</small>

---

## Vue component - Option API

<!-- .slide: class="code-large" -->

```html
<template>
  <div>{{ message }}</div>
</template>
<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
    data() {
      return {
        message: 'Hello Vue!',
      };
    },
  });
</script>
```

<small>
Make sure your environment support TypeScript
</small>

===

## Vue component - Composition API

<!-- .slide: class="code-large" -->

```html
<template>
  <div>{{ message }}</div>
</template>
<script lang="ts">
  import { defineComponent, ref } from 'vue';

  export default defineComponent({
    setup() {
      const message = ref('Hello Vue!');
      return { message };
    },
  });
</script>
```

===

## Vue component - Setup Script

<!-- .slide: class="code-large" -->

```html
<template>
  <div>{{ message }}</div>
</template>
<script lang="ts" setup>
  import { ref } from 'vue';
  const message = ref('Hello Vue!');
</script>
```

---

## Typed Props

```ts
import { PropType, defineComponent } from 'vue';
import IPerson from './person';

export default defineComponent({
  name: 'MyComponent',
  props: {
    name: {
      // use PropType to specify the TypeScript type
      type: String as PropType<string>,
      required: true,
    },
    person: {
      // use PropType to specify the TypeScript type
      type: Object as PropType<IPerson>,
      required: true,
    },
  },
  setup(props /* no need to type the props here */) {},
});
```

---

## Typed Props - script setup

```ts
<script lang="ts" setup>
  import { defineProps, defineEmit } from 'vue';
  import IPerson from './person';

  const props = defineProps({
    foo: String,
    person: IPerson
  })
  const emit = defineEmit(['change', 'delete'])
  const { slots, attrs } = useContext()
</script>
```
