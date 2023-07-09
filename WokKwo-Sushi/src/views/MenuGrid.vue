<template>
  <section class="popular-foods" id="menu">
      <h2 class="popular-foods__title" data-aos="flip-up">Our Menu / 人気</h2>

      <div class="popular-foods_rest-content">

        <div v-if="categoriesList" class="menu-filter__buttons" data-aos="fade-up">
            <button @click="fetchMenuItems" class="menu-filter__btn">
                All
            </button>
            <button @click="filterItems(category)" v-for="category in categoriesList" :key="category._id" class="menu-filter__btn">
                {{category.categoryName}}
            </button>
        </div>

        <div class="popular-foods__catalogue" data-aos="fade-up">
          <article v-for="menuItem in menuItemList" :key="menuItem._id" class="popular-foods__card">
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
      </div>
    </section>

</template>

<script>
import {getMenuItems} from "../wokwok-sdk/menu"
import { getAllCategories } from "../wokwok-sdk/categories"

export default {
    data() {
        return {
            menuItemList: [],
            menuItems: [],
            categoriesList: null,
        }
    },
    mounted() {
        this.fetchCategories()
        this.fetchMenuItems()
    },
    methods: {
        async fetchMenuItems() {
            const response = await getMenuItems()
            this.menuItems = response.data
            this.menuItemList = this.menuItems
            this.menuItemList.forEach(menuItem => {
                if(!menuItem.itemIngredients) return
                menuItem.itemIngredients = menuItem.itemIngredients.split(", ")
            });
            console.log(this.menuItems)
        },
        async fetchCategories() {
            const response = await getAllCategories() 
            this.categoriesList = response.data
        },
        async filterItems(category) {
            this.menuItemList = this.menuItems.filter((menuItem) => menuItem.itemCategory._id === category._id)
        },
    }
}
</script>

<style scoped>
.popular-foods {
  padding: 64px;

  display: flex;
  flex-direction: column;
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;

  overflow: hidden;
}

.popular-foods_rest-content{
  width: 100%;
}

.popular-foods__title {
  font-size: 56px;
  font-family: var(--playfair-display);
  font-weight: 600;
  line-height: 78px;
  color: #000;
  text-align: center;
}

.popular-foods__filters {
  margin-top: 48px;
  overflow-y: auto;

  display: flex;
  justify-content: center;
  gap: 24px;
}

.menu-filter__buttons{
    display: flex;
    justify-content: center;
    gap: 20px;
    margin-top: 20px;
}

.menu-filter__btn{
    display: flex;
    justify-content: center;
    padding: 10px 20px;
    outline: none;
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid rgb(62, 60, 60);
    border-radius: 46px;
    font-size: 16px;
    font-weight: 300px;
    line-height: 25px;
    font-family: var(--plus-jakarta-sans);
    color: black;
    cursor: pointer;
    transition: background-color 0.3s ease;
}

.menu-filter__btn:hover{
    background: rgba(139, 139, 139, 0.2);
    transition: background-color 0.3s ease;
}


.popular-foods__catalogue {
  margin-top: 45px;

  display: flex;
  justify-content: center;
  align-items: flex-end;
  flex-wrap: wrap;
  gap: 20px;
  transition: background-color 0.1s ease-in-out;
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
  transition: background-color 0.2s ease-in-out;
}

.popular-foods__card:hover {
  background: rgba(247, 229, 206, 0.5);
  transition: background-color 0.2s ease-in-out;
  cursor: pointer;
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

.popular-foods__card.active-card .popular-foods__card-rating p {
  font-size: 24px;
  color: var(--gray-100);
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