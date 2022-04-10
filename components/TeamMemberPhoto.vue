<template>
  <nuxt-picture
    v-if="asset"
    format="webp"
    provider="contentful"
    :src="asset.fields.file.url"
    :width="180"
    :height="180"
    fit="thumbnail"
    :modifiers="{focus: 'faces'}"
    :imgAttrs="{class: 'rounded-full transition-transform duration-300 ease-in-out hover:scale-110'}"
  />
  <img v-else src="~assets/img/woman-icon.png"
       class="rounded-full" width="512" height="512">
</template>

<script>
export default {
  name: "TeamMemberPhoto",
  props: {
    asset: {type: Object},
  },
}
</script>

<style scoped>

</style>
