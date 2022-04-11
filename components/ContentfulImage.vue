<template>
<!--  <div-->
<!--    :style="{backgroundImage: `url(${url})`}"-->
<!--    class="bg-contain"-->
<!--  ></div>-->
  <img :src="url" width="180" height="180">
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
      return `${this.asset.fields.file.url}?fm=jpg&fl=progressive&f=faces&fit=thumb&w=180&h=180`
    }
  }
}
</script>

<style scoped>

</style>
