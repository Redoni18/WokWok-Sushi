<template>
  <div class="menu-card">
    <article @click="$router.push({ name: 'recipeDetails', params: { id: recipeItem.id } })" v-for="recipeItem in recipeItems" :key="recipeItem.id" class="popular-foods__card">
      <div class="card-overlay"></div>
      <img loading="lazy" class="popular-foods__card-image" :src="recipeItem.image" alt="sushi-12" />
      <div class="card-content">
        <h4 class="popular-foods__card-title">{{recipeItem.title}}</h4>
      </div>
    </article>
  </div>
</template>


<script>
export default {
    props: {
        recipeItems: {
            type: Object,
            required: true
        },
    }
}
</script>

<style scoped>
.menu-card{
    display: flex;
    gap: 20px;
    flex-wrap: wrap;
    justify-content: center;
    margin: 20px;
}

.popular-foods__card {
  width: 75%;
  height: 300px;
  position: relative;
  display: flex;
  align-items: flex-start;
  border-radius: 36px;
  gap: 30px;
  background: rgba(254,240,222, 0.02);
  border: 1px solid rgb(171, 169, 169);
  transition: background-color 0.2s ease-in-out, box-shadow 0.8s;
}

.popular-foods__card:hover {
  background: rgba(247, 229, 206, 0.5);
  transition: background-color 0.2s ease-in-out, box-shadow 0.8s;
  cursor: pointer;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
}

.popular-foods__card-image {
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    border-radius: 36px;
    top: 0;
    left: 0;
    opacity: 0.5;
    transition: opacity 0.3s ease-in-out;
}

.popular-foods__card-image:hover {
    opacity: 0.8;
    transition: opacity 0.3s ease-in-out;
}

.popular-foods__card-title {
    font-weight: 700;
    font-size: 48px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    line-height: 32px;
    font-family: var(--playfair-display);
    color: #000;
    text-align: center;
    opacity: 1;
    padding: 25px 40px;
    transition: background-color 0.3s ease-in, color 0.3s ease-in;
    border-radius: 12px;
    width: fit-content;
    line-height: 3rem;

}

.popular-foods__card-image:hover + .card-content .popular-foods__card-title {
    background: var(--primary-color);
    color: var(--black-200);
    transition: background-color 0.3s ease-in, color 0.3s ease-in;
}

.popular-foods__card-details {
  width: 100%;
  margin-top: 32px;
  text-align: center;
}

.popular-foods__card.active-card .popular-foods__card-image {
  width: 214px;
  height: 160px;
}

.popular-foods__card.active-card .popular-foods__card-title {
  color: var(--black-500);
  font-size: 32px;
}

.popular-foods__card.active-card .popular-foods__card-rating img {
  width: 32px;
  height: 32px;
}
</style>