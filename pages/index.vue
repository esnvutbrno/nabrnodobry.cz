<template>
  <div>
    <div
      v-if="showCountdown"
      class="
        text-center text-2xl sm:text-4xl text-primary dark:text-white
        font-bold my-10 sm:my-20 block
      "
    >
      Brno gonna be dobrý in <br>
      <Countdown
        :end-time="startTime"
        class=""
      />
    </div>

    <nuxt-link
      v-if="currentEvent"
      :to="{name:'event-id', params: {id: currentEvent.sys.id}}"
      class="
        text-center text-2xl sm:text-4xl text-primary dark:text-white
        font-bold my-10 sm:my-20 block hover:underline
      "
    >
      right now: {{ currentEvent.fields.title }}
      <template v-if="currentEvent.fields.till">till {{ currentEvent.fields.till }}</template>
    </nuxt-link>
    <nuxt-link
      v-if="nextEvent"
      :to="{name:'event-id', params: {id: nextEvent.sys.id}}"
      class="
        text-center text-lg dark:text-white
        font-bold my-10 sm:my-20 block hover:underline
      "
    >
      next: {{ nextEvent.fields.title }} from {{ nextEvent.fields.from }}
    </nuxt-link>

    <Announcements/>

    <!--    -->
    <!--    <article class="text-lg text-justify" v-for="i in new Array(5)">-->
    <!--      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et inventore minus soluta. Dolore explicabo illo magnam-->
    <!--      molestiae, obcaecati qui? Assumenda commodi laudantium modi numquam quas repudiandae sint. Magni provident, quae.-->

    <!--      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et inventore minus soluta. Dolore explicabo illo magnam-->
    <!--      molestiae, obcaecati qui? Assumenda commodi laudantium modi numquam quas repudiandae sint. Magni provident, quae.-->

    <!--      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et inventore minus soluta. Dolore explicabo illo magnam-->
    <!--      molestiae, obcaecati qui? Assumenda commodi laudantium modi numquam quas repudiandae sint. Magni provident, quae.-->
    <!--    </article>-->
  </div>
</template>

<script>
import {DateTime, Duration} from '@/utils/date';
import {createClient} from "@/plugins/contentful";
import _ from 'lodash'

export default {
  name: "IndexPage",
  async asyncData() {
    const client = createClient();

    const events = (await client.getEntries({
      content_type: 'event',
      order: 'fields.when',
      select: 'sys.id,fields.when,fields.title,fields.length'
    })).items;

    return {
      startTime: events[0].fields.when,
      events: events,
    }
  },
  computed: {
    showCountdown() {
      return DateTime.now() < this.startTime
    },
    currentEventIndex() {
      return _.findLastIndex(
        this.events,
        (e, i) => e.fields.when <= this.now
      )
    },
    currentEvent() {
      const event = this.currentEventIndex >= 0 ? this.events[this.currentEventIndex] : undefined;
      if (!event) return;
      if (!event.fields.end) return event;
      if (event.fields.end > this.now) return event;
    },
    nextEvent() {
      const next = this.currentEventIndex >= 0 ? this.events[this.currentEventIndex + 1] : null;
      if (next) return next;
      if (this.now < this.startTime) return this.events[0];
    },
    now() {
      // return DateTime.fromObject({year: 2022, month: 5, day: 12, hour: 15, minute: 15})
      return DateTime.now()
    }
  },
  created() {
    this.startTime = DateTime.fromISO(this.startTime);
    this.events = this.events.map(e => {
      e.fields.when = DateTime.fromISO(e.fields.when);
      e.fields.end = e.fields.length ? e.fields.when.plus(Duration.fromObject({minutes: e.fields.length})) : undefined;
      e.fields.from = e.fields.when.toFormat('t').replace(':00', '')
      e.fields.till = e.fields.end ? e.fields.end.toFormat('t').replace(':00', '') : '';
      return e;
    })
  }
}
</script>


