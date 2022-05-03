<template>
  <article>
    <h1 class="text-center text-3xl md:text-6xl text-primary my-4 font-bold dark:text-white">NA Brno dobrý 2022</h1>
    <p class="text-lg text-justify">
      LOREM ipsum dolor sit amet, consectetur adipisicing elit. Aliquam eaque explicabo, fugit harum maiores molestiae
      neque nesciunt odit officia optio, quod repellendus! Dolor eligendi harum laboriosam natus nesciunt officiis
      totam.
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam eaque explicabo, fugit harum maiores molestiae
      neque nesciunt odit officia optio, quod repellendus! Dolor eligendi harum laboriosam natus nesciunt officiis
      totam.
    </p>
    <div class="my-4 gap-x-2 flex flex-row">
      <img
        src="https://brnenska.drbna.cz/files/drbna/images/page/2020/07/02/size4-15937127407149-60-hodari-se-raduji-ve-vetsine-mestskych-casti-letos-hody-budou.jpg"
        alt=""
        class="w-1/2"
        width="1000"
        height="668"
      >
      <img
        class="w-1/2"
        src="https://www.brno-cernovice.cz/wp-content/uploads/2020/09/118912822_3044061082387692_8123382978934372600_o.jpg"
        alt=""
        width="986"
        height="653"
      >
    </div>
    <p class="text-lg text-justify">
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam eaque explicabo, fugit harum maiores molestiae
    neque nesciunt odit officia optio, quod repellendus! Dolor eligendi harum laboriosam natus nesciunt officiis totam.
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam eaque explicabo, fugit harum maiores molestiae
    neque nesciunt odit officia optio, quod repellendus! Dolor eligendi harum laboriosam natus nesciunt officiis totam.
    </p>
    <div class="my-4 gap-x-2 flex flex-row">
      <img
        src="https://brnenska.drbna.cz/files/drbna/images/page/2021/09/11/size4-16313745103149-60-the-times-zaradily-brno-mezi-top-deset-nejlepsich-nehlavnich-mest.jpg"
        alt=""
        class="w-1/2"
        width="1000"
        height="621"
      >
      <img
        class="w-1/2"
        src="https://cdn.muni.cz/media/3325889/dsc00447e.jpg?mode=crop&center=0.51,0.61&rnd=132684945840000000&heightratio=0.75&width=600"
        alt=""
        width="600"
        height="450"
      >
    </div>
    <h1 class="text-center text-2xl md:text-4xl text-primary my-8 font-bold dark:text-white">ESN Brno United</h1>

    <p class="text-lg text-justify">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam eaque explicabo, fugit harum maiores molestiae
      neque nesciunt odit officia optio, quod repellendus! Dolor eligendi harum laboriosam natus nesciunt officiis
      totam.
    </p>
    <img
      src="../assets/img/esn-bu-anniversary.jpg"
      alt="" class="my-4" width="1784" height="832"
    >

    <h1 class="text-center text-3xl md:text-5xl text-primary my-8 font-bold dark:text-white">Our Partners</h1>

    <ul class="flex flex-row items-center justify-center flex-wrap lg:-mx-6">
      <li
        v-for="p in partners"
        class="w-full sm:w-1/2 md:w-1/3 px-6 pb-12 bg-white"
      >
        <img
          :class="{'w-full': p.includes('.svg')}"
          :src="p"
          alt=""
          class="max-w-full max-h-24 h-auto mx-auto"
        >
      </li>
    </ul>

  </article>
</template>

<script>
export default {
  name: "AboutPage",
  asyncData() {
    return {
      partners: [
        require('../assets/partners/vut.svg'),
        require('../assets/partners/mendelu.svg'),
        require('../assets/partners/muni.svg'),


        require('../assets/partners/esf.svg'),
        require('../assets/partners/dzs.svg'),

        require('../assets/partners/svet-plodu.svg'),
        require('../assets/partners/ponozkovice.svg'),
        require('../assets/partners/mandlarna.jpg'),
        require('../assets/partners/pijumate.png'),
        require('../assets/partners/ciderka.svg'),
      ]
    }
  },

  head() {
    return {
      title: 'About'
    };
  },
}
</script>

<style scoped>

</style>
