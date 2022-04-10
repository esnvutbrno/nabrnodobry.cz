<template>
  <div>
    <button
      class="bg-primary text-white uppercase
      p-2 my-2 text-center rounded block w-full font-bold"
      @click="goBack"
    >
      < back to schedule
    </button>

    <h1 class="text-xl py-2 border-b-4 border-secondary">
      {{ event.fields.title }}

    </h1>

  </div>
</template>

<script>

import RichTextRenderer from "contentful-rich-text-vue-renderer";
import {createClient} from "@/plugins/contentful";

export default {
  name: "EventDetail",
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
