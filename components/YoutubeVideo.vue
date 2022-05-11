<template>
  <iframe
    :src="`https://www.youtube.com/embed/${id}`"
    :title="title || 'Youtube Video'"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen
    class="w-full aspect-video"
  ></iframe>
</template>

<script>
export default {
  name: "YoutubeVideo",
  props: ['id', 'title'],
}
</script>

<style scoped>

</style>
