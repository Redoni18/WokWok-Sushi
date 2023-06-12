<template>
  <footer class="footer flex-between">
      <h3 class="footer__logo">
        <span>Wok - Wok</span>
      </h3>

      <ul class="footer__nav">
        <li><a href="#menu">Menu</a></li>
        <li><a href="#food">Food</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#about-us">About Us</a></li>
        <li><router-link to="/administrator">Administrator</router-link></li>
      </ul>

      <ul class="footer__social">
        <li class="flex-center">
          <img src="@/assets/facebook.svg" alt="facebook" />
        </li>
        <li class="flex-center">
          <img src="@/assets/instagram.svg" alt="instagram" />
        </li>
        <li class="flex-center">
          <img src="@/assets/twitter.svg" alt="twitter" />
        </li>
      </ul>
    </footer>
</template>

<script>
export default {

}
</script>

<style scoped>
.footer {
  width: 100%;
  padding: 20px 40px;
  background: var(--color-white);

  flex-wrap: wrap;
  gap: 20px;

  overflow: hidden;
}

.footer__logo {
  font-size: 24px;
  font-weight: bold;
  font-family: var(--playfair-display);
  text-transform: uppercase;
  color: var(--secondary-color);

  cursor: pointer;
}

.footer__logo span {
  color: var(--primary-color)
}

.footer ul {
  list-style: none;

  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  gap: 64px;
}

.footer ul:last-child {
  gap: 32px;
}

.footer__nav li {
  font-size: 16px;
  font-weight: 500;
  font-family: var(--plus-jakarta-sans);
  text-transform: uppercase;
  color: var(--secondary-color);

  cursor: pointer;
}

.footer__social li {
  width: 42px;
  height: 42px;

  background-color: var(--secondary-color);
  border-radius: 100%;
}

.footer__social li img {
  width: 45%;
  height: 45%;

  object-fit: contain;
}
</style>