<template>
  <article class="
      flex-grow flex flex-row items-stretch justify-between
      bg-gray-200 dark:bg-gray-800
    ">
    <FancyLine
      class="w-8 border-b-0 bg-repeat-y h-auto"
      :class="{'h-8': false}"
      style="background-size: 70% auto;"
      :style="{backgroundImage: `url(${require('~/assets/svg/line1-vertical.svg')})`}"
    />
    <client-only>
      <l-map
        class="h-auto-important"
        :zoom=14
        :center="[49.1996122, 16.59]"
      >
<!--                <l-tile-layer url="https://{s}.tile.osm.org/{z}/{x}/{y}.png"></l-tile-layer>-->
<!--                <l-tile-layer url="https://mapserver.mapy.cz/turist-m/{z}-{x}-{y}"></l-tile-layer>-->
        <!--        http://stamen-tiles-a.a.ssl.fastly.net/toner-lite/12/657/1591@2x.png-->
        <l-tile-layer url="https://stamen-tiles-{s}.a.ssl.fastly.net/toner/{z}/{x}/{y}.png"></l-tile-layer>
<!--        <l-tile-layer url="https://stamen-tiles-{s}.a.ssl.fastly.net/toner-lite/{z}/{x}/{y}.png"></l-tile-layer>-->

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
      class="w-8 border-b-0 bg-repeat-y h-auto"
      :class="{'h-8': false}"
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
  },
  head() {
    return {
      title: 'Map'
    };
  },
}
</script>

<style>
.h-auto-important {
  height: auto !important;
}

</style>
<style>
.leaflet-popup-tip,
.leaflet-popup-content-wrapper {
  /*background: pink;*/
  /*color: red;*/
}
.dark .leaflet-tile-container img {
  /* inspired by https://github.com/xtk93x/Leaflet.TileLayer.ColorFilter */
  filter: hue-rotate(180deg) brightness(120%) invert(100%);
}
</style>
