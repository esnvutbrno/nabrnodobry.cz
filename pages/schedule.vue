<template>
  <article class="max-w-2xl mx-auto">
    <section v-for="(v, i) in new Array(3)">
      <div
        class="flex flex-row items-center"
        :class="{'flex-row-reverse': i % 2}"
      >
        <h2 class="
          uppercase font-bold text-3xl
          py-4 inline-block
        ">Thursday</h2>
        <span class="flex-grow bg-secondary mx-4 h-1 rounded-full"></span>
      </div>
      <ul class="list-disc list-outside my-8 mx-auto w-full max-w-md">
        <li class="flex flex-row group" v-for="e in events">
          <span class="text-lg">{{ e[0] }}</span>
          <span class="
            flex-grow group-odd:bg-gray-100 h-0.5 rounded-full self-center
            mx-4
          "></span>
          <time>{{ e[1] }}</time>
        </li>
      </ul>
    </section>
  </article>
</template>

<script>
import RichTextRenderer from 'contentful-rich-text-vue-renderer';
import {createClient} from '~/plugins/contentful.js';


export default {
  name: "SchedulePage",
  components: {RichTextRenderer},
  async asyncData({env}) {
    const client = createClient();
    const events = await client.getEntries({
      content_type: 'event',
      // order: '-sys.createdAt',
    });

    return {
      events: [
        ['Registration', '4 PM - 7 PM'],
        ['Accommodation entrance', 'from 5 PM'],
        ['First workshop I Dunno the Name yet', '8 PM'],
      ]
    }
  },
};
</script>
