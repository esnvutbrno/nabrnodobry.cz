<template>
  <!--    :style="{transform: `scaleY(${mapNumber(collapseRatio, 1, 0, .2, 1)})`}"-->
  <Transition name="slide-down">
    <header
      ref="header"
      v-if="$route.path === '/'"
      class="
        transition-opacity
        min-h-[20vh] md:min-h-[50vh] lg:min-h-[70vh]

        bg-primary origin-bottom select-none
        flex flex-row justify-center items-center
      ">

      <div class="
        relative
        my-4 md:my-8 mx-4
        py-10     px-16
        md:py-32 md:px-56
        xl:py-44 xl:px-64
        pointer-events-none
      ">
        <!-- all the graphics -->
        <div class="
          flex
          absolute top-0 left-0 w-full h-full flex-col justify-between items-center
        ">
          <div class="w-full">
            <svg class="w-full fill-white" viewBox="0 0 968.067 180.367">
              <use :xlink:href="require('@/assets/svg/top.svg') + '#top'"/>
            </svg>
          </div>
          <!-- left column -->
          <div class="w-full flex flex-row justify-between items-end">
            <!-- left column -->
            <div class="h-full flex flex-col flex-grow justify-end items-start">
              <svg class="w-full" viewBox="0 0 530.766 465.521">
                <use :xlink:href="require('@/assets/svg/bl.svg') + '#bl'"/>
              </svg>
            </div>
            <!-- center star -->
            <div class="h-full w-1/5 flex flex-col justify-end self-end mb-[4%] max-w-[7%]">
              <svg class="w-full fill-white" viewBox="0 0 99.534409 94.978874">
                <use :xlink:href="require('@/assets/svg/cb.svg') + '#main'"/>
              </svg>
            </div>
            <!-- right column -->
            <div class="h-full flex flex-col flex-grow justify-end items-end">
              <svg class="w-full" viewBox="0 0 531.763 466.123">
                <use :xlink:href="require('@/assets/svg/br.svg') + '#br'"/>
              </svg>
            </div>
          </div>
        </div>

        <h1 class="
          text-xl sm:text-2xl md:text-5xl lg:text-6xl xl:text-7xl font-esn
          uppercase text-white text-center leading-tight
          mt-2 sm:mt-4 md:mt-6
          whitespace-nowrap
        ">
          <span class="font-bold">NA</span>
          Brno <br>dobrý 2022
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
