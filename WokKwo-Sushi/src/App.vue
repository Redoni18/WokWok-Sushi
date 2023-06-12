<template>
  <div>
    <AdminHeaderVue />
    <RouterView />
  </div>
</template>

<script>
import AdminHeaderVue from './components/AdminHeader.vue'
export default {
  components: {
    AdminHeaderVue
  }
}
</script>

<style scoped>

</style>
