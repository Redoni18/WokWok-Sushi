<template>
  <section class="trending" id="food">
      <section class="trending-sushi">
        <div class="trending__content" data-aos="fade-right">
          <p class="sushi__subtitle">What’s Trending / トレンド</p>
  
          <h3 class="sushi__title">Japanese Sushi
          </h3>
          <p class="sushi__description">Feel the taste of the most delicious Sushi here.
          </p>
  
          <ul class="trending__list flex-between">
            <li>
              <div class="trending__icon flex-center">
                <img loading="lazy" src="@/assets/check.svg" alt="check" />
              </div>
              <p>Make Sushi</p>
            </li>
            <li>
              <div class="trending__icon flex-center">
                <img loading="lazy" src="@/assets/check.svg" alt="check" />
              </div>
              <p>Oshizushi</p>
            </li>
            <li>
              <div class="trending__icon flex-center">
                <img loading="lazy" src="@/assets/check.svg" alt="check" />
              </div>
              <p>Uramaki Sushi</p>
            </li>
            <li>
              <div class="trending__icon flex-center">
                <img loading="lazy" src="@/assets/check.svg" alt="check" />
              </div>
              <p>Nigiri Sushi</p>
            </li>
            <li>
              <div class="trending__icon flex-center">
                <img loading="lazy" src="@/assets/check.svg" alt="check" />
              </div>
              <p>Temaki Sushi</p>
            </li>
            <li>
              <div class="trending__icon flex-center">
                <img loading="lazy" src="@/assets/check.svg" alt="check" />
              </div>
              <p>Inari Sushi</p>
            </li>
          </ul>
        </div>
  
        <div class="trending__image flex-center">
          <img loading="lazy" src="@/assets/sushi-5.png" alt="sushi-5" data-aos="fade-left" />
  
          <div class="trending__arrow trending__arrow-left">
            <img loading="lazy" src="@/assets/arrow-vertical.svg" alt="arrow vertical" />
          </div>
  
          <div class="trending__arrow trending__arrow-bottom">
            <img loading="lazy" src="@/assets/arrow-horizontal.svg" alt="arrow horizontal" />
          </div>
        </div>

      </section>

      <div class="trending__discover" data-aos="zoom-in">
        <p>Discover</p>
      </div>

      <section class="trending-noodles">
        <div class="trending__image flex-center">
          <img loading="lazy" src="@/assets/sushi-10.png" alt="sushi-4" data-aos="fade-right" />
  
          <div class="trending__arrow trending__arrow-top">
            <img loading="lazy" src="@/assets/arrow-horizontal.svg" alt="arrow horizontal" />
          </div>
  
          <div class="trending__arrow trending__arrow-right">
            <img loading="lazy" src="@/assets/arrow-vertical.svg" alt="arrow vertical" />
          </div>
        </div>

        <div class="trending__content" data-aos="fade-left">
          <p class="sushi__subtitle">What’s Trending / トレンド</p>
  
          <h3 class="sushi__title">Noodles
          </h3>
          <p class="sushi__description">Feel the taste of the most delicious Japense noodles here.
          </p>
  
          <ul class="trending__list flex-between">
            <li>
              <div class="trending__icon flex-center">
                <img loading="lazy" src="@/assets/check.svg" alt="check" />
              </div>
              <p>Ramen</p>
            </li>
            <li>
              <div class="trending__icon flex-center">
                <img loading="lazy" src="@/assets/check.svg" alt="check" />
              </div>
              <p>
                Udon</p>
            </li>
            <li>
              <div class="trending__icon flex-center">
                <img loading="lazy" src="@/assets/check.svg" alt="check" />
              </div>
              <p>Soba</p>
            </li>
            <li>
              <div class="trending__icon flex-center">
                <img loading="lazy" src="@/assets/check.svg" alt="check" />
              </div>
              <p>Somen</p>
            </li>
            <li>
              <div class="trending__icon flex-center">
                <img loading="lazy" src="@/assets/check.svg" alt="check" />
              </div>
              <p>Yakisoba</p>
            </li>
            <li>
              <div class="trending__icon flex-center">
                <img loading="lazy" src="@/assets/check.svg" alt="check" />
              </div>
              <p>Shirataki</p>
            </li>
          </ul>
        </div>
      </section>
    </section>
</template>

<script>
export default {

}
</script>

<style scoped>

.trending {
  position: relative;

  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.trending__discover {
  position: absolute;
  top: 44%;
  left: 44%;
  z-index: 1;

  width: 160px;
  height: 160px;

  border-radius: 100%;
  background-color: var(--secondary-color);
  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;
}

.trending__discover p {
  font-size: 18px;
  font-weight: 500;
  font-family: var(--plus-jakarta-sans);

  text-transform: uppercase;
  color: #fff;
}

.trending-sushi,
.trending-noodles {
  width: 100%;
  min-height: 50vh;

  display: flex;
  flex-direction: row;
}

.trending__content {
  flex: 1;
  display: flex;
  justify-content: center;
  flex-direction: column;

  padding: 32px 64px;
}

.trending__list {
  list-style: none;

  flex-wrap: wrap;
  gap: 20px;
}

.trending__list li {
  flex: 1;
  display: flex;
  align-items: center;
  flex-direction: row;
  gap: 12px;

  min-width: 210px;
}

.trending__icon {
  width: 24px;
  height: 24px;

  border-radius: 100%;
  background-color: var(--primary-color);
}

.trending__icon img {
  width: 50%;
  height: 50%;
  object-fit: contain;
}

.trending__list p {
  flex: 1;
  font-size: 16px;
  font-weight: 500;
  font-family: var(--plus-jakarta-sans);

  color: var(--secondary-color);
}

.trending__image {
  flex: 1;

  position: relative;
  padding: 32px 64px;

  background-color: var(--color-white);
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
}

.trending-sushi .trending__image {
  background-image: url("../assets/japanese_sushi.png");
}

.trending-drink .trending__image {
  background-image: url("../assets/japanese_drinks.png");
}

.trending__image img {
  width: 254px;
  height: 260px;
  object-fit: contain;
}

/* Arrows */
.trending__arrow {
  position: absolute;
  z-index: 1;
}

.trending__arrow img {
  object-fit: contain;
}

.trending__arrow-left {
  left: -2.5px;
  top: 12%;
}

.trending__arrow-left img,
.trending__arrow-top img {
  width: auto;
  height: 100%;
}

.trending__arrow-top {
  top: -10.5px;
  left: 12%;
}

.trending__arrow-bottom {
  bottom: -6.5px;
  right: 12%;
}

.trending__arrow-bottom img,
.trending__arrow-right img {
  width: 100%;
  height: auto;
}

.trending__arrow-right {
  right: -2.5px;
  bottom: 12%;
}

.sushi__subtitle{
    text-align: center;
}

</style>