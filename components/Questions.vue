<template>
  <article>
    <nav>
      <ul class="
        font-medium text-gray-800 dark:text-gray-100 text-lg
        flex flex-wrap flex-row justify-around md:justify-center items-center
      ">
        <li v-for="g in categories"
            class="
            inline-block w-1/2 md:w-auto text-center group
          "
        >
          <nuxt-link
            :to="{name: 'faq-category', params: {category: g.slug}}"
            class="
              inline-block p-1 md:p-4 hover:text-primary dark:hover:text-secondary

              relative
              after:absolute
              after:bottom-0 after:w-full after:h-1 after:bg-primary
              after:left-0 after:right-0
              group-last:after:rounded-r-full group-first:after:rounded-l-full
           "
          >{{ g.title }}
          </nuxt-link>
        </li>
      </ul>
    </nav>

    <div class="max-w-2xl mx-auto py-4 md:py-8">
      <div v-for="q in currentQuestions" class="group">
        <nuxt-link
          :class="{'text-primary dark:text-secondary': question === q.sys.id}"
          :to="{
            name: question === q.sys.id ? 'faq-category' : 'faq-category-question',
            params: {
              category: slug(q.fields.category),
              question: q.sys.id
            }
          }"
          class="
            text-lg p-4 block
            flex flex-row items-center justify-between

            group-odd:bg-gray-100 group-odd:hover:bg-gray-200 group-hover:bg-gray-100
            dark:group-odd:bg-gray-800 dark:group-hover:bg-gray-800 dark:group-odd:hover:bg-gray-700
          "
          href="#"
        >
          <div class="w-5/6 text-sm sm:text-base">
            <RichTextRenderer
              v-if="q.fields.question"
              :document="q.fields.question"
            ></RichTextRenderer>
          </div>
          <img
            alt="Question"
            aria-hidden="true"
            class="h-6 w-6 black-to-primary dark:black-to-white" src="../assets/svg/question-mark.svg"
            :class="{'dark:black-to-secondary black-to-secondary': question === q.sys.id}"
          >
        </nuxt-link>
        <div
          v-show="question === q.sys.id"
          class="p-4 bg-gray-50 dark:bg-gray-800 prose dark:prose-invert mx-auto prose-img:my-2 w-5/6"
        >
          <RichTextRenderer
            v-if="q.fields.answer"
            :document="q.fields.answer"
            :node-renderers="nodeRenderers"
          ></RichTextRenderer>
        </div>
      </div>
    </div>
  </article>
</template>

<script>
import RichTextRenderer from "contentful-rich-text-vue-renderer";
import slug from "slug";
import {mapGetters, mapState} from "vuex";

const assetBlockRenderer = (node, key, c, next) =>
  node.data && node.data.target &&
  node.data.target.fields && node.data.target.fields.file ? c(
    'img',
    {
      attrs: {
        src: node.data.target.fields.file.url,
        width: node.data.target.fields.file.details.image.width,
        height: node.data.target.fields.file.details.image.height,
        class: ''
      }
    }
  ) : '';

export default {
  name: "Questions",
  components: {RichTextRenderer},
  props: {
    category: String,
    question: String,
  },
  computed: {
    ...mapGetters('questions', ['currentQuestions']),
    ...mapState('questions', ['categoriesSlugs', 'categories']),
  },
  created() {
    this.nodeRenderers = {
      'embedded-asset-block': assetBlockRenderer,
    }
  },
  methods: {
    slug(v) {
      return slug(v)
    }
  },
  async fetch() {
    const selectedCategory = this.category
    if (!selectedCategory)
      return this.$router.replace({name: 'faq-category', params: {category: 'general'}})
  },
}
</script>

<style scoped>
.nuxt-link-active {
  @apply text-secondary;
}

nav .nuxt-link-active {
  @apply after:bg-secondary;
}
</style>
