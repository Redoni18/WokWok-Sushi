<template>
  <div>
    <AdminHeaderVue @goHome="goToHomepage" v-if="adminIsAuthenticated" />
    <Header v-if="!adminIsAuthenticated && $route.path !== '/administrator'"></Header>
    <RouterView />
    <Footer v-if="!adminIsAuthenticated && $route.path !== '/administrator'"></Footer>
  </div>
</template>

<script>
import AdminHeaderVue from './components/AdminHeader.vue'
import { userExists, removeUser } from "./helper/auth.js"
import Header from "./components/Header.vue"
import Footer from "./components/Footer.vue"
import AOS from "aos";
export default {
  components: {
    AdminHeaderVue,
    Header,
    Footer,
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
    AOS.init();
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
</style>
