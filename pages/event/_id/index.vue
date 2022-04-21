<template>
  <div>
    <button
      class="bg-primary text-white uppercase
      p-2 my-2 text-center rounded block w-full font-bold"
      @click="goBack"
    >
      < back to schedule
    </button>

    <h1 class="py-4 mb-4 border-b-4 border-secondary text-primary dark:text-white
        font-bold flex flex-col sm:flex-row justify-between items-center">
      <span class="text-4xl">{{ event.fields.title }}</span>
      <span class="text-3xl">
        {{ dayName }}, {{ fromTime }} <template v-if="toTime">– {{ toTime }}</template></span>
    </h1>

    <div class="flex flex-col-reverse md:flex-row justify-between gap-x-4">
      <div class="w-auto md:w-2/3 prose prose-p:text-justify dark:prose-invert">
        <RichTextRenderer
          v-if="event.fields.description"
          :document="event.fields.description"
          :nodeRenderers="nodeRenderers"
        ></RichTextRenderer>
      </div>

      <div class="w-auto md:w-1/3 flex-row-reverse md:flex-col items-center">
        <img
          v-if="event.fields.photo"
          :src="event.fields.photo.fields.file.url"
          :width="event.fields.photo.fields.file.details.image.width"
          :height="event.fields.photo.fields.file.details.image.height"
          :alt="event.fields.title"
          class="w-1/2 md:w-full mx-auto"
        >
        <nuxt-link
          v-if="event.fields.place && event.fields.place.fields.title"
          :to="{name: 'map', hash: '#' + event.fields.place.sys.id}"
          class="my-4 gap-2 flex flex-row items-center justify-center p-2 rounded border border-primary dark:border-white"
        >
          <img src="../../../assets/svg/place.svg" alt="" class="h-8 w-8 dark:black-to-white">
          <span
            class="text-lg font-bold"
          >
            {{ event.fields.place.fields.title }}
          </span>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>

import RichTextRenderer from "contentful-rich-text-vue-renderer";
import {createClient} from "@/plugins/contentful";

const {DateTime, Duration, Settings} = require("luxon");

Settings.defaultLocale = "en-US";

DateTime.defaultZone = 'en-US';

export default {
  name: "EventDetailPage",
  components: {RichTextRenderer},
  async asyncData({params}) {
    const client = createClient();

    const event = await client.getEntry(params.id)

    const when = DateTime.fromISO(event.fields.when);
    const dayName = when.startOf('day').toFormat('ccc')
    const fromTime = when.toFormat('t').replace(':00', '')
    const toTime = event.fields.length ?
      when.plus(Duration.fromObject({minutes: event.fields.length})).toFormat('t')
        .replace(':00', '') :
      ''
    ;

    return {
      event,
      dayName,
      fromTime,
      toTime,
    };
  },
  data: () => ({
    nodeRenderers: {
      'embedded-asset-block': (node, key, c, next) => `${node} ${key}`,
      'hyperlink': (node, key, c, next) => {
        if (node.data.uri.startsWith('https://www.youtube.com/embed/')) {
          return c(
            'iframe',
            {
              key,
              attrs: {
                frameBorder: "0",
                allow: "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; fullscreen",
                src: node.data.uri,
                class: 'aspect-video w-full',
              }
            },
          )
        } else {
          // stolen from original renderer
          return c(
            'a',
            {
              key,
              attrs: {
                href: node.data.uri
              }
            },
            next(node.content, key, c, next)
          )
        }
      },
    }
  }),
  head() {
    return {
      title: this.event.fields.title
    };
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
