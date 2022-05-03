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
    ...mapGetters('questions', ['activeQuestionTitle']),
  },
  beforeCreate() {
    this.$store.commit('questions/setActiveCategorySlug', this.$route.params.category)
    this.$store.commit('questions/setActiveQuestionId', this.$route.params.question)
  },
  head() {
    return {
      title: `${this.activeQuestionTitle}`
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

