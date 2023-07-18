<template>
  <div class="container" ref="container">
    <h1>Click anywhere on canvas</h1>
  </div>
</template>

<script>
import * as PIXI from 'pixi.js';

export default {
  mounted() {
    this.renderer = PIXI.autoDetectRenderer({
      transparent: true,
    });

    this.$refs.container.appendChild(this.renderer.view);
    
    this.particleContainer = new PIXI.Container();
    this.stage = new PIXI.Container();
    this.stage.addChild(this.particleContainer);

    this.particles = [];

    this.$refs.container.addEventListener('click', this.handleMouseClick);

    this.update();
  },
  beforeUnmount() {
    this.$refs.container.removeEventListener('click', this.handleMouseClick);
  },
  methods: {
    handleMouseClick(event) {
      const containerBounds = this.$refs.container.getBoundingClientRect();
      const mouseX = event.clientX - containerBounds.left;
      const mouseY = event.clientY - containerBounds.top;

      // Create multiple particles on mouse click
      for (let i = 0; i < 5; i++) {
        const particle = new PIXI.Graphics();
        const randomColor = Math.random() * 0xffffff;
        particle.beginFill(randomColor);
        particle.drawCircle(0, 0, 5);
        particle.position.x = mouseX;
        particle.position.y = mouseY;
        particle.vx = Math.random() * 5 - 2.5;
        particle.vy = Math.random() * -10 - 5;
        this.particleContainer.addChild(particle);

        this.particles.push(particle);
      }
    },
    update() {
      for (let i = this.particles.length - 1; i >= 0; i--) {
        const particle = this.particles[i];

        particle.position.x += particle.vx;
        particle.position.y += particle.vy;
        particle.vy += 0.5;

        if (particle.position.y > window.innerHeight) {
          this.particleContainer.removeChild(particle);
          this.particles.splice(i, 1);
        }
      }

      this.renderer.render(this.stage);

      requestAnimationFrame(this.update);
    },
  },
};
</script>

<style scoped>
.container {
  width: 100%;
  height: 100%;
  margin: 20px 0;
}

.container h1 {
  width: 100%;
  font-size: 40px;
  font-family: var(--plus-jakarta-sans);
}
</style>
