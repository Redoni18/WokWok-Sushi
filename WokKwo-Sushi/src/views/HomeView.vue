<template>
  <main>
    <Header />
    <HeroSectionVue />
    <AboutSectionVue />
    <PopularFoodSectionVue />
    <ContactSectionVue />
    <Footer />
  </main>
</template>

<script>
import Header from "@/components/Header.vue"
import HeroSectionVue from '@/sections/HeroSection.vue'
import AboutSectionVue from '../sections/AboutSection.vue'
import PopularFoodSectionVue from '../sections/PopularFoodSection.vue'
import ContactSectionVue from '../sections/ContactSection.vue'
import Footer from '../components/Footer.vue'
import * as auth from "../helper/auth"
export default {
  components: {
    Header,
    HeroSectionVue,
    AboutSectionVue,
    PopularFoodSectionVue,
    ContactSectionVue,
    Footer
  },
  mounted() {
    auth.removeUser()
  }
}
</script>
