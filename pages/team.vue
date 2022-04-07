<template>
  <div class="mx-auto max-w-4xl">
    <ul class="flex flex-row flex-wrap">
      <li v-for="head in heads" class="py-4 px-8 font-bold flex flex-col items-center w-1/2 md:w-1/4">
        <ContentfulImage
          :asset="head.fields.photo"
          :default="require('~/assets/img/woman-icon.png')"
          class="w-full pb-[100%] rounded-full"
        />
        <h2 class="text-xl text-primary text-center my-1">{{ head.fields.name }}</h2>
        <h3 class="text-xs text-gray-600 text-center">{{ head.fields.position }}</h3>
      </li>
    </ul>

    <div class="border-secondary border-b-4" ></div>

    <ul class="flex flex-row flex-wrap">
      <li v-for="member in members" class="p-4 font-bold flex flex-col items-center w-1/6">
        <ContentfulImage
          :asset="member.fields.photo"
          :default="require('~/assets/img/woman-icon.png')"
          class="w-full pb-[100%] rounded-full mx-4"
        />
        <h2 class="text-primary text-center my-1">{{ member.fields.name }}</h2>
        <h3 class="text-xs text-gray-600 text-center">{{ member.fields.position }}</h3>
      </li>
    </ul>
  </div>
</template>

<script>
import {createClient} from '~/plugins/contentful.js';

export default {
  async asyncData({env}) {
    const client = createClient();

    const heads = await client.getEntries({
      content_type: 'teamMember',
      'fields.isHead': true,
      order: 'fields.order'
    });
    const members = await client.getEntries({
      content_type: 'teamMember',
      'fields.isHead': false,
      order: 'fields.order'
    });

    return {heads: heads.items, members: members.items}
  },
};
</script>

<style scoped>

</style>
