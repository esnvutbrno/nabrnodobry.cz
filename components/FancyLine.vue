<template>
  <div
    class="
      w-full h-8 bg-repeat-x border-primary border-opacity-70 border-b-4
      bg-white dark:bg-primary
    "
    style="background-size: auto 70%; background-position: center center;"
    :style="{backgroundImage: `url(${require('@/assets/svg/line1.svg')})`}"></div>
</template>

<script>
export default {
  name: "FancyLine"
}
</script>

<style scoped>

</style>
