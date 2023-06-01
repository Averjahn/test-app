import './assets/scss/main.scss'
import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia'
import ElementPlus from 'element-plus';
import 'element-plus/theme-chalk/index.css';

createApp(App).use(ElementPlus).use(createPinia()).mount('#app')
