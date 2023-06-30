<template>
  <div ref="container"></div>
</template>

<script>
import { ref, onMounted, onUnmounted } from 'vue';
import * as PIXI from 'pixi.js';

export default {
  mounted() {
    // Initialize PIXI renderer
    this.renderer = PIXI.autoDetectRenderer({
      transparent: true,
    });

    this.$refs.container.appendChild(this.renderer.view);

    // Create PIXI container for particles
    this.particleContainer = new PIXI.Container();
    this.stage = new PIXI.Container();
    this.stage.addChild(this.particleContainer);

    // Create an array to store particles
    this.particles = [];

    // Add event listeners for mouse click
    this.$refs.container.addEventListener('click', this.handleMouseClick);

    // Start the update loop
    this.update();
  },
  beforeUnmount() {
    // Remove event listeners
    this.$refs.container.removeEventListener('click', this.handleMouseClick);
  },
  methods: {
    handleMouseClick(event) {
      // Get the mouse position relative to the container
      const { x, y } = event.target.getBoundingClientRect();
      const mouseX = event.clientX - x;
      const mouseY = event.clientY - y;

      // Create a new particle at the mouse position
      const particle = new PIXI.Graphics();
      particle.beginFill(0xff0000);
      particle.drawCircle(0, 0, 5);
      particle.position.x = mouseX;
      particle.position.y = mouseY;
      particle.vx = Math.random() * 5 - 2.5; // Random horizontal velocity
      particle.vy = Math.random() * -5 - 5; // Random vertical velocity
      this.particleContainer.addChild(particle);

      // Store the particle in the particles array
      this.particles.push(particle);
    },
    update() {
      // Update particle positions and velocities
      for (let i = this.particles.length - 1; i >= 0; i--) {
        const particle = this.particles[i];

        particle.position.x += particle.vx;
        particle.position.y += particle.vy;
        particle.vy += 0.1; // Gravity

        // Remove particles that are offscreen
        if (particle.position.y > window.innerHeight) {
          this.particleContainer.removeChild(particle);
          this.particles.splice(i, 1);
        }
      }

      // Render the stage
      this.renderer.render(this.stage);

      // Request the next frame
      requestAnimationFrame(this.update);
    },
  },
};
</script>

<style>
  #container {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    background: transparent;
  }
</style>
