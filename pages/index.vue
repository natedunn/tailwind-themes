<template>
  <div class="container">
    <div>
      <h1>Redirecting...</h1>
      <div>
        If you are not redirected <nuxt-link to="/aqua">click here.</nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    this.$router.push({
      path: '/aqua',
    })
  },
}
</script>

<style></style>
