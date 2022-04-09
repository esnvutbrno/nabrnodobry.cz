<template>
  <nav class="
      flex flex-row justify-center sticky top-0 bg-white
      border-primary border-b-4 border-opacity-70
      font-bold text-sm md:text-lg uppercase text-primary
    ">
    <ul class="
      flex flex-col md:flex-row w-1/3 md:w-full
      md:space-x-2 justify-end
    ">
      <li class="flex items-center justify-end hover:bg-gray-50">
        <nuxt-link class="px-4 py-2 md:py-8" :to="{name: 'schedule'}">Schedule</nuxt-link>
      </li>
      <li class="flex items-center justify-end hover:bg-gray-50">
        <nuxt-link class="px-4 py-2 md:py-8" :to="{name: 'about'}">About NA</nuxt-link>
      </li>
      <li class="flex items-center justify-end hover:bg-gray-50">
        <nuxt-link class="px-4 py-2 md:py-8" :to="{name: 'faq'}">FAQ</nuxt-link>
      </li>
    </ul>
    <nuxt-link
      class="
        flex flex-col sm:flex-row justify-center items-center sm:mx-2 md:mx-4
        my-2 md:my-0
      "
      :to="{name: 'index'}"
      :class="{'hidden md:block md:invisible': $route.path === '/'}"
    >
      <svg class="w-12 fill-primary" viewBox="0 0 82.225755 72.054314">
        <use :xlink:href="require('@/assets/svg/cb.svg') + '#main'"/>
      </svg>
      <div class="md:hidden mt-2 sm:mt-0 sm:ml-2 sm:text-lg text-center sm:text-left">
        NA Brno <br>dobrý
      </div>
    </nuxt-link>
    <ul class="
      flex flex-col md:flex-row w-1/3 md:w-full
      md:space-x-2 justify-start order-3
    ">
      <li class="flex items-center justify-start hover:bg-gray-50">
        <nuxt-link class="px-4 py-2 md:py-8" :to="{name: 'map'}">Map</nuxt-link>
      </li>
      <li class="flex items-center justify-start hover:bg-gray-50">
        <nuxt-link class="px-4 py-2 md:py-8" :to="{name: 'team'}">Team</nuxt-link>
      </li>
      <li class="flex items-center justify-start hover:bg-gray-50">
        <nuxt-link class="px-4 py-2 md:py-8" :to="{name: 'sponsors'}">Sponsors</nuxt-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "Nav"
}
</script>

<style scoped>
nav {
  font-family: "Kelson Sans", sans-serif;
}
</style>
