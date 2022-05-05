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
      <EventList :events="data[1]" class="my-4 md:my-8"/>
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
