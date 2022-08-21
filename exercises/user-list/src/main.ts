/* eslint-disable no-console */
import { createApp } from 'vue';
import App from './App.vue';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css';

// Dump environment
console.log(import.meta.env.VERSION);
console.log(import.meta.env.VITE_APP_SERVER_BASE_URL);
console.log(import.meta.env.MODE);
console.log(import.meta.env.BASE_URL);

// Mount application
createApp(App).mount('#app');
