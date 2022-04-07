<template>
  <article>
    <client-only>
      <l-map
        :zoom=13
        :center="[49.1996122, 16.6101164]"
      >
        <l-tile-layer url="https://{s}.tile.osm.org/{z}/{x}/{y}.png"></l-tile-layer>
<!--        <l-tile-layer url="https://mapserver.mapy.cz/turist-m/{z}-{x}-{y}"></l-tile-layer>-->

<!--        <l-marker :lat-lng="[55.9464418, 8.1277591]"></l-marker>-->
      </l-map>
    </client-only>
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
