<template>
  <div class="max-w-3xl mx-auto">
    <ul class="divide-indigo-400 space-y-8">
      <li v-for="event in events" class="prose lg:prose-xl">
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
