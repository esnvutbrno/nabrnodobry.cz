<template>
  <div class="min-h-screen dark:bg-gray-900 dark:text-gray-100 flex flex-col">
    <LogoHeader/>
    <Nav />
    <FancyLine />
    <main
      class="
        mx-auto max-w-4xl w-full p-2 mt-4 pb-8 lg:px-8
        transition-max-w flex-grow flex flex-col
      "
      :class="{'max-w-full m-0 p-0 mt-0 pb-0 lg:px-0': $route.name === 'map'}"
    >
      <Nuxt />
    </main>
    <FancyLine class="border-t-4 border-b-0"/>
    <template v-if="$route.name !== 'map'">
      <InstagramFeed v-if=""/>
      <Footer />
    </template>
  </div>
</template>

<script>
export default {
  name: "DefaultLayout"
}
</script>

<style scoped>

</style>
