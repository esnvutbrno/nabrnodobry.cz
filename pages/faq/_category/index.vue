<template>
  <Questions
    :category="$route.params.category"
  />
</template>

<script>


import {mapGetters} from "vuex";

export default {
  name: "FAQPage",
  transition: 'none',
  computed: {
    ...mapGetters('questions', ['activeCategoryTitle']),
  },
  beforeCreate() {
    this.$store.commit('questions/setActiveCategorySlug', this.$route.params.category)
    this.$store.commit('questions/setActiveQuestionId', this.$route.params.question)
  },
  head() {
    return {
      title: `${this.activeCategoryTitle} FAQ`
    };
  },
}
</script>

<style scoped>
.nuxt-link-active {
  @apply text-primary dark:text-secondary;
}

.nuxt-link-active img {
  /* TODO: weird, cannot recognize it */
  /* @apply dark:black-to-secondary;*/
}

p:empty {
  display: none;
}
</style>

