<template>
  <article>
    <h1 class="
      text-3xl text-center font-bold text-primary dark:text-white pb-4
    ">
      Links
    </h1>

    <nav class="max-w-md mx-auto flex flex-col">
      <a
        v-for="l in links"
        :href="l.fields.url"
        class="border border-4 py-4 px-4 first:rounded-t last:rounded-b" rel="noopener,nofollow,noopener"
        target="_blank"
        v-bind="{['data-' + l.fields.variant]: true}"
      >
        <h2 class="md:text-lg font-medium uppercase">{{ l.fields.title }}</h2>
      </a>
    </nav>

  </article>
</template>

<script>
import {createClient} from "~/plugins/contentful";

export default {
  name: "LinksPage",
  components: {},
  async asyncData() {
    const client = createClient();
    const links = await client.getEntries({
      content_type: 'link',
      order: 'fields.order',
    });
    return {
      links: links.items,
    }
  },
  head() {
    return {
      title: 'Links'
    };
  },
}
</script>

<style scoped>
nav a {
  @apply hover:text-secondary;
}

nav a[data-light] {
  @apply border-primary hover:bg-gray-50;
}

nav a[data-accent] {
  @apply border-secondary hover:bg-gray-50 dark:hover:bg-gray-800;
}

nav a[data-dark] {
  @apply border-primary bg-primary text-white hover:text-secondary;
}

nav a[data-dark-accent] {
  @apply border-secondary bg-secondary text-white hover:text-primary;
}
</style>
