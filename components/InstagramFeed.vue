<template>
  <section class="bg-primary">
    <h3 class="text-3xl py-8 text-white font-medium text-center">#nabrnodobry</h3>
    <div class="max-w-4xl mx-auto flex flex-row flex-wrap px-4 sm:px-8">
      <div v-for="a in assets" class="w-1/3 lg:w-1/4 p-2">
        <img :src="a.fields.file.url" alt="">
      </div>
    </div>

  </section>
</template>

<script>
import {createClient} from "@/plugins/contentful";

export default {
  name: "InstagramFeed",
  data() {
    return {
      assets: []
    }
  },
  async fetch() {
    const client = createClient();
    const assets = await client.getAssets();
    this.assets = assets.items.filter(i => i && i.fields.title && i.fields.title.startsWith('IG'))
  }
}
</script>

<style scoped>

</style>
