<template>
  <div class="h-auto">
    <LogoHeader/>
    <Nav />
    <FancyLine />
    <main class="mx-auto max-w-4xl m-4">
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
