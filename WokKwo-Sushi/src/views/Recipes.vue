<template>
<div class="recipes-container">
    <h1 class="recipes-title">Check out some of our recipes / レシピ</h1>
    <RecipesCardVue :recipeItems="recipes" />
</div>
</template>

<script>
import RecipesCardVue from '../components/RecipesCard.vue'
export default {
    components: {
        RecipesCardVue
    },
    data() {
        return {
        recipes: null,
        };
    },
    created() {
        import(/* webpackChunkName: "recipes" */ "../recipes/recipes.js")
        .then((module) => {
            this.recipes = module.recipes;
        })
        .catch((error) => {
            console.error("Failed to load recipes:", error);
        });
    },
}
</script>

<style scoped>
.recipes-container{
    padding: 40px 30px;
}
.recipes-title{
  font-size: 56px;
  font-family: var(--playfair-display);
  font-weight: 600;
  line-height: 78px;
  color: #000;
  text-align: center;
}
</style>