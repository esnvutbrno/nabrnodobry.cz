<template>
  <article>
    <ul class="
        font-medium text-gray-800 dark:text-gray-100 text-lg
        flex flex-wrap flex-row justify-around md:justify-center items-center
    ">
      <li class="inline-block w-1/2 md:w-auto text-center" v-for="g in categories">
        <nuxt-link
          :to="{name: 'faq-category', params: {category: g.slug}}"
          class="
            inline-block p-1 md:p-4 hover:text-primary dark:hover:text-secondary
           "
        >{{ g.title }}
        </nuxt-link>
      </li>
    </ul>

    <div class="max-w-2xl mx-auto py-4 md:py-4">
      <div v-for="q in questions" class="group">
        <nuxt-link
          class="
            text-lg p-4 block
            hover:bg-gray-100 dark:hover:bg-gray-800
            flex flex-row items-center justify-between
          "
          :to="{hash: q.sys.id}"
        >
          <div class="sm:w-5/6">
            <RichTextRenderer
              v-if="q.fields.question"
              :document="q.fields.question"
            ></RichTextRenderer>
          </div>
          <img
            src="../../assets/svg/question-mark.svg"
            class="h-6 w-6 black-to-primary dark:black-to-white hidden sm:block"
            aria-hidden="true" alt="Question"
          >
        </nuxt-link>
        <div
          v-show="active === q.sys.id"
          class="p-4 bg-gray-50 dark:bg-gray-800 prose dark:prose-invert mx-auto prose-img:my-2"
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


import {createClient} from "@/plugins/contentful";
import _ from "lodash";
import slug from 'slug'
import RichTextRenderer from "contentful-rich-text-vue-renderer";

export default {
  name: "FAQPage",
  components: {RichTextRenderer},
  head() {
    return {
      title: 'FAQ'
    };
  },
  data() {
    let file;
    return {
      nodeRenderers: {
        'embedded-asset-block': (node, key, c, next) =>
          node.data && node.data.target &&
          node.data.target.fields && (file = node.data.target.fields.file) ? c(
          'img',
          {
            attrs: {
              src: file.url,
              width: file.details.image.width,
              height: file.details.image.height,
              class: ''
            }
          }
        ) : '',
      }
    }
  },
  computed: {
    active() {
      return this.$route.hash.slice(1)
    }
  },
  async asyncData({redirect, route, error}) {
    const selectedCategory = route.params.category
    if (!selectedCategory)
      return redirect({name: 'faq-category', params: {category: 'general'}})

    const client = createClient();
    const fetched = await client.getEntries({
      content_type: 'faq',
      // order: '-sys.createdAt',
    });
    const categories = _.sortBy(Object.keys(_.groupBy(
      fetched.items,
      _.property('fields.category')
    )).map(k => ({
      title: k,
      slug: slug(k),
    })), _.property('title'))
    let slugToTitle = {};
    const slugs = categories.map(v => (slugToTitle[v.slug] = v.title, v.slug))

    if (!slugs.includes(selectedCategory))
      return error({statusCode: 404, message: 'Unknown FAQ category.'})

    return {
      categories,
      questions: (await client.getEntries({
        content_type: 'faq',
        'fields.category': slugToTitle[selectedCategory],
        // order: '-sys.createdAt',
      })).items
    }
  },
}
</script>

<style scoped>
.nuxt-link-active {
  @apply text-primary dark:text-secondary;
}

.nuxt-link-active img {
  @apply dark:black-to-secondary;
}

p:empty {
  display: none;
}
</style>

