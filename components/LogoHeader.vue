<template>
  <!--    :style="{transform: `scaleY(${mapNumber(collapseRatio, 1, 0, .2, 1)})`}"-->
  <Transition name="slide-down">
    <header
      ref="header"
      v-if="$route.path === '/'"
      class="
        transition-opacity
        min-h-[20vh] md:min-h-[40vh] lg:min-h-[60vh]

        bg-primary origin-bottom select-none
        flex flex-row justify-center items-center
      ">

      <div class="
        relative
        my-4 md:my-8 mx-4
        py-8     px-16
        md:py-32 md:px-56
        xl:py-44 xl:px-80
      ">
        <!-- all the graphics -->
        <div class="
          flex
          absolute top-0 left-0 w-full h-full flex-row justify-between items-center
        ">
          <!-- left column -->
          <div class="h-full flex flex-col flex-grow justify-between items-start">
            <svg class="w-[90%]" viewBox="0 0 143.18234 43.945191">
              <use :xlink:href="require('@/assets/svg/lt.svg') + '#main'"/>
            </svg>
            <svg class="w-[45%]" viewBox="0 0 82.385718 70.540856">
              <use :xlink:href="require('@/assets/svg/lc.svg') + '#main'"/>
            </svg>
            <svg class="w-[95%]" viewBox="0 0 167.10611 83.524864">
              <use :xlink:href="require('@/assets/svg/lb.svg') + '#main'"/>
            </svg>
          </div>
          <!-- center star -->
          <div class="h-full w-12 flex flex-col justify-end self-end mb-[3%]">
            <svg class="w-full fill-white" viewBox="0 0 99.534409 94.978874">
              <use :xlink:href="require('@/assets/svg/cb.svg') + '#main'"/>
            </svg>
          </div>
          <!-- right column -->
          <div class="h-full flex flex-col flex-grow justify-between items-end">
            <svg class="w-[90%]" viewBox="0 0 148.3029 41.617169">
              <use :xlink:href="require('@/assets/svg/rt.svg') + '#main'"/>
            </svg>
            <svg class="w-[45%]" viewBox="0 0 82.225755 72.054314">
              <use :xlink:href="require('@/assets/svg/rc.svg') + '#main'"/>
            </svg>
            <svg class="w-[95%]" viewBox="0 0 164.38843 84.490944">
              <use :xlink:href="require('@/assets/svg/rb.svg') + '#main'"/>
            </svg>
          </div>
        </div>

        <h1 class="
          text-xl sm:text-2xl md:text-5xl lg:text-6xl xl:text-8xl
          uppercase text-white font-bold text-center leading-tight">
          NA Brno <br>dobrý
        </h1>
      </div>
    </header>
  </Transition>
</template>

<script>
export default {
  name: "Header"
}
</script>

<style scoped>
h1 {
  font-family: "Kelson Sans", sans-serif;
}


.slide-down-enter-active {
  animation: slide-down 150ms cubic-bezier(0.4, 0, 0.2, 1);
}

.slide-down-leave-active {
  animation: slide-down 150ms cubic-bezier(0.4, 0, 0.2, 1) reverse;
}

@keyframes slide-down {
  from {
    transform: translateY(-100%);
    /*opacity: 0;*/
  }
  to {
    transform: translateY(0);
    /*opacity: 1;*/
  }
}
</style>
