<template>
  <div class="max-w-xl mx-auto">
    <h1 class="text-3xl text-center p-3 bg-blue-600 text-white">NA Brno dobrý 2022</h1>
    <h3 class="text-xl text-gray-500">Events:</h3>
    <ul class="divide-indigo-400">
      <li v-for="event in events">
        {{ event.fields.title }}
        <RichTextRenderer
          v-if="event.fields.description"
          :document="event.fields.description"
        />
        <img
          v-if="event.fields.thumbnail"
          :src="event.fields.thumbnail.fields.file.url" class="max-w-md mx-auto"
          :alt="event.fields.title"
        >
      </li>
    </ul>
  </div>
</template>

<script>
import RichTextRenderer from 'contentful-rich-text-vue-renderer';
import {createClient} from '~/plugins/contentful.js';

const client = createClient();

export default {
  components: {RichTextRenderer},
  async asyncData({env}) {
    const events = await client.getEntries({
      content_type: 'event',
      // order: '-sys.createdAt',
    });

    return {events: events.items}
  },
};
</script>
