import './assets/main.css';
import './assets/css/tailwind.css';

import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import helpers from './helpers/formating';

const app = createApp(App);
app.use(router);
app.mixin(helpers);

app.mount('#app');