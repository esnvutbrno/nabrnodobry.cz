<template>
  <div>
    <ul class="flex flex-row flex-wrap justify-center">
      <li v-for="head in heads"
          class="
            py-4 px-4 sm:px-8 flex flex-col items-center justify-between
            font-bold w-1/2 sm:w-1/3 md:w-1/4
      ">
        <ContentfulImage
          :asset="head.fields.photo"
          :default="require('~/assets/img/woman-icon.png')"
          class="
            w-full rounded-full
            transition-transform duration-300 ease-in-out hover:scale-110
          "
        />
        <h2 class="sm:text-lg text-primary dark:text-white text-center my-1">{{ head.fields.name }}</h2>
        <h3 class="text-xs text-gray-600 dark:text-gray-400 text-center">{{ head.fields.position }}</h3>
      </li>
    </ul>

    <div class="border-secondary border-b-4 my-8"></div>

    <div v-for="(members, team) in teams">
      <h2>{{ team }}</h2>
      <ul class="flex flex-row flex-wrap justify-center">
        <li v-for="member in members" class="
          p-4 font-bold flex flex-col items-center justify-between
          w-1/3 sm:w-1/5 md:w-1/6
      ">
          <ContentfulImage
            :asset="member.fields.photo"
            :default="require('~/assets/img/woman-icon.png')"
            class="
              w-full rounded-full mx-4
              transition-transform duration-300 ease-in-out hover:scale-110
            "
          />
          <h2 class="text-primary dark:text-white text-center my-1">{{ member.fields.name }}</h2>
          <h3 class="text-xs text-gray-600 dark:text-gray-400 text-center">{{ member.fields.position }}</h3>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import {createClient} from '~/plugins/contentful.js';
import _ from 'lodash'

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

    return {
      heads: heads.items,
      teams: _.groupBy(members.items, 'fields.team'),
    }
  },
  head() {
    return {
      title: 'Team'
    };
  },
};
</script>

<style scoped>

</style>
