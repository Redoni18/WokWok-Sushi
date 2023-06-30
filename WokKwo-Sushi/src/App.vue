<template>
  <div>
    <AdminHeaderVue @goHome="goToHomepage" v-if="adminIsAuthenticated" />
    <RouterView />
  </div>
</template>

<script>
import AdminHeaderVue from './components/AdminHeader.vue'
import { userExists, removeUser } from "./helper/auth.js"
export default {
  components: {
    AdminHeaderVue
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

</style>
