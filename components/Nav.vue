<template>
  <nav class="
      flex flex-row justify-center sticky top-0 bg-white
      border-primary border-b-4 border-opacity-70
      font-bold text-sm md:text-lg uppercase text-primary font-esn
      dark:bg-primary dark:text-white
      z-[1111] select-none
    ">
    <ul class="
      flex flex-col md:flex-row w-1/3 md:w-full
      md:space-x-2 justify-end
    ">
      <li class="flex items-center justify-end">
        <nuxt-link class="nuxt-link" :to="{name: 'schedule'}">Schedule</nuxt-link>
      </li>
      <li class="flex items-center justify-end">
        <nuxt-link class="nuxt-link whitespace-nowrap" :to="{name: 'about'}">About NA</nuxt-link>
      </li>
      <li class="flex items-center justify-end">
        <nuxt-link class="nuxt-link"
                   :to="{name: 'faq-category', params: {category: 'general'}}"
                   :class="{'nuxt-link-active': $route.name && $route.name.startsWith('faq-')}"
        >FAQ</nuxt-link>
      </li>
    </ul>
    <nuxt-link
      class="
        flex flex-col sm:flex-row justify-center items-center
        sm:mx-2 md:mx-4 my-2 md:my-0 px-2
        hover:bg-gray-50 dark:hover:bg-primary
      "
      :to="{name: 'index'}"
      :class="{'hidden md:block md:invisible': $route.path === '/'}"
    >
      <svg
          class="w-10 sm:w-12 fill-primary dark:fill-white dark:hover:fill-secondary"
          viewBox="0 0 82.225755 72.054314"
      >
        <use :xlink:href="require('@/assets/svg/cb.svg') + '#main'"/>
      </svg>
      <div class="md:hidden mt-2 sm:mt-0 sm:ml-2 sm:text-lg text-center sm:text-left text-primary dark:text-white">
        NA Brno <br>dobrý
      </div>
    </nuxt-link>
    <ul class="
      flex flex-col md:flex-row w-1/3 md:w-full
      md:space-x-2 justify-start
    ">
      <li class="flex items-center justify-start">
        <nuxt-link class="nuxt-link" :to="{name: 'map'}">Map</nuxt-link>
      </li>
      <li class="flex items-center justify-start">
        <nuxt-link class="nuxt-link" :to="{name: 'team'}">Team</nuxt-link>
      </li>
      <li class="flex items-center justify-start">
        <nuxt-link class="nuxt-link" :to="{name: 'contact'}">Contact</nuxt-link>
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
.nuxt-link {
  @apply
  px-2 py-2 md:py-8 hover:bg-gray-50
  dark:hover:bg-transparent dark:hover:text-secondary
}
.nuxt-link-active {
  @apply text-secondary;
}
</style>
