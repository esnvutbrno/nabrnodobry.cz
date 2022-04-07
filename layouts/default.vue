<template>
  <div class="h-auto">
    <LogoHeader/>
    <Nav />
    <FancyLine />
    <main
      class="mx-auto max-w-4xl m-4"
      :class="{'max-w-full m-0': $route.name === 'map'}"
    >
      <Nuxt />
    </main>
    <FancyLine class="border-t-4 border-b-0"/>
    <Footer />
  </div>
</template>

<script>
export default {
  name: "DefaultLayout"
}
</script>

<style scoped>

</style>
