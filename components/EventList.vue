<template>
  <ul
    :class="{'border-y-2 border-gray-500': nested}"
    class="
        list-disc list-outside mx-auto w-full max-w-xl
        flex flex-col gap-y-2
    "
  >
    <li
      v-for="e in events"
      :class="{
        'bg-primary text-white': e.fields.state === 'current',
        [`state-${e.fields.state}`]: true,
        'has-children': e.fields.events,
        'cursor-pointer': !e.fields.events,
      }"
      class="p-2 flex flex-col group"
      @click="!e.fields.events && $router.push({name: 'event-id', params: {id: e.sys.id}})"
    >
      <!-- main upper line -->
      <div
        class="flex flex-col sm:flex-row items-center"
      >
        <span
          :class="{
            'text-white dark:text-white': e.fields.state === 'current',
            'text-gray-500 dark:text-gray-500': e.fields.state === 'finished',
            'lg:text-lg': !nested
          }"
          class="
            flex-grow sm:flex-grow-0 self-start sm:self-center
            text-primary font-bold dark:text-white
          "
        >
          {{ e.fields.title }}
        </span>


        <!--        <span v-if="e.fields.events" class="flex-grow bg-secondary mx-4 h-px rounded-full"></span>-->
        <span class="flex-grow"></span>
        <!--          <span class="-->
        <!--            flex-grow group-odd:bg-gray-100 h-0.5 rounded-full self-center-->
        <!--            mx-4 hidden sm:block-->
        <!--          "></span>-->

        <span
          v-if="e.fields.place && e.fields.place.fields.title && showPlaces"
          :class="{'text-gray-500': e.fields.state === 'finished'}"
          class="self-end sm:self-auto flex flex-row gap-1 items-center mr-0 sm:mr-2  min-w-auto sm:min-w-[10rem] ml-4"
        >
            <img
              :class="{
                'black-to-white': e.fields.state === 'current',
              }"
              alt="Place"
              class="w-4 w-4 dark:black-to-white"
              src="~/assets/svg/place.svg"
            >
            {{ e.fields.place.fields.title }}
          </span>

        <time
          :class="{'text-gray-500': e.fields.state === 'finished'}"
          class="self-end sm:self-auto flex flex-row gap-1 items-center whitespace-nowrap min-w-auto sm:min-w-[10rem]"
        >
          <img
            :class="{
                'black-to-white': e.fields.state === 'current',
              }"
            alt="Time"
            class="w-3 w-3 dark:black-to-white"
            src="~/assets/svg/time.svg"
          >
          {{ e.fields.from }}
          <span v-if="e.fields.till" class="text-sm text-gray-500">– {{ e.fields.till }}</span>
        </time>
      </div>
      <div v-if="e.fields.events" class="px-4 my-4 text-sm">
        <EventList
          :events="e.fields.events"
          :nested="true"
          :show-places="!e.fields.place"
        ></EventList>
      </div>
    </li>
  </ul>
</template>

<script>
export default {
  name: "EventList",
  props: {
    events: Array,
    nested: {
      default: false,
    },
    showPlaces: {
      default: true,
    }
  }
}
</script>


<style scoped>
.state-upcoming:not(.has-children),
.state-finished:not(.has-children) {
  @apply odd:bg-gray-100 odd:hover:bg-gray-200 hover:bg-gray-100
  dark:odd:bg-gray-800 dark:hover:bg-gray-800 dark:odd:hover:bg-gray-700
}

</style>
