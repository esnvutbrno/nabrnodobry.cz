<template>
  <div>
    <button
      class="bg-primary text-white uppercase
      p-2 my-2 text-center rounded block w-full font-bold"
      @click="goBack"
    >
      < back to schedule
    </button>

    <h1 class="text-4xl py-2 mb-2 border-b-4 border-secondary text-primary dark:text-white font-bold">
      {{ event.fields.title }}
    </h1>

    <p v-if="event.fields.description" class="prose dark:prose-invert">
      <RichTextRenderer
        :document="event.fields.description"
        :nodeRenderers="{'embedded-asset-block': (node, key, c, next) => `${node} ${key}`}"
      ></RichTextRenderer>
    </p>

  </div>
</template>

<script>

import RichTextRenderer from "contentful-rich-text-vue-renderer";
import {createClient} from "@/plugins/contentful";

export default {
  name: "EventDetailPage",
  components: {RichTextRenderer},
  async asyncData({params}) {
    const client = createClient();

    const event = await client.getEntry(params.id)

    return {event};
  },
  methods: {
    goBack() {
      window.history.length > 1 ?
        this.$router.go(-1) :
        this.$router.push({name: 'schedule'})
    }
  }
}
</script>

<style scoped>

</style>
