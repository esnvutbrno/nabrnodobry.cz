<template>
  <article>
    <section v-for="(data, i) in days">
      <div
        class="flex flex-row items-center"
        :class="{'flex-row-reverse': i % 2}"
      >
        <!--        <nuxt-link-->
        <!--          class="uppercase font-bold text-3xl py-4 inline-block"-->
        <!--          :to="{name: 'schedule-day', params: {day: data[1][0].fields.dayName}}"-->
        <!--        >-->
        <!--          {{ data[1][0].fields.dayName }}-->
        <!--        </nuxt-link>-->
        <h2 class="
          uppercase font-bold text-3xl
          py-4 inline-block
        ">{{ data[1][0].fields.dayName }}</h2>
        <span class="flex-grow bg-secondary mx-4 h-1 rounded-full"></span>
      </div>
      <ul class="
        list-disc list-outside my-4 md:my-8 mx-auto w-full max-w-lg
        flex flex-col gap-y-2
      ">
        <li
          class="
            p-2 flex flex-col sm:flex-row group cursor-pointer
            odd:bg-gray-100 odd:hover:bg-gray-200
            hover:bg-gray-100
            dark:odd:bg-gray-800 dark:hover:bg-gray-800 dark:odd:hover:bg-gray-700
          "
          v-for="e in data[1]"
          @click="$router.push({name: 'event-id', params: {id: e.sys.id}})"
        >
          <span class="lg:text-lg flex-grow sm:flex-grow-0 text-primary font-bold dark:text-white">
            {{ e.fields.title }}
          </span>

          <span class="flex-grow"></span>
          <!--          <span class="-->
          <!--            flex-grow group-odd:bg-gray-100 h-0.5 rounded-full self-center-->
          <!--            mx-4 hidden sm:block-->
          <!--          "></span>-->

          <span class="self-end flex flex-row gap-1 items-center mr-0 sm:mr-2"
                v-if="e.fields.place && e.fields.place.fields.title">
            <img src="~/assets/svg/place.svg" alt="Place" class="w-4 w-4 dark:black-to-white">
            {{ e.fields.place.fields.title }}
          </span>

          <time class="self-end flex flex-row gap-1 items-center min-w-auto sm:min-w-[10rem]">
            <img src="~/assets/svg/time.svg" alt="Time" class="w-3 w-3 dark:black-to-white">
            {{ e.fields.fromTime }}
            <span v-if="e.fields.toTime" class="text-sm text-gray-500">– {{ e.fields.toTime }}</span>
          </time>
        </li>
      </ul>
    </section>
  </article>
</template>

<script>
import RichTextRenderer from 'contentful-rich-text-vue-renderer';
import {createClient} from '~/plugins/contentful.js';
import _ from 'lodash'
import {DateTime, Duration} from "@/utils/date";


export default {
  name: "SchedulePage",
  components: {RichTextRenderer},
  async asyncData({env}) {
    const client = createClient();
    const events = await client.getEntries({
      content_type: 'event',
      order: 'fields.when',
    });

    const days = _.sortBy(
      _.toPairs(
        _.groupBy(
          _.filter(events.items, 'fields.when').map(
            v => {
              const when = DateTime.fromISO(v.fields.when);
              v.fields.day = when.startOf('day').toFormat('D')
              v.fields.dayName = when.startOf('day').toFormat('cccc')
              v.fields.fromTime = when.toFormat('t').replace(':00', '')
              v.fields.toTime = v.fields.length ?
                when.plus(Duration.fromObject({minutes: v.fields.length})).toFormat('t').replace(':00', '') :
                ''
              ;
              return v;
            }
          ),
          'fields.day',
        )
      ),
      '0'
    )


    return {
      events: events.items,
      items: events.items,
      days,
    }
  },
  head() {
    return {
      title: 'Schedule'
    };
  },
};
</script>
