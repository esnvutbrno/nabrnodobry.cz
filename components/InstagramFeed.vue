<template>
  <section class="bg-primary">
    <div class="max-w-4xl mx-auto flex flex-row flex-wrap py-4 space-x-2 space-y-2">
      <div v-for="a in assets" class="w-1/3 lg:w-1/4">
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
    this.assets = assets.items.filter(i => i && i.fields.title.startsWith('IG'))
  }
}
</script>

<style scoped>

</style>
