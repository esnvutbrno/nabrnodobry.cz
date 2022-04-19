<template>
  <div>
    <div class="flex flex-row items-center my-6">
      <div class="flex-grow h-1 bg-secondary rounded-full"></div>
      <h2 class="text-xl md:text-3xl font-bold text-primary dark:text-white mx-4">Announcements</h2>
      <div class="flex-grow h-1 bg-secondary rounded-full"></div>
    </div>
    <div class="
      columns-[12rem] md:columns-[16rem] gap-2
    ">
      <div
        v-for="a in announcements"
        class="
          p-1.5 mb-2 flex flex-col justify-between bg-gray-100 rounded
          break-inside-avoid-column
          dark:bg-gray-800
        "
      >
        <div
          v-if="a.fields.content"
          v-html="$md.render(a.fields.content)"
          class="
            prose prose-sm md:prose-base dark:prose-invert max-h-40 overflow-hidden relative pb-4
            after:absolute after:bottom-0 after:h-10 after:w-full
            after:bg-gradient-to-t after:to-transparent after:from-gray-100 dark:after:from-gray-800
          "
        />
        <div class="flex flex-row flex-wrap">
          <div v-for="p in a.fields.photos" class="w-1/2">
            <img
              :src="p.fields.file.url + '?w=200'"
              :width="p.fields.file.details.image.width"
              :height="p.fields.file.details.image.height"
            >
          </div>
        </div>
        <div class="flex flex-row justify-between items-center text-gray-600 py-1">
          <a class="hover:underline text-primary dark:text-white text-sm"
             :class="{'invisible': !a.fields.link}" :href="a.fields.link">
            Go to Message
          </a>
          <time class="text-xs" :title="a.fields.dateLocal">{{ a.fields.dateRel }}</time>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {createClient} from "@/plugins/contentful";

import {DateTime, Duration} from "@/utils/date";

export default {
  name: "Announcements",
  data: () => ({announcements: []}),
  async fetch() {
    const client = createClient();

    const announcements = await client.getEntries({
      content_type: 'announcement',
      order: '-sys.createdAt',
      'fields.content[exists]': true,
      limit: 10,
    })

    this.announcements = announcements.items.map(v => {
      const updated = DateTime.fromISO(v.sys.updatedAt);
      v.fields.dateRel = updated.toRelative()
      v.fields.dateLocal = updated.toLocaleString(DateTime.DATETIME_SHORT)
      return v;
    })
  }
}
</script>

