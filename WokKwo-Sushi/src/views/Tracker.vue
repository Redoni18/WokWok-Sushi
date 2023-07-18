<template>
  <Application :width="1280" :height="600" :background-alpha="0">
    <MouseTracker />
  </Application>
</template>

<script>
import { Application } from 'vue3-pixi'
import MouseTracker from "../components/MouseTracker.vue";
export default {
    components: {
        MouseTracker,
        Application
    },

}
</script>

<style>

</style>