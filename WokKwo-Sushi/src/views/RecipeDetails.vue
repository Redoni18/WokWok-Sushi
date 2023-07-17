<template>
  <div class="details">
    <div class="details-stater">
      <h1 class="details-title">{{recipeDetails?.title}}</h1>
      <p>{{recipeDetails?.description}}</p>
    </div>
    <div class="recipe-ingredients">
      <Carousel :items-to-show="2.5" :wrap-around="true">
        <Slide v-for="slide in recipeDetails?.ingredients" :key="slide">
          <div class="carousel__item">
            <img :src="slide.image" alt="">
            <p class="slide-name">{{slide.name}}</p>
          </div>
        </Slide>

        <template #addons>
          <Navigation />
        </template>
      </Carousel>
    </div>
    <div class="recipe-steps">
      <h2 class="prepare-title">How to prepare this recipe?</h2>
      <div class="recipe-steps__content">
        <ol class="steps-list">
          <li class="step-item" v-for="step in recipeDetails?.steps" :key="step">
            {{step}}
          </li>
        </ol>
        
        <div class="video-tutoral">
          <iframe
            width="560"
            height="315"
            :src="recipeDetails?.youtubeVideo"
            title="YouTube Video Tutorial"
            frameborder="0"
            allowfullscreen
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { recipes } from "../recipes/recipes"
import { Carousel, Navigation, Pagination, Slide } from 'vue3-carousel'

import 'vue3-carousel/dist/carousel.css'
export default {
  components: {
    Carousel,
    Slide,
    Navigation,
  },
  data() {
    return {
      recipeDetails: null,
    }
  },
  mounted() {
    const recipeId = this.$route.params.id
    this.fetchRecipe(recipeId)
  },
  methods: {
    fetchRecipe(recipeId) {
      const recipeDetails = recipes.filter(recipe => recipe.id === parseInt(recipeId))
      this.recipeDetails = recipeDetails[0]
    }
  }
}
</script>

<style scoped>
.details {
  font-family: var(--plus-jakarta-sans);
  margin: 50px 0px;
  text-align: center;
}

.details-stater .details-title {
  margin-bottom: 10px;
  font-size: 50px;
}

.recipe-ingredients{
  margin-top: 3%;
}

.details-stater {
  width: 100%;
  padding: 10px;
  word-wrap: break-word;
}

.details-stater p {
  font-size: 20px;
}

.carousel {
  width: 80%;
  margin: auto;
}

.carousel__item {
  height: 300px;
  width: 100%;
  color: white;
  font-size: 20px;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.carousel__item img {
  width: 100%;
  height: 100%;
  position: relative;
}

.slide-name {
  position: absolute;
  color: black;
}

.carousel__slide {
  padding: 0 10px;
}

.carousel__slide--prev, .carousel__slide--next{
  opacity: 0.6;
  transition: opacity 0.3s ease, background-color 0.5s ease, color 0.5s ease;;
}

.carousel__slide--active {
  opacity: 1;
  transition: opacity 0.3s ease;
}

.carousel__slide--active .carousel__item img + .slide-name {
  background: var(--primary-color);
  color: white;
  padding: 10px;
  border-radius: 8px;
  transition: background-color 0.5s ease, color 0.5s ease;
}

.recipe-steps{
  margin-top: 4%;
}

.recipe-steps__content {
  margin: 5% 0;
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
}

.prepare-title {
  font-weight: 600;
  font-size: 40px;
  line-height: 32px;
}

.steps-list{
  width: fit-content;
  text-align: justify;
  font-size: 18px;
}

.step-item{
  margin-bottom: 10px;
}

</style>