<template>
  <article class="flex flex-row">
    <FancyLine class="w-8 border-b-0 bg-repeat-y h-full"
               style="background-size: 70% auto;"
               :style="{backgroundImage: `url(${require('~/assets/svg/line1-vertical.svg')})`}"/>
    <client-only>
      <l-map
        :zoom=13
        :center="[49.1996122, 16.6101164]"
      >
<!--        <l-tile-layer url="https://{s}.tile.osm.org/{z}/{x}/{y}.png"></l-tile-layer>-->
<!--        <l-tile-layer url="https://mapserver.mapy.cz/turist-m/{z}-{x}-{y}"></l-tile-layer>-->
<!--        http://stamen-tiles-a.a.ssl.fastly.net/toner-lite/12/657/1591@2x.png-->
        <l-tile-layer url="https://stamen-tiles-{s}.a.ssl.fastly.net/toner-lite/{z}/{x}/{y}.png"></l-tile-layer>

<!--        <l-marker :lat-lng="[55.9464418, 8.1277591]"></l-marker>-->
      </l-map>
    </client-only>
    <FancyLine class="w-8 border-b-0 bg-repeat-y h-full"
               style="background-size: 70% auto;"
               :style="{backgroundImage: `url(${require('~/assets/svg/line1-vertical.svg')})`}"/>
  </article>
</template>

<script>
export default {
  name: "map"
}
</script>

<style scoped>
article {
  height: 80vh;
}
</style>
