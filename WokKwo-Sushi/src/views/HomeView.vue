<template>
  <main>
    <Header />
    <HeroSectionVue />
    <AboutSectionVue />
    <PopularFoodSectionVue />
    <TrendingSectionVue />
    <ContactSectionVue />
    <Footer />
  </main>
</template>

<script>
import Header from "@/components/Header.vue"
import HeroSectionVue from '@/sections/HeroSection.vue'
import AboutSectionVue from '../sections/AboutSection.vue'
import PopularFoodSectionVue from '../sections/PopularFoodSection.vue'
import TrendingSectionVue from '../sections/TrendingSection.vue'
import ContactSectionVue from '../sections/ContactSection.vue'
import Footer from '../components/Footer.vue'
export default {
  components: {
    Header,
    HeroSectionVue,
    AboutSectionVue,
    PopularFoodSectionVue,
    TrendingSectionVue,
    ContactSectionVue,
    Footer
  }
}
</script>
