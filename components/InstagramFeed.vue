<template>
  <section class="bg-primary">
    <a class="text-3xl py-8 text-white font-medium text-center block hover:underline" href="">
      <h3>
        #nabrnodobry2022
      </h3>
    </a>
    <div class="max-w-4xl mx-auto flex flex-row flex-wrap px-4 sm:px-8">
      <div v-for="a in assets" class="w-1/3 lg:w-1/4 p-2">
        <img :src="a.fields.file.url" alt=""
             :width="a.fields.file.details.image.width"
             :height="a.fields.file.details.image.height"
        >
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
