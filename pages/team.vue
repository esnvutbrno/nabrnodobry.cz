<template>
  <div>
    <ul class="flex flex-row flex-wrap justify-center">
      <li v-for="head in heads"
          class="
            py-4 px-8 flex flex-col items-center justify-between
            font-bold w-1/2 sm:w-1/3 md:w-1/4
      ">
<!--                  :default="require('~/assets/img/woman-icon.png')" -->
        <TeamMemberPhoto
          :asset="head.fields.photo"
        ></TeamMemberPhoto>
        <h2 class="text-lg text-primary text-center my-1">{{ head.fields.name }}</h2>
        <h3 class="text-xs text-gray-600 text-center">{{ head.fields.position }}</h3>
      </li>
    </ul>

    <div class="border-secondary border-b-4 my-8"></div>

    <ul class="flex flex-row flex-wrap justify-center">
      <li v-for="member in members" class="
          p-4 font-bold flex flex-col items-center
          w-1/3 sm:w-1/5 md:w-1/6
      ">
        <TeamMemberPhoto
          :asset="member.fields.photo"
        ></TeamMemberPhoto>
        <h2 class="text-primary text-center my-1">{{ member.fields.name }}</h2>
        <h3 class="text-xs text-gray-600 text-center">{{ member.fields.position }}</h3>
      </li>
    </ul>
  </div>
</template>

<script>
import {createClient} from '~/plugins/contentful.js';

export default {
  name: 'TeamPage',
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
