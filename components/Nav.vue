<template>
  <nav class="
      flex flex-col md:flex-row justify-center sticky top-0 bg-white
      border-primary border-b-4 border-opacity-70
      font-bold text-sm md:text-lg uppercase text-primary
    ">
    <ul class="
      flex flex-row w-full space-x-2 justify-end
      order-2 md:order-1
    ">
      <li class="flex items-center hover:bg-gray-50">
        <nuxt-link class="px-4 py-4 md:py-8" :to="{name: 'schedule'}">Schedule</nuxt-link>
      </li>
      <li class="flex items-center hover:bg-gray-50"><a class="px-4 py-4 md:py-8 text-center" href="">National
        <br>Assembly</a></li>
    </ul>
    <nuxt-link
      class="
        flex justify-center items-center mx-4
        order-1 md:order-2 my-2 md:my-0
      "
      :to="{name: 'index'}"
      :class="{'hidden md:block md:invisible': $route.path === '/'}"
    >
      <svg class="w-12 fill-primary" viewBox="0 0 82.225755 72.054314">
        <use :xlink:href="require('@/assets/svg/cb.svg') + '#main'"/>
      </svg>
      <div class="md:hidden ml-2 text-lg">
        NA Brno <br>dobrý
      </div>
    </nuxt-link>
    <ul class="flex flex-row w-full space-x-2 justify-start order-3">
      <li class="flex items-center hover:bg-gray-50">
        <nuxt-link class="px-4 py-4 md:py-8" :to="{name: 'team'}">Team</nuxt-link>
      </li>
      <li class="flex items-center hover:bg-gray-50"><a class="px-4 py-4 md:py-8" href="">Sponsors</a></li>
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
