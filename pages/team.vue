<template>
  <div class="space-y-4 lg:space-y-8">
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
        <a
          v-if="head.fields.isImportant"
          :href="`tel:${head.fields.phone}`"
          class="
              text-sm text-gray-600 hover:text-gray-800 dark:text-gray-400 text-center
              flex flex-row gap-x-1.5 items-center group pt-1
            "
        >
          <svg
            class="
              w-4 h-4 bg-primary text-white p-[0.15rem] rounded-full
              group-hover:bg-secondary
              dark:text-primary dark:bg-white dark:group-hover:text-secondary dark:group-hover:bg-white
            "
            viewBox="0 0 53.942 53.942" xml:space="preserve"
            xmlns="http://www.w3.org/2000/svg">
              <path
                d="M53.364 40.908c-2.008-3.796-8.981-7.912-9.288-8.092-.896-.51-1.831-.78-2.706-.78-1.301 0-2.366.596-3.011 1.68-1.02 1.22-2.285 2.646-2.592 2.867-2.376 1.612-4.236 1.429-6.294-.629L17.987 24.467c-2.045-2.045-2.233-3.928-.632-6.291.224-.309 1.65-1.575 2.87-2.596.778-.463 1.312-1.151 1.546-1.995.311-1.123.082-2.444-.652-3.731-.173-.296-4.291-7.27-8.085-9.277a4.947 4.947 0 0 0-2.306-.573 4.908 4.908 0 0 0-3.49 1.445L4.7 3.986C.686 7.999-.767 12.548.379 17.506c.956 4.132 3.742 8.529 8.282 13.068l14.705 14.705c5.746 5.746 11.224 8.66 16.282 8.66h.001c3.72 0 7.188-1.581 10.305-4.698l2.537-2.537a4.908 4.908 0 0 0 .873-5.796z"
                fill="currentColor"/>
            </svg>
          {{ head.fields.phone }}
        </a>
      </li>
    </ul>

    <div class="border-secondary border-b-4 my-4"></div>

    <div v-for="(members, team) in teams">
      <h2 class="text-2xl text-center font-bold">{{ team }}</h2>
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
          <a
            v-if="member.fields.isImportant"
            :href="`tel:${member.fields.phone}`"
            class="
              text-xs text-gray-600 hover:text-gray-800 dark:text-gray-400 text-center
              flex flex-row gap-x-1 items-center group pt-1
            "
          >
            <svg
              class="
                w-4 h-4 bg-primary text-white p-[0.15rem] rounded-full
                group-hover:bg-secondary
                dark:text-primary dark:bg-white dark:group-hover:text-secondary dark:group-hover:bg-white
              "
              viewBox="0 0 53.942 53.942" xml:space="preserve"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M53.364 40.908c-2.008-3.796-8.981-7.912-9.288-8.092-.896-.51-1.831-.78-2.706-.78-1.301 0-2.366.596-3.011 1.68-1.02 1.22-2.285 2.646-2.592 2.867-2.376 1.612-4.236 1.429-6.294-.629L17.987 24.467c-2.045-2.045-2.233-3.928-.632-6.291.224-.309 1.65-1.575 2.87-2.596.778-.463 1.312-1.151 1.546-1.995.311-1.123.082-2.444-.652-3.731-.173-.296-4.291-7.27-8.085-9.277a4.947 4.947 0 0 0-2.306-.573 4.908 4.908 0 0 0-3.49 1.445L4.7 3.986C.686 7.999-.767 12.548.379 17.506c.956 4.132 3.742 8.529 8.282 13.068l14.705 14.705c5.746 5.746 11.224 8.66 16.282 8.66h.001c3.72 0 7.188-1.581 10.305-4.698l2.537-2.537a4.908 4.908 0 0 0 .873-5.796z"
                fill="currentColor"/>
            </svg>
            {{ member.fields.phone }}
          </a>
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
      // 'fields.isHead': false,
      order: 'fields.order,fields.isHead'
    });

    return {
      heads: heads.items,
      teams: _.groupBy(_.filter(members.items, 'fields.team'), 'fields.team'),
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
