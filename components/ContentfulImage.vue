<template>
  <div
    :style="{backgroundImage: `url(${url})`}"
    class="bg-contain"
  ></div>
</template>

<script>
export default {
  name: "ContentfulImage",
  props: ['asset', 'default'],
  computed: {
    url() {
      if (!this.asset) {
        return this.default || '';
      }
      // &f=face
      return `${this.asset.fields.file.url}?fm=jpg&fl=progressive&f=faces&fit=thumb&w=360&h=360`
    }
  }
}
</script>

<style scoped>

</style>
