import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import * as PIXI from "pixi.js";
import FloatingVue from 'floating-vue'

window.PIXI = PIXI;

import 'floating-vue/dist/style.css'

import {
    VTooltip,
    VClosePopper,
    Dropdown,
    Tooltip,
    Menu
} from 'floating-vue'

import 'aos/dist/aos.css'
  
const app = createApp(App)
app.directive('tooltip', VTooltip)
app.directive('close-popper', VClosePopper)

app.component('VDropdown', Dropdown)
app.component('VTooltip', Tooltip)
app.component('VMenu', Menu)

app.use(FloatingVue)

app.use(router)

app.mount('#app')
