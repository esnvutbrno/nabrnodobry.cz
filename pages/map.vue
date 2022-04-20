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
        @hook:mounted="mapInitialization"
        :zoom=14 :min-zoom=7
        :max-bounds="[[51.2, 12], [48.5, 19]]"
        :center="[49.1996122, 16.59]"
        ref="map"
        class="h-auto-important"
      >
        <l-tile-layer url="https://stamen-tiles-{s}.a.ssl.fastly.net/toner/{z}/{x}/{y}.png"></l-tile-layer>


        <!--                <l-tile-layer url="https://{s}.tile.osm.org/{z}/{x}/{y}.png"></l-tile-layer>-->
        <l-tile-layer url="https://mapserver.mapy.cz/turist-m/{z}-{x}-{y}"></l-tile-layer>
        <!--        http://stamen-tiles-a.a.ssl.fastly.net/toner-lite/12/657/1591@2x.png-->

        <l-tile-layer url="https://stamen-tiles-{s}.a.ssl.fastly.net/toner-lite/{z}/{x}/{y}.png"></l-tile-layer>
<!--        <l-control-layers position="topright"></l-control-layers>-->

        <l-marker
          v-for="p in places"
          :key="p.sys.id"
          :lat-lng="[p.fields.position.lat, p.fields.position.lon]"
        >
          <l-popup>{{ p.fields.title }}</l-popup>
        </l-marker>
        <LGPX
          :gpx-file="track"
          :gpx-options="gpxOptions"
        />
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
  components: {
    LGPX: process.client ? require('vue2-leaflet-gpx') : null,
  },
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
    return {
      places: places.items,
      track: require('raw-loader!~/assets/gpx/main-train-to-vinarska.gpx').default,
    }
  },
  data() {
    return {
      gpxOptions: {
        polyline_options: {
          color: '#f90093',
          opacity: 0.5,
          weight: 4,
          lineCap: 'round'
        },
        marker_options: {
          pointMatchers: process.client ? [
            {
              regex: /[^]*/,
              icon: this.$L.divIcon({className: 'h-10 w-10 bg-secondary rounded-full opacity-50'}),
            }
          ] : [],
        },
      },
    }
  },
  head() {
    return {
      title: 'Map'
    };
  },
  methods: {
    mapInitialization() {
      const map = this.$refs.map

      map.fitBounds(this.places.map(p => [
        p.fields.position.lat,
        p.fields.position.lon,
      ]))
    }
  }
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
