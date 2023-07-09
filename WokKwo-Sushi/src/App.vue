<template>
  <div>
    <AdminHeaderVue @goHome="goToHomepage" v-if="adminIsAuthenticated" />
    <Header v-if="!adminIsAuthenticated && $route.path !== '/administrator'"></Header>
    <!-- <ParticleShooter /> -->
    <RouterView />
    <Footer v-if="!adminIsAuthenticated && $route.path !== '/administrator'"></Footer>
  </div>
</template>

<script>
import AdminHeaderVue from './components/AdminHeader.vue'
import { userExists, removeUser } from "./helper/auth.js"
import Header from "./components/Header.vue"
import Footer from "./components/Footer.vue"
// import ParticleShooter from "./components/ParticleShooter.vue"
export default {
  components: {
    AdminHeaderVue,
    Header,
    Footer
    // ParticleShooter
  },
  data() {
    return {
      adminIsAuthenticated: false,
    }
  },
  watch: {
    '$route.path': function() {
      if(this.$route.path === "/" || this.$route.path === "/dashboard") {
        this.adminIsAuthenticated = userExists()
      }
    }
  },
  mounted() {
    this.adminIsAuthenticated = userExists()
  },
  methods: {
    goToHomepage() {
      removeUser();
      this.adminIsAuthenticated = false
      this.route = null;
    }
  }
}
</script>

<style scoped>
#app{
  z-index: 1000;
}
</style>
