<template>
  <main>
    <HeroSectionVue />
    <AboutSectionVue />
    <PopularFoodSectionVue />
    <ContactSectionVue />
  </main>
</template>

<script>
import HeroSectionVue from '@/sections/HeroSection.vue'
import AboutSectionVue from '../sections/AboutSection.vue'
import PopularFoodSectionVue from '../sections/PopularFoodSection.vue'
import ContactSectionVue from '../sections/ContactSection.vue'
import * as auth from "../helper/auth"
export default {
  components: {
    HeroSectionVue,
    AboutSectionVue,
    PopularFoodSectionVue,
    ContactSectionVue,
  },
  mounted() {
    auth.removeUser()
  }
}
</script>
