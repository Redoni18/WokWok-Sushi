<script setup>
import { useEventListener } from '@vueuse/core'
import { reactive } from 'vue'
import { onReady, useStage } from 'vue3-pixi'

const stageRef = useStage();
const position = reactive({ x: 0, y: 0 });

onReady((app) => {
  app.stage.eventMode = "static";
  app.stage.hitArea = app.screen;
  position.x = app.screen.width / 2;
  position.y = app.screen.height / 2;
});

function onPointerEvent(event) {
  Object.assign(position, event.global);
}

useEventListener(stageRef, "pointermove", onPointerEvent);
</script>

<template>
  <graphics
    :position="position"
    @render="graphics => graphics
      .beginFill(0xFFFFFF)
      .lineStyle({ color: 0x111111, alpha: 0.87, width: 1 })
      .drawCircle(0, 0, 8)
      .endFill()"
  />
</template>