<template>
  <section class="popular-foods" id="menu">
      <h2 class="popular-foods__title" data-aos="flip-up">Popular Food / 人気</h2>

      <div class="popular-foods_rest-content">

        <div class="popular-foods__filters sushi__hide-scrollbar" data-aos="fade-up">
          <button class="popular-foods__filter-btn active">All</button>
          <button class="popular-foods__filter-btn">
            <img loading="lazy" src="@/assets/sushi-9.png" alt="sushi 9" />
            Sushi
          </button>
          <button class="popular-foods__filter-btn">
            <img loading="lazy" src="@/assets/sushi-8.png" alt="sushi 8" />
            Ramen
          </button>
        </div>

        <div class="popular-foods__catalogue" data-aos="fade-up">
          <article class="popular-foods__card">
            <img loading="lazy" class="popular-foods__card-image" src="@/assets/sushi-12.png" alt="sushi-12" />
            <h4 class="popular-foods__card-title">Chezu Sushi</h4>

            <div class="popular-foods__card-details flex-between">
              <div class="popular-foods__card-rating">
                <img loading="lazy" src="@/assets/star.svg" alt="star" />
                <p>4.9</p>
              </div>

              <p class="popular-foods__card-price">$21.00</p>
            </div>
          </article>

          <article class="popular-foods__card">
            <img loading="lazy" class="popular-foods__card-image" src="@/assets/sushi-11.png" alt="sushi-11" />
            <h4 class="popular-foods__card-title">Original Sushi</h4>
            
            <div class="popular-foods__card-details flex-between">
              <div class="popular-foods__card-rating">
                <img loading="lazy" src="@/assets/star.svg" alt="star" />
                <p>5.0</p>
              </div>
              
              <p class="popular-foods__card-price">$19.00</p>
            </div>
          </article>

          <article class="popular-foods__card">
            <img loading="lazy" class="popular-foods__card-image" src="@/assets/sushi-10.png" alt="sushi-10" />
            <h4 class="popular-foods__card-title">Ramen Legendo</h4>

            <div class="popular-foods__card-details flex-between">
              <div class="popular-foods__card-rating">
                <img loading="lazy" src="@/assets/star.svg" alt="star" />
                <p>4.7</p>
              </div>

              <p class="popular-foods__card-price">$13.00</p>
            </div>
          </article>
        </div>
      </div>

      <button @click="$router.push({ path: '/menu' })" class="popular-foods__button">
        Explore Food
        <img loading="lazy" src="@/assets/arrow-right.svg"  alt="arrow-right" />
      </button>
    </section>

</template>

<script>
export default {

}
</script>

<style scoped>
.popular-foods {
  padding: 64px;

  display: flex;
  flex-direction: column;
  background-color: var(--primary-color);
  background-image: url("../../assets/popular_bg.png");
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;

  overflow: hidden;
}

.popular-foods_rest-content{
  width: 100%;
  display: flex;
  gap: 50px;
  justify-content: center;
  align-items: center;
}

.popular-foods__title {
  font-size: 56px;
  font-family: var(--playfair-display);
  font-weight: 600;
  line-height: 78px;
  color: #fff;
  text-align: center;
}

.popular-foods__filters {
  margin-top: 48px;
  overflow-y: auto;

  display: flex;
  flex-direction: column;
  gap: 24px;
}

.popular-foods__filter-btn {
  padding: 10px 28px;

  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;

  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 46px;
  font-size: 16px;
  font-weight: 300px;
  line-height: 25px;
  font-family: var(--plus-jakarta-sans);
  color: #fff;
  cursor: pointer;
  justify-content: center;
  transition: background-color 0.1s ease-in-out;
}

.popular-foods__filter-btn img {
  width: 36px;
  height: 36px;
  object-fit: contain;
}

.popular-foods__filter-btn.active {
  background: #fff;
  color: var(--primary-color)
}

.popular-foods__filter-btn:hover {
  background: #fff;
  color: var(--primary-color)
}

.popular-foods__catalogue {
  margin-top: 64px;

  display: flex;
  justify-content: center;
  align-items: flex-end;
  flex-wrap: wrap;
  gap: 20px;
  transition: background-color 0.1s ease-in-out;
}

.popular-foods__button {
  width: fit-content;

  padding: 20px 30px;
  margin: 80px auto 0;

  font-weight: 500;
  font-size: 18px;
  line-height: 23px;
  font-family: var(--plus-jakarta-sans);
  color: #fff;

  border: none;
  outline: none;
  background: var(--secondary-color);
  border-radius: 64px;
  cursor: pointer;
}

.popular-foods__button img {
  width: 14px;
  height: 14px;
  object-fit: contain;

  margin-left: 21px;
}

.popular-foods__card {
  padding: 38px;
  min-width: 260px;
  height: fit-content;

  display: flex;
  align-items: center;
  flex-direction: column;

  border-radius: 36px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.2);
  transition: background-color 0.2s ease-in-out;
}

.popular-foods__card:hover {
  background: rgba(75, 75, 75, 0.034);
  transition: background-color 0.2s ease-in-out;
  cursor: pointer;
}

.popular-foods__card-image {
  width: 110px;
  height: 84px;
  object-fit: contain;
}

.popular-foods__card-title {
  margin-top: 47px;

  font-weight: 600;
  font-size: 24px;
  line-height: 32px;
  font-family: var(--playfair-display);
  color: #fff;
  text-align: center;
}

.popular-foods__card-details {
  width: 100%;
  margin-top: 32px;
}

.popular-foods__card-rating {
  display: flex;
  align-items: center;
  gap: 8px;
}

.popular-foods__card-rating img {
  width: 24px;
  height: 24px;
  object-fit: contain;
}

.popular-foods__card-rating p {
  font-size: 20px; 
  font-weight: 300;
  font-family: var(--plus-jakarta-sans);
  color: #fff;
}

.popular-foods__card-price {
  font-size: 20px; 
  font-weight: 500;
  font-family: var(--plus-jakarta-sans);
  color: #fff;
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
</style>