<template>
  <div>
    <div class="text-center text-2xl sm:text-4xl text-primary dark:text-white font-bold my-10 sm:my-20 block">
      Brno gonna be dobrý in <br>
      <Countdown
        :end-time="startTime"
        class=""
      />
    </div>

    <Announcements />

<!--    -->
<!--    <article class="text-lg text-justify" v-for="i in new Array(5)">-->
<!--      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et inventore minus soluta. Dolore explicabo illo magnam-->
<!--      molestiae, obcaecati qui? Assumenda commodi laudantium modi numquam quas repudiandae sint. Magni provident, quae.-->

<!--      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et inventore minus soluta. Dolore explicabo illo magnam-->
<!--      molestiae, obcaecati qui? Assumenda commodi laudantium modi numquam quas repudiandae sint. Magni provident, quae.-->

<!--      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et inventore minus soluta. Dolore explicabo illo magnam-->
<!--      molestiae, obcaecati qui? Assumenda commodi laudantium modi numquam quas repudiandae sint. Magni provident, quae.-->
<!--    </article>-->
  </div>
</template>

<script>
import {DateTime} from '@/utils/date';

export default {
  name: "IndexPage",
  data:() => ({
    startTime: DateTime.fromObject({year: 2022, month: 5, day: 12, hour: 18})
  })
}
</script>


