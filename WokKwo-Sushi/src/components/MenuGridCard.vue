<template>
    <div class="menu-card">
        <article v-for="menuItem in menuData" :key="menuItem._id" class="popular-foods__card">
            <img loading="lazy" class="popular-foods__card-image" :src="menuItem.imageUrl" alt="sushi-12" />
            <h4 class="popular-foods__card-title">{{menuItem.menuItem}}</h4>

            <VTooltip>
                <div class="ingredients-container">
                    <small class="ingredients-container__item" v-for="(itemIngredient, index) in menuItem.itemIngredients.slice(0, 3)" :key="new Date() + index">{{itemIngredient}}</small>
                </div>


                <template #popper>
                    <p class="ingredients-container__tooltip">{{menuItem.itemIngredients.join(", ")}}</p>
                </template>
            </VTooltip>
            <div class="popular-foods__card-details">
                <p class="popular-foods__card-price">&euro;{{menuItem.itemPrice}}</p>
            </div>
        </article>
    </div>
</template>

<script>
export default {
    props: {
        menuData: {
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
    justify-content: flex-start;
}

.popular-foods__card {
  padding: 38px;
  width: 260px;
  height: fit-content;

  display: flex;
  align-items: center;
  flex-direction: column;
  border-radius: 36px;
  background: rgba(254,240,222, 0.02);
  border: 1px solid rgba(220, 218, 218, 1);
  transition: background-color 0.2s ease-in-out, box-shadow 0.8s;
}

.popular-foods__card:hover {
  background: rgba(247, 229, 206, 0.5);
  transition: background-color 0.2s ease-in-out, box-shadow 0.8s;
  cursor: pointer;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
}

.popular-foods__card-image {
  width: 200px;
  height: fit-content;
  object-fit: contain;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  border-radius: 12px;
}

.popular-foods__card-title {
    margin-top: 20px;
  font-weight: 600;
  font-size: 24px;
  line-height: 32px;
  font-family: var(--playfair-display);
  color: #000;
  text-align: center;
}

.popular-foods__card-details {
  width: 100%;
  margin-top: 32px;
  text-align: center;
}

.popular-foods__card-price {
  font-size: 20px; 
  font-weight: 500;
  font-family: var(--plus-jakarta-sans);
  color: #000;
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

.popular-foods__card.active-card .popular-foods__card-price {
  font-size: 24px;
  color: var(--secondary-color)
}

.ingredients-container{
    display: flex;
    font-family: var(--plus-jakarta-sans);
    gap: 10px;
    width: 100%;
}

.ingredients-container__item{
    margin-top: 15px;
    margin-left: auto;
    margin-right: auto;
    padding: 5px 10px;
    background: var(--primary-color);
    border-radius: 20px;
    color: white;
}

.ingredients-container__tooltip{
    font-family: var(--plus-jakarta-sans);
}
</style>