<template>
    <header>
        <nav class="header__nav">
            <div class="header__logo">
                <router-link to="/"><h4>Wok-Wok</h4></router-link>
                <div class="header__logo-overlay">

                </div>

            </div>
            <ul class="header__menu">
                <li><a href="#about-us">About</a></li>
                <li><a href="#menu">Menu</a></li>
                <li><a href="#contact">Contact</a></li>
                <li><router-link to="/recipes">Recipes</router-link></li>
            </ul>

            <ul class="header__menu-mobile">
                <li>
                    <img src="@/assets/menu.svg" alt="menu">
                </li>
            </ul>
        </nav>
    </header>
</template>

<style scoped>
.header__nav {
    display: flex;
    overflow: hidden;
}

.header__logo {
    flex: 1;
    display: flex;
    position: relative;
    padding: 20px;
}


.header__logo-overlay {
  position: absolute;
  inset: 0;
  width: 100%;

  background-color: var(--primary-color);
  z-index: -1;
}

.header__logo h4 {
  padding-left: 30px;

  font-weight: 700;
  font-size: 24px;
  text-transform: uppercase;
  font-family: var(--playfair-display);
  color: white;
  opacity: 0.8;
  margin: auto 0;
}

.header__menu, .header__menu-mobile {
  padding: 20px;
  flex: 1.236;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 64px;

  list-style: none;
}

.header__menu li {
  font-weight: 500;
  font-family: var(--plus-jakarta-sans);
  color: var(--secondary-color);
  font-size: 16px;
  text-transform: uppercase;
  line-height: 20px;
  cursor: pointer;
}

.header__menu li img {
  width: 24px;
  height: 24px;
  object-fit: contain;
}

.header__menu-mobile {
  display: none;
  gap: 20px;

  position: relative;
}

</style>