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
        :end-time="countdownTo"
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
import {DateTime} from '@/utils/date';
import {mapActions, mapGetters, mapState} from 'vuex'

export default {
  name: "IndexPage",
  async fetch({store}) {
    await store.dispatch('events/loadEvents');
  },
  methods: {
    ...mapActions('events', ['loadEvents']),
  },
  computed: {
    ...mapGetters('events', [
      "currentEvent",
      "nextEvent",
    ]),
    ...mapState('events', [
      'startTime',
      'now',
      'events',
    ]),
    countdownTo() {
      return new DateTime(this.startTime)
    },
    showCountdown() {
      return this.now < this.startTime
    },
  },
}
</script>


