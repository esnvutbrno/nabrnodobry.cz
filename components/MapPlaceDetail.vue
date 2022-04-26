<template>
  <div class="
    absolute
    text-white
    right-10 bottom-2 left-10 md:left-auto
    z-[2000]
    flex flex-col justify-between
  ">
    <h2 class="
      p-5 rounded-t bg-primary
      text-lg font-esn font-bold
      flex flex-row justify-between items-center
    ">
      <span>{{ place.fields.title }}</span>
      <span class="cursor-pointer" @click="$emit('close')">&cross;</span>
    </h2>
    <img
      v-if="place.fields.photo"
      :src="place.fields.photo.fields.file.url"
      :width="place.fields.photo.fields.file.details.image.width"
      :height="place.fields.photo.fields.file.details.image.height"
      :alt="place.fields.title" loading="lazy"
      class="md:max-w-[35vw]"
    >
    <div class="p-5 rounded-b bg-primary text-center">
      <a
        class="border border-white py-2 px-2 rounded uppercase font-bold inline-block"
        :href="directionsUrl"
      >
        directions there
      </a>
    </div>
  </div>
</template>
<script>
export default {
  name: 'MapPlaceDetail',
  props: {
    place: Object,
  },
  computed: {
    directionsUrl() {
      return `https://maps.apple.com/maps?q=${[this.place.fields.position.lat, this.place.fields.position.lon].join(',')}`
    }
  }
}
</script>
