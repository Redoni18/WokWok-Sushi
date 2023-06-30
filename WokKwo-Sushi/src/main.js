import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import * as PIXI from "pixi.js";
window.PIXI = PIXI;

const app = createApp(App)

app.use(router)

app.mount('#app')
