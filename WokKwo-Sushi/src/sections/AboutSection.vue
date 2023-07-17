<template>
    <section class="about-us" id="about-us">
        <div data-aos="fade-right" class="about-us__image">
            <div class="about-us__image-sushi3">
                <img loading="lazy" src="@/assets/sushi-3.png" alt="sushi"/>
            </div>

            <button class="about-us__button">
                Learn More
                <img loading="lazy" src="@/assets/arrow-up-right.svg" alt="learn more">
            </button>

             <div class="about-us__image-sushi2">
                <img loading="lazy" src="@/assets/sushi-2.png" alt="sushi"/>
            </div>
        </div>

        <div data-aos="fade-left" class="about-us__content">
            <p class="sushi__subtitle">About Us / 私たちに関しては</p>
            <h3 class="sushi__title">Noodle &amp; Sushi Bar</h3>
            <p class="sushi__description">We will continue to provide the experience of Omotenashi, the Japanese mindset of hospitality, with our shopping and dining for our customers.</p>
        </div>
    </section>
</template>

<script>
export default {

}
</script>

<style scopoed>
.about-us {
  display: flex;
  min-height: 100vh;
  overflow: hidden;
}

.about-us__image {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;

  background: var(--color-white);

  position: relative;
}

.about-us__image div {
  padding: 32px 64px;

  flex: 1;
  display: flex;
  align-items: center;

  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
}

.about-us__image-sushi3 {
  border-bottom: 8px solid var(--color-creamson);

  background-image: url("../assets/about_bg1.png")
}

.about-us__image-sushi2 {
  background-image: url("../assets/about_bg2.png")
}

.about-us__image-sushi3 img {
    width: 225px;
    height: 200px;
}

.about-us__image-sushi2 img {
    width: 240px;
    height: 160px;
}

.about-us__button {
  position: absolute;
  right: 0;

  padding: 12px 32px;
  min-height: 64px;

  background: var(--secondary-color);
  border-radius: 32px 0 0 32px;
  border: 0;
  outline: 0;

  color: #fff;
  font-family: var(--plus-jakarta-sans);
  font-weight: 500;
  font-size: 18px;
  line-height: 23px;

  cursor: pointer;
}

.about-us__button img {
  object-fit: contain;
  margin-left: 32px;
}

.about-us__content {
  padding: 64px;

  flex: 1;
  display: flex;
  justify-content: center;
  flex-direction: column;
}

</style>