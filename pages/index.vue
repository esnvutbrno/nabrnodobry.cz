<template>
  <div class="max-w-xl mx-auto">
    <h1 class="text-3xl text-center p-3 bg-blue-600 text-white">NA Brno dobrý 2022</h1>
    <h3 class="text-xl text-gray-500">Events:</h3>
    <ul class="divide-indigo-400">
      <li v-for="event in events">
        {{ event.fields.title }}
        <img :src="event.fields.thumbnail.fields.file.url" class="max-w-full" :alt="event.fields.title">
      </li>
    </ul>
  </div>
</template>

<script>
import {createClient} from '~/plugins/contentful.js';

const client = createClient();

export default {
  async asyncData({env}) {
    const events = await client.getEntries({
      content_type: 'event',
      // order: '-sys.createdAt',
    });

    console.log(events.items)

    return {events: events.items}
  },
};
</script>
