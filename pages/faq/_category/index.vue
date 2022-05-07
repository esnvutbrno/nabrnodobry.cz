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
  head() {
    return {
      title: `${this.activeCategoryTitle} FAQ`
    };
  },
  async fetch({route, error, store}) {
    store.commit('questions/setActiveCategorySlug', route.params.category)
    store.commit('questions/setActiveQuestionId', route.params.question)

    const selectedCategory = route.params.category

    if (!store.state.questions.categoriesSlugs.includes(selectedCategory))
      error({statusCode: 404, message: "Specified FAQ category not found."})
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

