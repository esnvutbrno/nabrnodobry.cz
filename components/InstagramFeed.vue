<template>
  <section v-if="assets.length > 10" class="bg-primary">
    <a
      class="text-3xl md:text-4xl lg:text-5xl py-8 lg:py-10 text-white font-medium text-center block hover:underline"
      href="https://www.instagram.com/explore/tags/nabrnodobry2022/"
      rel="noopener,noreferer,nofollow"
      target="_blank"
    >
      <h3>
        #nabrnodobry2022
      </h3>
    </a>
    <div class="columns-[6rem] sm:columns-[10rem] md:columns-2xs gap-4 px-4 sm:px-8">
      <template v-for="a in assets">
        <img
          class="mb-4" loading="lazy"
          :src="a.fields.file.url + '?w=480'" alt=""
          :width="a.fields.file.details.image.width"
          :height="a.fields.file.details.image.height"
        >
      </template>
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
    const assets = await client.getAssets({
      order: '-sys.createdAt'
    });
    this.assets = assets.items.filter(i => i && i.fields.title && i.fields.title.startsWith('photo_')).slice(0, 20)
  }
}
</script>

<style scoped>

</style>
