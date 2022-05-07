<template>
  <nav class="
      flex flex-row justify-center sticky top-0 bg-white
      border-primary border-b-4 border-opacity-70
      font-bold text-sm md:text-lg uppercase text-primary font-esn
      dark:bg-primary dark:text-white
      z-[1111] select-none
    ">
    <ul>
      <li>
        <nuxt-link :to="{name: 'schedule'}">Schedule</nuxt-link>
      </li>
      <li>
        <nuxt-link :to="{name: 'about'}">About NA</nuxt-link>
      </li>
      <li>
        <nuxt-link class="tracking-tighter whitespace-nowrap"
                   :to="{name: 'faq-category', params: {category: 'general'}}"
                   :class="{'nuxt-link-active': $route.name && $route.name.startsWith('faq-')}"
        >Q & A
        </nuxt-link>
      </li>
      <!--      <li class="flex items-center justify-end">-->
      <!--        <nuxt-link class="nuxt-link whitespace-nowrap" :to="{name: 'about'}">Links</nuxt-link>-->
      <!--      </li>-->
    </ul>
    <nuxt-link
      class="
        flex flex-col sm:flex-row justify-center items-center
        my-2 sm:mx-2 md:mx-4 md:my-0
        px-4
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
    <ul>
      <li>
        <nuxt-link :to="{name: 'map'}">Map</nuxt-link>
      </li>
      <li>
        <nuxt-link :to="{name: 'team'}">Team</nuxt-link>
      </li>
      <li>
        <nuxt-link :to="{name: 'game'}">Game</nuxt-link>
      </li>
      <li>
        <nuxt-link :to="{name: 'contact'}">Contact</nuxt-link>
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
.nuxt-link-active {
  @apply text-secondary;
}

nav ul {
  @apply flex flex-col sm:flex-row sm:flex-wrap md:flex-nowrap w-1/3 md:w-full
  md:space-x-2 justify-end;
}

nav ul:last-of-type {
  @apply justify-start;
}

nav ul li {
  @apply
  flex items-center
  w-full sm:w-1/2 md:w-auto
  ;
}

nav ul li a {
  @apply
  p-1 sm:p-2 md:py-8 hover:bg-gray-50
  dark:hover:bg-transparent dark:hover:text-secondary
  whitespace-nowrap
  inline-block w-full
  text-right sm:text-center
  ;
}

nav ul:last-of-type li a {
  @apply text-left sm:text-center;
}

</style>
