<template>
  <span v-if="rest">
    {{ rest.toHuman({ listStyle: 'long', unitDisplay: "long", maximumFractionDigits: 0 }) }}
  </span>
</template>

<script>
const {DateTime, Duration, Settings} = require("luxon");

Settings.defaultLocale = "en-US";

DateTime.defaultZone = 'en-US';

export default {
  name: "Countdown",
  props: {
    endTime: DateTime,
  },
  data: () => ({
    timer: null,
    rest: null,
  }),
  created() {
    this.tick()
  },
  destroyed() {
    this.timer && clearTimeout(this.timer)
  },
  methods: {
    tick() {
      this.rest = this.endTime.diffNow(["days", "hours", "minutes", "seconds"])
      setTimeout(this.tick, 1000)
    }
  },
}
</script>

<style scoped>

</style>
