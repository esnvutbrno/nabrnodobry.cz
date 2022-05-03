<template>
  <article class="space-y-4 lg:space-y-8">
    <h1 class="
      text-4xl text-center font-bold text-primary dark:text-white
      pt-4
    ">
      Important Contacts
    </h1>
    <ul class="flex flex-row flex-wrap justify-center">
      <li v-for="head in members"
          class="
            py-4 px-4 sm:px-8 flex flex-col items-center justify-between
            font-bold w-1/2 md:w-1/4
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
              text-gray-600 hover:text-gray-800 dark:text-gray-400 text-center
              flex flex-row gap-x-1.5 items-center group pt-1
            "
        >
          <svg
            class="w-4 h-4 bg-primary text-white p-[0.15rem] rounded-full group-hover:bg-secondary"
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

    <a
      class="text-3xl py-4 font-bold text-primary dark:text-white flex justify-center hover:underline"
      href="mailto:oc_na@esncz.org">
      oc_na@esncz.org
    </a>

    <div class="border-secondary border-b-4 my-4"></div>

    <img
      alt="ESN Brno United"
      class="w-4/5 sm:w-1/3 mx-auto dark:black-to-white" height="80" loading="lazy"
      src="@/assets/svg/esn-bu-logo-black.svg"
      width="144"
    >

    <ul class="
      flex flex-col sm:flex-row max-w-2xl mx-auto justify-between
      text-xl
    ">
      <li class="flex flex-col items-center gap-y-1">
        🟥
        <strong>ESN VUT Brno</strong>
        <a class="hover:underline" href="https://esnvutbrno.cz">esnvutbrno.cz</a>
      </li>
      <li class="flex flex-col items-center gap-y-1">
        🟦
        <strong>ESN MUNI Brno</strong>
        <a class="hover:underline" href="https://esn.muni.cz/">esn.muni.cz</a>
      </li>
      <li class="flex flex-col items-center gap-y-1">
        🟩
        <strong>ESN MENDELU Brno</strong>
        <a class="hover:underline" href="http://esnmendelu.cz/">esnmendelu.cz</a>
      </li>
    </ul>


  </article>
</template>

<script>
import {createClient} from "@/plugins/contentful";

export default {
  name: "ContactPage",
  async asyncData({env}) {
    const client = createClient();

    const members = await client.getEntries({
      content_type: 'teamMember',
      'fields.isImportant': true,
      order: 'fields.order'
    });
    return {members: members.items}
  },
  head() {
    return {
      title: 'Contact'
    };
  },
}
</script>

<style scoped>

</style>
