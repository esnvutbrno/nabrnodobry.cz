<template>
  <div class="min-h-[40vh] flex flex-col justify-center items-center gap-8 px-8">
    <h1 class="font-esn text-primary font-bold text-5xl text-center">
      {{ error.message }}
    </h1>
    <span class="font-mono text-xs text-gray-500">
        {{ $route.fullPath }}
    </span>
    <NuxtLink
      class="text-center text-xl hover:underline border-primary
      border-2 uppercase p-2 rounded font-medium text-primary"
      to="/"
    >back to homepage
    </NuxtLink>
  </div>
</template>

<script>
export default {
  props: ['error'],
}
</script>

<style scoped>

</style>
