<template>
  <article class="flex flex-row justify-between">
    <FancyLine
      class="w-8 border-b-0 bg-repeat-y h-full"
      style="background-size: 70% auto;"
      :style="{backgroundImage: `url(${require('~/assets/svg/line1-vertical.svg')})`}"
    />
    <client-only>
      <l-map
        :zoom=14
        :center="[49.1996122, 16.59]"
      >
        <!--        <l-tile-layer url="https://{s}.tile.osm.org/{z}/{x}/{y}.png"></l-tile-layer>-->
        <!--        <l-tile-layer url="https://mapserver.mapy.cz/turist-m/{z}-{x}-{y}"></l-tile-layer>-->
        <!--        http://stamen-tiles-a.a.ssl.fastly.net/toner-lite/12/657/1591@2x.png-->
        <l-tile-layer url="https://stamen-tiles-{s}.a.ssl.fastly.net/toner-lite/{z}/{x}/{y}.png"></l-tile-layer>

        <l-marker
          v-for="p in places"
          :key="p.sys.id"
          :lat-lng="[p.fields.position.lat, p.fields.position.lon]"
        >
          <l-popup>{{ p.fields.title }}</l-popup>
        </l-marker>
      </l-map>
    </client-only>
    <FancyLine
      class="w-8 border-b-0 bg-repeat-y h-full transition-opacity"
      style="background-size: 70% auto;"
      :style="{backgroundImage: `url(${require('~/assets/svg/line1-vertical.svg')})`}"
    />
  </article>
</template>

<script>
import {createClient} from "~/plugins/contentful";

export default {
  name: "MapPage",
  transition: {
    name: 'page',
    mode: 'out-in'
  },
  async asyncData() {
    const client = createClient();
    const places = await client.getEntries({
      content_type: 'place',
      // order: '-sys.createdAt',
    });
    return {places: places.items}
  }
}
</script>

<style scoped>
article {
  height: 80vh;
}
</style>

<style>
.leaflet-popup-tip,
.leaflet-popup-content-wrapper {
  /*background: pink;*/
  /*color: red;*/
}
</style>
