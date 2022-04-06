<template>
  <main>
    <header class="
        h-[20vh] md:h-[40vh] lg:h-[60vh]

        bg-[#2e3192]
        flex flex-row justify-center items-center">

      <div class="
        relative
        py-8 px-16
        md:py-32 md:px-56
        xl:py-44 xl:px-80
      ">
        <div class="
          hidden md:flex
          absolute top-0 left-0 w-full h-full flex-row justify-between items-center
        ">
          <!-- left -->
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

          <div class="h-full w-12 flex flex-col justify-end mb-12">
            <svg class="w-full" viewBox="0 0 99.534409 94.978874">
              <use :xlink:href="require('@/assets/svg/cb.svg') + '#main'"/>
            </svg>
          </div>

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
          text-2xl md:text-4xl lg:text-6xl xl:text-8xl
          uppercase text-white font-bold text-center leading-tight">
          NA Brno <br>dobrý
        </h1>
      </div>

    </header>

    <article class="mx-auto max-w-4xl p-8 text-lg text-justify">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et inventore minus soluta. Dolore explicabo illo magnam
      molestiae, obcaecati qui? Assumenda commodi laudantium modi numquam quas repudiandae sint. Magni provident, quae.
    </article>
  </main>
</template>

<script>
export default {
  name: "home"
}
</script>

<style scoped>
h1 {
  font-family: "Kelson Sans", sans-serif;
}
</style>
