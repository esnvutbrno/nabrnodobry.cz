<template>
  <article>
    <section v-for="(data, i) in byDays">
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
          :class="{
            'bg-primary text-white': e.fields.state === 'current',
            [`state-${e.fields.state}`]: true,
          }"
          @click="$router.push({name: 'event-id', params: {id: e.sys.id}})"
        >
          <span
            :class="{
              'text-white dark:text-white': e.fields.state === 'current',
              'text-gray-500 dark:text-gray-500': e.fields.state === 'finished',
            }"
            class="
              lg:text-lg flex-grow sm:flex-grow-0
              text-primary font-bold dark:text-white
            "
          >
            {{ e.fields.title }}
          </span>

          <span class="flex-grow"></span>
          <!--          <span class="-->
          <!--            flex-grow group-odd:bg-gray-100 h-0.5 rounded-full self-center-->
          <!--            mx-4 hidden sm:block-->
          <!--          "></span>-->

          <span
            v-if="e.fields.place && e.fields.place.fields.title"
            :class="{'text-gray-500': e.fields.state === 'finished'}"
            class="self-end flex flex-row gap-1 items-center mr-0 sm:mr-2"
          >
            <img
              :class="{
                'black-to-white': e.fields.state === 'current',
              }"
              alt="Place"
              class="w-4 w-4 dark:black-to-white"
              src="~/assets/svg/place.svg"
            >
            {{ e.fields.place.fields.title }}
          </span>

          <time
            :class="{'text-gray-500': e.fields.state === 'finished'}"
            class="self-end flex flex-row gap-1 items-center min-w-auto sm:min-w-[10rem]"
          >
            <img
              :class="{
                'black-to-white': e.fields.state === 'current',
              }"
              alt="Time"
              class="w-3 w-3 dark:black-to-white"
              src="~/assets/svg/time.svg"
            >
            {{ e.fields.from }}
            <span v-if="e.fields.till" class="text-sm text-gray-500">– {{ e.fields.till }}</span>
          </time>
        </li>
      </ul>
    </section>
  </article>
</template>

<script>
import RichTextRenderer from 'contentful-rich-text-vue-renderer';
import {mapGetters, mapState} from "vuex";


export default {
  name: "SchedulePage",
  components: {RichTextRenderer},
  computed: {
    ...mapGetters('events', ['byDays', 'currentEvent']),
    ...mapState('events', ['events']),
  },
  head() {
    return {
      title: 'Schedule'
    };
  },
};
</script>

<style scoped>
.state-finished {
  position: relative;
}

.state-finished:before {
  /* for now */
  display: none;
  position: absolute;
  right: calc(100% + .5rem);
  top: 0;
  bottom: 0;
  content: ' ';
  background: url('assets/svg/event-finished.svg') no-repeat center center;
  background-size: 100% 100%;
  padding-right: 1rem;
  width: 2rem;
}
</style>
