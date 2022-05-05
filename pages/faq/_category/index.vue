<template>
  <Questions
    :category="$route.params.category"
  />
</template>

<script>


import {mapGetters} from "vuex";

export default {
  name: "FAQPage",
  transition(to, from) {
    if (!from) {
      return 'page'
    }
    return (
      from.params.category === to.params.category ||
      to.name === 'faq-category-question' ||
      to.name === from.name
    ) ? 'none' : 'page';
  },
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

p:empty {
  display: none;
}
</style>

