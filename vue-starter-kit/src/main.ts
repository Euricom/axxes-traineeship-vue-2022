import { createApp } from 'vue';
import App from './App.vue';

import './main.css';

// Dump environment
console.log(import.meta.env.VERSION);
console.log(import.meta.env.VITE_APP_SERVER_BASE_URL);
console.log(import.meta.env.MODE);
console.log(import.meta.env.BASE_URL);

createApp(App).mount('#app');
