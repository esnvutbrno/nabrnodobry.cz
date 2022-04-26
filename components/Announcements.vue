<template>
  <div v-if="announcements.length">
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
          mb-2 flex flex-col justify-between bg-gray-100 rounded
          break-inside-avoid-column
          dark:bg-gray-800 group
        "
      >
        <div
          v-if="a.fields.content"
          v-html="$md.render(a.fields.content)"
          :class="{'group-hover:blur-sm max-h-40': a.fields.link}"
          class="
            prose prose-sm md:prose-base dark:prose-invert overflow-hidden relative
            p-2
            transition-all
          "
        />
        <div class="flex flex-row items-center">
          <div v-for="p in a.fields.photos">
            <img
              :src="p.fields.file.url + '?w=320'"
              :width="p.fields.file.details.image.width"
              :height="p.fields.file.details.image.height"
              loading="lazy"
            >
          </div>
        </div>
        <div class="flex flex-row justify-between items-center text-gray-600 py-2 px-2">
          <a class="
            flex flex-row items-center gap-x-1
            hover:underline text-primary dark:text-white text-sm group-hover:text-secondary
          "
             :class="{'invisible': !a.fields.link}" :href="a.fields.link">
            <svg class="h-3 w-3" viewBox="0 0 194.818 194.818" xml:space="preserve"
                 xmlns="http://www.w3.org/2000/svg"><path d="M185.818 2.161h-57.04c-4.971 0-9 4.029-9 9s4.029 9 9 9h35.312l-86.3 86.3a9 9 0 0 0 6.364 15.364 8.975 8.975 0 0 0 6.364-2.636l86.3-86.3v35.313c0 4.971 4.029 9 9 9s9-4.029 9-9v-57.04a9 9 0 0 0-9-9.001z" fill="currentColor"/>
              <path
                d="M149 77.201a9 9 0 0 0-9 9v88.456H18v-122h93.778c4.971 0 9-4.029 9-9s-4.029-9-9-9H9a9 9 0 0 0-9 9v140a9 9 0 0 0 9 9h140a9 9 0 0 0 9-9V86.201a9 9 0 0 0-9-9z"
                fill="currentColor"/></svg>
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

import {DateTime} from "@/utils/date";

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

