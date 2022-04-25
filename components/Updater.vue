<template>

</template>

<script>
export default {
  name: "Updater",
  data: () => ({
    timer: null,
    version: null,
  }),
  methods: {
    async check() {
      const version = (
        await this.$axios.get('/version.json')
      ).data.version;

      if (version !== this.version)
        window.location.reload()
    }
  },
  async mounted() {
    // check once per 2 minutes
    this.timer = setInterval(
      this.check,
      1000 * 60 * 3
    )

    try {
      this.version = (
        await this.$axios.get('/version.json')
      ).data.version;
    } catch (e) {
      clearInterval(this.timer)
    }
  },
  beforeDestroy() {
    this.timer && clearInterval(this.timer)
  }
}
</script>

<style scoped>

</style>
