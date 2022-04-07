<template>
  <main>
    <article class="mx-auto max-w-4xl p-8 text-lg text-justify" v-for="i in new Array(5)">

      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et inventore minus soluta. Dolore explicabo illo magnam
      molestiae, obcaecati qui? Assumenda commodi laudantium modi numquam quas repudiandae sint. Magni provident, quae.

      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et inventore minus soluta. Dolore explicabo illo magnam
      molestiae, obcaecati qui? Assumenda commodi laudantium modi numquam quas repudiandae sint. Magni provident, quae.

      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et inventore minus soluta. Dolore explicabo illo magnam
      molestiae, obcaecati qui? Assumenda commodi laudantium modi numquam quas repudiandae sint. Magni provident, quae.
    </article>
  </main>
</template>

<script>
import windowScrollPosition from "~/plugins/scroll";
import {map} from '~/utils/numbers'

export default {
  name: "IndexPage",
  data: () => ({headerHeight: 0}),
  mixins: [windowScrollPosition('scrollPosition')],
  methods: {
    mapNumber: (v, in1, in2, out1, out2) => map(v, in1, in2, out1, out2)
  },
  computed: {
    collapseRatio() {
      return map(
        (this.scrollPosition[1] / this.headerHeight),
        0, 0.8,
        0, 1,
      );
    }
  },
  mounted() {
    // this.headerHeight = this.$refs.header.offsetHeight;
  }
}
</script>


