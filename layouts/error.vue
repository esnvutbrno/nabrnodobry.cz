<template>
  <div class="min-h-[40vh] flex flex-col justify-center items-center gap-8 px-8">
    <span class="font-bold text-4xl md:text-8xl text-secondary">
      😞
    </span>
    <h1 class="font-esn text-primary dark:text-white font-bold font-4xl md:text-5xl text-center">
      {{ error.message }}
    </h1>
    <span class="font-mono text-xs text-gray-500 dark:text-gray-200">
        {{ $route.fullPath }}
    </span>
    <NuxtLink
      class="
        text-center text-xl hover:underline border-current text-secondary
        border-2 uppercase p-2 rounded font-medium
      "
      to="/"
    >
      back to homepage
    </NuxtLink>
    <span class="text-lg text-gray-500">
      P.S. If you think this page should exist, please
      <a
        class="underline hover:text-gray-700 dark:hover:text-gray-300"
        href="https://t.me/thejoeejoee"
        target="_blank"
      >contact us</a>.
    </span>
  </div>
</template>

<script>
export default {
  props: ['error'],
  head() {
    return {title: 'Something wrong'}
  },
  created() {
    if ((this.error.message || '').includes('Expected parameter') && !this.$nuxt.isOffline && process.client) {
      window.location.reload()
    }
  }
}
</script>

