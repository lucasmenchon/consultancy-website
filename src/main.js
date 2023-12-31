import { createApp } from 'vue';
import App from './App.vue';
import mainRouter from '@/router'; // Importando o router principal

createApp(App)
  .use(mainRouter) // Usando o router principal
  .mount('#app');