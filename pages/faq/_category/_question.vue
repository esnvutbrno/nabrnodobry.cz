<template>
  <Questions
    :category="$route.params.category"
    :question="$route.params.question"
  />
</template>

<script>


import {mapGetters} from "vuex";

export default {
  name: "FAQQuestionPage",
  transition: 'none',
  computed: {
    ...mapGetters('questions', ['activeQuestionTitle', 'activeCategoryTitle']),
  },
  head() {
    return {
      title: this.activeQuestionTitle
    };
  },
  async fetch({route, error, store}) {
    store.commit('questions/setActiveCategorySlug', route.params.category)
    store.commit('questions/setActiveQuestionId', route.params.question)

    if (!store.getters['questions/activeQuestionTitle'])
      error({statusCode: 404, message: "Specified question not found."})
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

